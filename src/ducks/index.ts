import { all } from 'redux-saga/effects';
import user from './user';
import warbands from './warbands';
import { reducer as notifierReducer } from './notifier';


const reducerMap = {
  user: user.reducer,
  warbands: warbands.reducer,
  notifier: notifierReducer,
  // Add reducers for each duck here
};

export default reducerMap;


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* sagas() {
  yield all([
    user.saga(),
    warbands.saga(),
    // Add sagas for each duck here
  ]);
}