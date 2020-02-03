// https://github.com/erikras/ducks-modular-redux
// https://github.com/alexnm/re-ducks
// https://redux-toolkit.js.org/introduction/quick-start

import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';


// Actions
export const savePhoneNumber = createAction('SAVE_PHONENUMBER_START');
export const resetPhoneNumber = createAction('RESET_PHONENUMBER');
const savePhoneNumberSuccess = createAction(
  'SAVE_PHONENUMBER_SUCCESS', (phonenumber) => ({ payload: phonenumber }),
);
const savePhoneNumberError = createAction('SAVE_PHONENUMBER_ERROR');

const initialState = {
  phonenumber: '',
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const reducer = createReducer(initialState, {
  [savePhoneNumber.toString()]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
  },
  [resetPhoneNumber.toString()]: (state) => {
    state.isError = false;
    state.isSuccess = false;
    state.isLoading = false;
    state.phonenumber = '';
  },
  [savePhoneNumberSuccess.toString()]: (state, action) => {
    state.isSuccess = true;
    state.isError = false;
    state.isLoading = false;
    state.phonenumber = action.payload;
  },
  [savePhoneNumberError.toString()]: (state) => {
    state.isSuccess = false;
    state.isError = true;
    state.isLoading = false;
  },
});


// Api

export const postPhoneNumber = () => new Promise(
  (resolve, reject) => {

    // 50% chance of success, unpredictable
    const isSuccess = true;//!!Math.round(Math.random());

    if (isSuccess) {
      setTimeout(resolve, 1000);
    } else {
      setTimeout(reject, 1000);
    }

  },
);

// Sagas for side-effects
function* savePhoneNumberStart(action) {
  try {
    yield call(postPhoneNumber, action.payload);
    yield put(savePhoneNumberSuccess(action.payload));
  } catch (e) {
    yield put(savePhoneNumberError());
  }
}

function* watchSavePhoneNumberAsync() {
  yield takeEvery(savePhoneNumber.toString(), savePhoneNumberStart);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSavePhoneNumberAsync(),
  ]);
}


export default {
  reducer,
  saga,
  api: {
    postPhoneNumber,
  },
};