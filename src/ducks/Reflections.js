import { put, takeEvery, all, call, select } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';


import firebase, { db } from '../utils/firebase';
import logger from '../utils/logger';
import * as constants from '../constants';


// TODO: reduxjs/toolkit had an example on how to reduce redux boilerplate even further

const addPayload = (payload) => ({ payload });

export const saveReflection = createAction(
  'SAVE_REFLECTION_START', addPayload);


export const saveReflectionSuccess = createAction('SAVE_REFLECTION_SUCCESS', addPayload);
export const saveReflectionError = createAction('SAVE_REFLECTION_ERROR', addPayload);
export const saveReflectionReset = createAction('SAVE_REFLECTION_RESET');

export const removeReflectionSuccess = createAction('REMOVE_REFLECTION_SUCCESS');
export const removeReflectionError = createAction('REMOVE_REFLECTION_ERROR', addPayload);
export const removeReflection = createAction('REMOVE_REFLECTION_START', addPayload);
export const removeReflectionReset = createAction('REMOVE_REFLECTION_RESET');

export const getReflections = createAction(
  'GET_REFLECTIONS_START'
);
export const getReflectionsSuccess = createAction('GET_REFLECTIONS_SUCCESS');
export const getReflectionsError = createAction('GET_REFLECTIONS_ERROR', addPayload);

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
  reflections: {},
  removeReflectionRequestState: '',
};

const reducer = createReducer(initialState, {
  [removeReflectionSuccess]: (state) => {
    state.removeReflectionRequestState = constants.SUCCESS;
  },
  [removeReflectionError]: (state) => {
    state.removeReflectionRequestState = constants.ERROR;
  },
  [removeReflection]: (state) => {
    state.removeReflectionRequestState = constants.LOADING;
  },
  [saveReflectionReset]: (state) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [saveReflection]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [saveReflectionSuccess]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;

    state.reflections = {
      ...state.reflections,
      [action.payload.result.id]: action.payload.reflection,
    };
  },
  [saveReflectionError]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
  [getReflections]: (state) => {
    state.isLoadingGetReflections = true;
    state.isSuccessGetReflections = false;
    state.isErrorGetReflections = false;
    state.errorGetReflections = null;
  },
  [getReflectionsSuccess]: (state, action) => {
    state.reflectionsIndex = Object.keys(action.payload).sort((keyA, keyB) => {
      const valA = action.payload[keyA];
      const valB = action.payload[keyB];

      return valB.createdAt.seconds - valA.createdAt.seconds;
      
    });
    state.reflections = action.payload;
    state.isLoadingGetReflections = false;
    state.isSuccessGetReflections = true;
    state.isErrorGetReflections = false;
    state.errorGetReflections = null;
  },
  [getReflectionsError]: (state) => {
    state.isLoadingGetReflections = false;
    state.isSuccessGetReflections = false;
    state.isErrorGetReflections = true;
    state.errorGetReflections = null; // TODO: add error here
  },


});


const callSaveReflection = (reflection, uuid) => {

  if (reflection && reflection.reflectionId && reflection.reflectionId !== 'new') {
    return db
      .collection('users')
      .doc(uuid)
      .collection('reflections')
      .doc(reflection.reflectionId)
      .set({ createdAt: firebase.firestore.Timestamp.now(), ...reflection });
  } else {
    return db
      .collection('users')
      .doc(uuid)
      .collection('reflections')
      .add({ createdAt: firebase.firestore.Timestamp.now(), ...reflection });
  }

};


// Api
const callRemoveReflection = (reflectionId, uuid) => {
  return db
    .collection('users')
    .doc(uuid)
    .collection('reflections')
    .doc(reflectionId)
    .delete();
};

const callGetReflections = (uuid) => {

  return db
    .collection('users')
    .doc(uuid)
    .collection('reflections')
    .get()
    .then(querySnapshot => {

      const reflections = {};
      querySnapshot.forEach(function(doc) {
        reflections[doc.id] = doc.data();
      });
      return reflections;

    });

};

function* handleGetReflections () {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    const result = yield call(callGetReflections, uuid);
    yield put(getReflectionsSuccess(result));
  } catch (e) {
    logger.error(e);
    yield put(getReflectionsError(e));
  }
}


// Sagas for side-effects
function* handleSaveReflection(action) {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    const result = yield call(callSaveReflection, action.payload, uuid);
    yield put(saveReflectionSuccess({ result, reflection: action.payload }));
  } catch (e) {
    logger.error(e);
    yield put(saveReflectionError(e));
  }
}

function* handleRemoveReflection(action) {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    yield call(callRemoveReflection, action.payload, uuid);
    yield put(removeReflectionSuccess());
  } catch (e) {
    logger.error(e);
    yield put(removeReflectionError(e));
  }
}

function* watchSaveReflection() {
  yield takeEvery(saveReflection, handleSaveReflection);
}


function* watchGetReflections() {
  yield takeEvery(getReflections, handleGetReflections);
}

function* watchRemoveReflection() {
  yield takeEvery(removeReflection, handleRemoveReflection);
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSaveReflection(),
    watchRemoveReflection(),
    watchGetReflections(),
  ]);
}


export default {
  reducer,
  saga,
};