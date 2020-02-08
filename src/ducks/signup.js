import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';

import firebase from '../utils/firebase';
import * as actions from './login';

export const signupWithEmail = createAction(
  'SIGNUP_WITH_EMAIL', (email, password) => ({ payload: { email, password } })
);
export const signupWithEmailSuccess = createAction('SIGNUP_WITH_EMAIL_SUCCESS');
export const signupWithEmailError = createAction('SIGNUP_WITH_EMAIL_ERROR');

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
  user: null,
};

const reducer = createReducer(initialState, {
  [actions.googleSignIn]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [actions.googleSignInSuccess]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload.user;
  },
  [actions.googleSignInError]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
  [signupWithEmail]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [signupWithEmailSuccess]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload;
  },
  [signupWithEmailError]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
});


// Api
const callSignupWithEmail = ({ email, password }) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};


// Sagas for side-effects
function* handleLoginWithEmail(action) {
  try {
    const result = yield call(callSignupWithEmail, action.payload);
    yield put(signupWithEmailSuccess(result));
  } catch (e) {
    yield put(signupWithEmailError(e));
  }
}

function* watchSignupWithEmail() {
  yield takeEvery(signupWithEmail, handleLoginWithEmail);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSignupWithEmail(),
  ]);
}


export default {
  reducer,
  saga,
  api: {
  },
};