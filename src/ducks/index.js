import { all } from 'redux-saga/effects';
import user from './user';


const reducerMap = {
  user: user.reducer,
  // Add reducers for each duck here
};

export default reducerMap;


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* sagas() {
  yield all([
    user.saga(),
    // Add sagas for each duck here
  ]);
}