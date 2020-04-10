import { put, takeEvery, all, call, select } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';


import firebase, { db } from '../utils/firebase';
import logger from '../utils/logger';
import * as constants from '../constants';


// TODO: reduxjs/toolkit had an example on how to reduce redux boilerplate even further

const addPayload = (payload) => ({ payload });

export const saveWarband = createAction(
  'SAVE_WARBAND_START', addPayload);


export const saveWarbandSuccess = createAction('SAVE_WARBAND_SUCCESS', addPayload);
export const saveWarbandError = createAction('SAVE_WARBAND_ERROR', addPayload);

export const removeWarbandSuccess = createAction('REMOVE_WARBAND_SUCCESS');
export const removeWarbandError = createAction('REMOVE_WARBAND_ERROR', addPayload);
export const removeWarband = createAction('REMOVE_WARBAND_START', addPayload);
export const removeWarbandReset = createAction('REMOVE_WARBAND_RESET');

export const getWarbands = createAction(
  'GET_WARBANDS_START'
);
export const getWarbandsSuccess = createAction('GET_WARBANDS_SUCCESS');
export const getWarbandsError = createAction('GET_WARBANDS_ERROR', addPayload);

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
  warbandsIndex: [],
  warbands: {},
  removeWarbandRequestState: '',
};

const reducer = createReducer(initialState, {
  [removeWarbandReset]: (state) => {
    state.removeWarbandRequestState = '';
  },
  [removeWarbandSuccess]: (state) => {
    state.removeWarbandRequestState = constants.SUCCESS;
  },
  [removeWarbandError]: (state) => {
    state.removeWarbandRequestState = constants.ERROR;
  },
  [removeWarband]: (state) => {
    state.removeWarbandRequestState = constants.LOADING;
  },
  [saveWarband]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [saveWarbandSuccess]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;

    state.warbands = {
      ...state.warbands,
      [action.payload. warband. warbandId]: action.payload. warband,
    };
  },
  [saveWarbandError]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
  [getWarbands]: (state) => {
    state.isLoadingGetWarbands = true;
    state.isSuccessGetWarbands = false;
    state.isErrorGetWarbands = false;
    state.errorGetWarbands = null;
  },
  [getWarbandsSuccess]: (state, action) => {
    const warbandsIndex = Object.keys(action.payload).sort((keyA, keyB) => {
      const valA = action.payload[keyA];
      const valB = action.payload[keyB];

      return valB.createdAt.seconds - valA.createdAt.seconds;

    });
    state.warbandsIndex = warbandsIndex;
    state.warbands = action.payload;
    state.isLoadingGetWarbands = false;
    state.isSuccessGetWarbands = true;
    state.isErrorGetWarbands = false;
    state.errorGetWarbands = null;
  },
  [getWarbandsError]: (state) => {
    state.isLoadingGetWarbands = false;
    state.isSuccessGetWarbands = false;
    state.isErrorGetWarbands = true;
    state.errorGetWarbands = null; // TODO: add error here
  },


});


const callSaveWarband = (warband, uuid) => {

  if (warband && warband. warbandId && warband. warbandId !== 'new') {
    return db
      .collection('users')
      .doc(uuid)
      .collection('warbands')
      .doc(warband. warbandId)
      .set({ createdAt: firebase.firestore.Timestamp.now(), ... warband });
  } else {
    return db
      .collection('users')
      .doc(uuid)
      .collection('warbands')
      .add({ createdAt: firebase.firestore.Timestamp.now(), ... warband });
  }

};


// Api
const callRemoveWarband = (warbandId, uuid) => {
  return db
    .collection('users')
    .doc(uuid)
    .collection('warbands')
    .doc(warbandId)
    .delete();
};


const callGetWarbands = (uuid) => {

  return db
    .collection('users')
    .doc(uuid)
    .collection('warbands')
    .get()
    .then(querySnapshot => {

      const warbands = {};
      querySnapshot.forEach(function(doc) {

        const warband = doc.data();

        warbands[doc.id] = warband;
      });
      return warbands;

    });

};

function* handleGetWarbands () {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    const result = yield call(callGetWarbands, uuid);
    yield put(getWarbandsSuccess(result));
  } catch (e) {
    logger.error(e);
    yield put(getWarbandsError(e));
  }
}


// Sagas for side-effects
function* handleSaveWarband(action) {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    const result = yield call(callSaveWarband, action.payload, uuid);
    yield put(saveWarbandSuccess({ result, warband: action.payload }));
    yield put(getWarbands());
  } catch (e) {
    logger.error(e);
    yield put(saveWarbandError(e));
  }
}

function* handleRemoveWarband(action) {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    yield call(callRemoveWarband, action.payload, uuid);
    yield put(removeWarbandSuccess());
    yield put(getWarbands());
  } catch (e) {
    logger.error(e);
    yield put(removeWarbandError(e));
  }
}

function* watchSaveWarband() {
  yield takeEvery(saveWarband, handleSaveWarband);
}


function* watchGetWarbands() {
  yield takeEvery(getWarbands, handleGetWarbands);
}

function* watchRemoveWarband() {
  yield takeEvery(removeWarband, handleRemoveWarband);
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSaveWarband(),
    watchRemoveWarband(),
    watchGetWarbands(),
  ]);
}


export default {
  reducer,
  saga,
};