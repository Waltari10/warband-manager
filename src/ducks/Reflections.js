import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';


import firebase, { db } from '../utils/firebase';


// TODO: reduxjs/toolkit had an example on how to reduce redux boilerplate even further

export const saveReflection = createAction(
  'SAVE_REFLECTION_START', (reflection) => ({ payload: reflection })
);
export const saveReflectionSuccess = createAction('SAVE_REFLECTION_SUCCESS');
export const saveReflectionError = createAction('SAVE_REFLECTION_ERROR');

export const getReflections = createAction(
  'GET_REFLECTIONS_START'
);
export const getReflectionsSuccess = createAction('GET_REFLECTIONS_SUCCESS');
export const getReflectionsError = createAction('GET_REFLECTIONS_ERROR');

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

const reducer = createReducer(initialState, {
  [saveReflection]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [saveReflectionSuccess]: (state) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
  },
  [saveReflectionError]: (state) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = null;
  },
  [getReflections]: (state) => {
    state.isLoadingGetReflections = true;
    state.isSuccessGetReflections = false;
    state.isErrorGetReflections = false;
    state.errorGetReflections = null;
  },
  [getReflectionsSuccess]: (state, action) => {
    state.reflections = action.payload;
    state.isLoadingGetReflections = false;
    state.isSuccessGetReflections = true;
    state.isErrorGetReflections = false;
    state.errorGetReflections = null;
  },
  [getReflectionsError]: (state, action) => {
    state.isLoadingGetReflections = false;
    state.isSuccessGetReflections = false;
    state.isErrorGetReflections = true;
    state.errorGetReflections = null; // TODO: add error here
  },


});


const callSaveReflection = (reflection) => {
  return db.collection('reflections').add({ createdAt: firebase.firestore.Timestamp.now(), ...reflection });
};


// Api
const callGetReflections = () => {

  return db.collection('reflections').get().then(querySnapshot => {

    const reflections = {};
    querySnapshot.forEach(function(doc) {
      reflections[doc.id] = doc.data();
    });
    return reflections;

  });

};

function* handleGetReflections () {
  try {
    const result = yield call(callGetReflections);
    yield put(getReflectionsSuccess(result));
  } catch (e) {
    yield put(getReflectionsError(e));
  }
}


// Sagas for side-effects
function* handleSaveReflection(action) {
  try {
    const result = yield call(callSaveReflection, action.payload);
    yield put(saveReflectionSuccess(result));
  } catch (e) {
    yield put(saveReflectionError(e));
  }
}

function* watchSaveReflection() {
  yield takeEvery(saveReflection, handleSaveReflection);
}


function* watchGetReflections() {
  yield takeEvery(getReflections, handleGetReflections);
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSaveReflection(),
    watchGetReflections(),
  ]);
}


export default {
  reducer,
  saga,
};