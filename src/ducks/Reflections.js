import { put, takeEvery, all, call } from 'redux-saga/effects';
import { createReducer, createAction } from '@reduxjs/toolkit';


import { db } from '../utils/firebase';

// TODO: reduxjs/toolkit had an example on how to reduce redux boilerplate even further

export const saveReflection = createAction(
  'SAVE_REFLECTION_START', (reflection) => ({ payload: reflection })
);
export const saveReflectionSuccess = createAction('SAVE_REFLECTION_SUCCESS');
export const saveReflectionError = createAction('SAVE_REFLECTION_ERROR');

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
});


// Api
const callSaveReflection = (reflection) => {
  return db.collection('reflections').add(reflection);
};


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


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* saga() {
  yield all([
    watchSaveReflection(),
  ]);
}


export default {
  reducer,
  saga,
};