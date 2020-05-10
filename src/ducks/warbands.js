import { put, takeEvery, all, call, select } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { captureException } from '@sentry/browser';

import firebase, { db } from '../utils/firebase';
import logger from '../utils/logger';
import * as constants from '../constants';
import { enqueueSnackbar } from './notifier';

// TODO: reduxjs/toolkit had an example on how to reduce redux boilerplate even further

const addPayload = (payload) => ({ payload });

export const saveWarband = createAction('SAVE_WARBAND_START', addPayload);
export const saveWarbandSuccess = createAction('SAVE_WARBAND_SUCCESS', addPayload);
export const saveWarbandError = createAction('SAVE_WARBAND_ERROR', addPayload);
export const saveWarbandReset = createAction('SAVE_WARBAND_RESET');


export const addWarband = createAction('ADD_WARBAND_START', addPayload);
export const addWarbandSuccess = createAction('ADD_WARBAND_SUCCESS', addPayload);
export const addWarbandError = createAction('ADD_WARBAND_ERROR', addPayload);
export const addWarbandReset = createAction('ADD_WARBAND_RESET');

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
  addWarbandRequestState: '',
  lastAddedWarbandId: null,
};

const reducer = createReducer(initialState, {
  [addWarband]: (state) => {
    state.addWarbandRequestState = constants.LOADING;
  },
  [addWarbandSuccess]: (state, action) => {
    state.addWarbandRequestState = constants.SUCCESS;
    state.lastAddedWarbandId = action.payload.id;
  },
  [addWarbandError]: (state) => {
    state.addWarbandRequestState = constants.ERROR;
  },
  [addWarbandReset]: (state) => {
    state.addWarbandRequestState = '';
    state.lastAddedWarbandId = null;
  },
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
  [saveWarbandReset]: (state) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [saveWarbandSuccess]: (state) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
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


const callSetWarband = (warband, uuid) => {
  return db
    .collection('users')
    .doc(uuid)
    .collection('warbands')
    .doc(warband.warbandId)
    .set({ createdAt: firebase.firestore.Timestamp.now(), ...warband }); // This doesn't return document reference
};

const callAddWarband = (warband, uuid) => {
  return db
    .collection('users')
    .doc(uuid)
    .collection('warbands')
    .add({ createdAt: firebase.firestore.Timestamp.now(), ...warband });
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
        warband.warbandId = doc.id;

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
    captureException(e);

    yield put(enqueueSnackbar({
      message: 'Failed to fetch warbands. Please try again later',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'warning',
      },
    }));
    yield put(getWarbandsError(e));
  }
}


// Sagas for side-effects
function* handleSaveWarband(action) {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    const result = yield call(callSetWarband, action.payload, uuid);
    yield put(saveWarbandSuccess({ result, warband: action.payload }));
    yield put(getWarbands());
  } catch (e) {
    logger.error(e);
    captureException(e);
    yield put(enqueueSnackbar({
      message: 'Failed to autosave warband. Your changes may be lost.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'error',
      },
    }));
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
    captureException(e);
    yield put(enqueueSnackbar({
      message: 'Failed to remove warband.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'error',
      },
    }));
    yield put(removeWarbandError(e));
  }
}

function* handleAddWarband(action) {
  try {
    const uuid = yield select((state) => state.user.user.uid);
    const res = yield call(callAddWarband, action.payload, uuid);
    yield put(addWarbandSuccess(res));
    yield put(getWarbands());
  } catch (e) {
    logger.error(e);
    captureException(e);
    yield put(enqueueSnackbar({
      message: 'Failed to add warband.',
      options: {
        key: new Date().getTime() + Math.random(),
        variant: 'error',
      },
    }));
    yield put(addWarbandError(e));
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

function* watchAddWarband() {
  yield takeEvery(addWarband, handleAddWarband);

}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSaveWarband(),
    watchAddWarband(),
    watchRemoveWarband(),
    watchGetWarbands(),
  ]);
}


export default {
  reducer,
  saga,
  api: {
    callGetWarbands,
    callRemoveWarband,
    callAddWarband,
    callSetWarband,
  },
};