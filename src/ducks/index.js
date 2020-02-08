import { all } from 'redux-saga/effects';
import login from './login';
import signup from './signup';


const reducerMap = {
  login: login.reducer,
  signup: login.reducer,
  // Add reducers for each duck here
};

export default reducerMap;


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* sagas() {
  yield all([
    login.saga(),
    signup.saga(),
    // Add sagas for each duck here
  ]);
}