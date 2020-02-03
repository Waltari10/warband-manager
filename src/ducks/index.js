import { all } from 'redux-saga/effects';
import phoneNumberPicker from './PhoneNumberPickerExample';


const reducerMap = {
  phoneNumberPicker: phoneNumberPicker.reducer,
  // Add reducers for each duck here
};

export default reducerMap;


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export function* sagas() {
  yield all([
    phoneNumberPicker.saga(),
    // Add sagas for each duck here
  ]);
}