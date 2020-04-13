import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';

import * as constants from '../constants';


import firebase, { config as firebaseConfig } from '../utils/firebase';


export const signupWithEmail = createAction(
  'SIGNUP_WITH_EMAIL', (email, password) => ({ payload: { email, password } })
);

export const sendResetPasswordEmail = createAction('SEND_RESET_PASSWORD_EMAIL_START');
export const sendResetPasswordEmailSuccess = createAction('SEND_RESET_PASSWORD_EMAIL_SUCCESS');
export const sendResetPasswordEmailError = createAction('SEND_RESET_PASSWORD_EMAIL_ERROR');
export const signupWithEmailSuccess = createAction('SIGNUP_WITH_EMAIL_SUCCESS');
export const signupWithEmailError = createAction('SIGNUP_WITH_EMAIL_ERROR');

export const addUserToState = createAction('ADD_USER_TO_STATE', (user) => ({ payload: user }));
// Actions
export const googleSignIn = createAction('GOOGLE_SIGN_IN_START');
export const googleSignInSuccess = createAction('GOOGLE_SIGN_IN_SUCCESS');
export const googleSignInError = createAction('GOOGLE_SIGN_IN_ERROR');

export const loginWithEmail = createAction(
  'LOGIN_WITH_EMAIL', (email, password) => ({ payload: { email, password } })
);
export const loginWithEmailSuccess = createAction('LOGIN_WITH_EMAIL_SUCCESS');
export const loginWithEmailError = createAction('LOGIN_WITH_EMAIL_ERROR');
export const readSession = createAction('READ_SESSION');

export const logout = createAction('LOGOUT');

const initialState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: null,
  user: null,
  sendResetPasswordEmailRequestState: '',
};

const reducer = createReducer(initialState, {
  [sendResetPasswordEmailSuccess]: (state) => {
    state.sendResetPasswordEmailRequestState = constants.SUCCESS;
  },
  [sendResetPasswordEmailError]: (state) => {
    state.sendResetPasswordEmailRequestState = constants.ERROR;
  },
  [sendResetPasswordEmail]: (state) => {
    state.sendResetPasswordEmailRequestState = constants.LOADING;
  },
  [addUserToState]: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
  },
  [logout]: (state) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
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
    state.user = action.payload.user;
  },
  [loginWithEmailError]: (state, action) => {
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
    state.user = action.payload.user;
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
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};


const callSendResetPasswordEmail = (email) => {
  const auth = firebase.auth();
  return auth.sendPasswordResetEmail(email);
};

const handleLogout = () => {

  firebase.auth().signOut();
};

const callLoginWithEmail = ({ email, password }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const callGoogleSign = async () => {
  if (!firebase.auth().currentUser) {

    const provider = new firebase.auth.GoogleAuthProvider();

    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

    return await firebase.auth().signInWithPopup(provider);
  }
};


// Sagas for side-effects
function* handleLoginWithEmail(action) {
  try {
    const result = yield call(callLoginWithEmail, action.payload);

    const parsedResult = JSON.parse(JSON.stringify(result));

    yield put(loginWithEmailSuccess(parsedResult));
  } catch (e) {
    yield put(loginWithEmailError(e));
  }
}

function* handleGoogleSignIn(action) {
  try {
    const result = yield call(callGoogleSign, action.payload);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    yield put(googleSignInSuccess({ user: JSON.parse(JSON.stringify(user)), token }));
  } catch (e) {
    yield put(googleSignInError(e));
  }
}

function* handleReadSession () {
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
  );

  if (user) {
    yield put(addUserToState(JSON.parse(user)));
  } else {
    yield put(logout());
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


// Sagas for side-effects
function* handlSignupWithEmail(action) {
  try {
    const result = yield call(callSignupWithEmail, action.payload);
    const parsedResult = JSON.parse(JSON.stringify(result));
    yield put(signupWithEmailSuccess(parsedResult));
  } catch (e) {
    yield put(signupWithEmailError(e));
  }
}

function* handleSendResetPasswordEmail(action) {
  try {
    yield call(callSendResetPasswordEmail, action.payload);
    yield put(sendResetPasswordEmailSuccess());
  } catch (e) {
    yield put(sendResetPasswordEmailError(e));
  }
}


function* watchSignupWithEmail() {
  yield takeEvery(signupWithEmail, handlSignupWithEmail);
}

function* watchReadSession() {
  yield takeEvery(readSession, handleReadSession);
}

function* watchResetPassword() {
  yield takeEvery(sendResetPasswordEmail, handleSendResetPasswordEmail);

}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchLoginWithEmail(),
    watchGoogleSignIn(),
    watchLogout(),
    watchSignupWithEmail(),
    watchReadSession(),
    watchResetPassword(),
  ]);
}


export default {
  reducer,
  saga,
  api: {
    callSignupWithEmail,
    callSendResetPasswordEmail,
    callGoogleSign,
    handleLogout,
    callLoginWithEmail,
  },
};