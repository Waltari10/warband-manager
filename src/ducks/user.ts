import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { captureException } from '@sentry/browser';

import logger from '../utils/logger';

import * as constants from '../constants';

import firebase, { config as firebaseConfig } from '../utils/firebase';
import { addPayload } from './warbands';

export const signupWithEmail = createAction(
  'SIGNUP_WITH_EMAIL',
  (email, password) => ({ payload: { email, password } }),
);
export const resetUser = createAction('RESET_USER');

export const sendResetPasswordEmail = createAction(
  'SEND_RESET_PASSWORD_EMAIL_START',
);
export const sendResetPasswordEmailSuccess = createAction(
  'SEND_RESET_PASSWORD_EMAIL_SUCCESS',
);
export const sendResetPasswordEmailError = createAction(
  'SEND_RESET_PASSWORD_EMAIL_ERROR',
  addPayload,
);
export const signupWithEmailSuccess = createAction(
  'SIGNUP_WITH_EMAIL_SUCCESS',
  addPayload,
);
export const signupWithEmailError = createAction(
  'SIGNUP_WITH_EMAIL_ERROR',
  addPayload,
);

export const addUserToState = createAction('ADD_USER_TO_STATE', user => ({
  payload: user,
}));
// Actions
export const googleSignIn = createAction('GOOGLE_SIGN_IN_START');
export const googleSignInSuccess = createAction(
  'GOOGLE_SIGN_IN_SUCCESS',
  addPayload,
);
export const googleSignInError = createAction(
  'GOOGLE_SIGN_IN_ERROR',
  addPayload,
);

export const loginWithEmail = createAction(
  'LOGIN_WITH_EMAIL',
  (email, password) => ({ payload: { email, password } }),
);
export const loginWithEmailSuccess = createAction(
  'LOGIN_WITH_EMAIL_SUCCESS',
  addPayload,
);
export const loginWithEmailError = createAction(
  'LOGIN_WITH_EMAIL_ERROR',
  addPayload,
);
export const readSession = createAction('READ_SESSION');

export const logout = createAction('LOGOUT');

interface ProviderData {
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
  email: string | null;
  phoneNumber: string | null;
  providerId: string | null;
}

interface StsTokenManager {
  apiKey: string | null;
  refreshToken: string | null;
  accessToken: string | null;
  expirationTime: number | null;
}

interface MultiFactor {
  enrolledFactors: unknown[];
}

interface User {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  emailVerified: boolean;
  phoneNumber: null | string;
  isAnonymous: boolean;
  tenantId: null | string;
  providerData: ProviderData[];
  apiKey: string;
  appName: string;
  authDomain: string;
  stsTokenManager: StsTokenManager;
  redirectEventId: string | null;
  lastLoginAt: string | null;
  createdAt: string | null;
  multiFactor: MultiFactor;
}

export interface UserState {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: unknown | null;
  sendResetPasswordEmailRequestState: string;
  user: User | null;
}

const initialState: UserState = {
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: null,
  user: null,
  sendResetPasswordEmailRequestState: '',
};

const reducer = createReducer(initialState, {
  [resetUser.toString()]: state => {
    state.isLoading = false;
    state.isError = false;
    state.isSuccess = false;
    state.error = null;
    state.sendResetPasswordEmailRequestState = '';
  },
  [sendResetPasswordEmailSuccess.toString()]: state => {
    state.sendResetPasswordEmailRequestState = constants.SUCCESS;
  },
  [sendResetPasswordEmailError.toString()]: state => {
    state.sendResetPasswordEmailRequestState = constants.ERROR;
  },
  [sendResetPasswordEmail.toString()]: state => {
    state.sendResetPasswordEmailRequestState = constants.LOADING;
  },
  [addUserToState.toString()]: (state, action) => {
    state.user = action.payload;
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
  },
  [logout.toString()]: state => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [googleSignIn.toString()]: state => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [googleSignInSuccess.toString()]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload.user;
  },
  [googleSignInError.toString()]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
  [loginWithEmail.toString()]: state => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [loginWithEmailSuccess.toString()]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload.user;
  },
  [loginWithEmailError.toString()]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
  [signupWithEmail.toString()]: state => {
    state.isLoading = true;
    state.isSuccess = false;
    state.isError = false;
    state.error = null;
  },
  [signupWithEmailSuccess.toString()]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = true;
    state.isError = false;
    state.error = null;
    state.user = action.payload.user;
  },
  [signupWithEmailError.toString()]: (state, action) => {
    state.isLoading = false;
    state.isSuccess = false;
    state.isError = true;
    state.error = action.payload;
  },
});

// Api
const callSignupWithEmail = ({
  email, password }: {
    email: string, password: string
  }): Promise<firebase.auth.UserCredential> => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

const callSendResetPasswordEmail = (email: string): Promise<void> => {
  const auth = firebase.auth();
  return auth.sendPasswordResetEmail(email);
};

const handleLogout = (): void => {
  firebase.auth().signOut();
};


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const callLoginWithEmail = ({ email, password }: {
  email: string, password: string
}) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const callGoogleSign = async () => {
  if (!firebase.auth().currentUser) {
    const provider = new firebase.auth.GoogleAuthProvider();

    await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION);

    return firebase.auth().signInWithPopup(provider);
  }
};

// Sagas for side-effects
function* handleLoginWithEmail(action) {
  try {
    const result = yield call(callLoginWithEmail, action.payload);

    const parsedResult = JSON.parse(JSON.stringify(result));
    yield put(loginWithEmailSuccess(parsedResult));
  } catch (e) {
    logger.error(e);
    captureException(e);
    yield put(loginWithEmailError(e));
  }
}

function* handleGoogleSignIn() {
  try {
    const result = yield call(callGoogleSign);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    yield put(
      googleSignInSuccess({ user: JSON.parse(JSON.stringify(user)), token }),
    );
  } catch (e) {
    logger.error(e);
    captureException(e);
    yield put(googleSignInError(e));
  }
}

function* handleReadSession() {
  const user = window.sessionStorage.getItem(
    `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
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
    logger.error(e);
    captureException(e);
    yield put(signupWithEmailError(e));
  }
}

function* handleSendResetPasswordEmail(action) {
  try {
    yield call(callSendResetPasswordEmail, action.payload);
    yield put(sendResetPasswordEmailSuccess());
  } catch (e) {
    logger.error(e);
    captureException(e);
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
