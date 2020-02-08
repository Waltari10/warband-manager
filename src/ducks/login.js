import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';

import firebase from '../utils/firebase';


// Actions
export const googleSignIn = createAction('GOOGLE_SIGN_IN_START');
export const googleSignInSuccess = createAction('GOOGLE_SIGN_IN_SUCCESS');
export const googleSignInError = createAction('GOOGLE_SIGN_IN_ERROR');

export const loginWithEmail = createAction(
  'LOGIN_WITH_EMAIL', (email, password) => ({ payload: { email, password } })
);
export const loginWithEmailSuccess = createAction('LOGIN_WITH_EMAIL_SUCCESS');
export const loginWithEmailError = createAction('LOGIN_WITH_EMAIL_ERROR');

export const logout = createAction('LOGOUT');

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
  user: null,
};

const reducer = createReducer(initialState, {
  [googleSignIn]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [googleSignInSuccess]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload.user;
  },
  [googleSignInError]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
  [loginWithEmail]: (state) => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [loginWithEmailSuccess]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload;
  },
  [loginWithEmailError]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
});


// Api

const handleLogout = () => {

  firebase.auth().signOut();
};

const callLoginWithEmail = ({ email, password }) => {

  return firebase.auth().signInWithEmailAndPassword(email, password);

};

const callGoogleSign = () => {

  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();


    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    return firebase.auth().signInWithPopup(provider);
  }
};


// Sagas for side-effects
function* handleLoginWithEmail(action) {
  try {
    const result = yield call(callLoginWithEmail, action.payload);
    yield put(loginWithEmailSuccess(result));
  } catch (e) {
    yield put(loginWithEmailError(e));
  }
}

function* handleGoogleSignIn(action) {
  try {
    const result = yield call(callGoogleSign, action.payload);
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    yield put(googleSignInSuccess({ user, token }));
  } catch (e) {
    yield put(googleSignInError(e));
  }
}

function* watchLoginWithEmail() {
  yield takeEvery(loginWithEmail, handleLoginWithEmail);
}

function* watchGoogleSignIn() {
  yield takeEvery(googleSignIn, handleGoogleSignIn);
}

function* watchLogout() {
  yield takeEvery(logout, handleLogout);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchLoginWithEmail(),
    watchGoogleSignIn(),
    watchLogout(),
  ]);
}


export default {
  reducer,
  saga,
  api: {
  },
};