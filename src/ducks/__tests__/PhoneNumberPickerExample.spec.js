// import PhoneNumberPicker from '../PhoneNumberPickerExample';
import PhoneNumberPicker, * as actions from '../PhoneNumberPickerExample';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';


describe('sagas', () => {
  it('Should test initial state', () => {
    return expectSaga(PhoneNumberPicker.saga, actions.savePhoneNumber('555'))
      .withReducer(PhoneNumberPicker.reducer)

      .provide([[call(PhoneNumberPicker.api.postPhoneNumber), '555']])
      .call(PhoneNumberPicker.api.postPhoneNumber, '555')

      .put({ type: 'SAVE_PHONENUMBER_SUCCESS', payload: '555' })
      .dispatch(actions.savePhoneNumber('555'))
      .hasFinalState({
        phonenumber: '555',
        isLoading: false,
        isError: false,
        isSuccess: true,
      })

      .run(1500); // Set timeout time to 500
    // eslint-disable-next-line max-len
    // https://github.com/jfairbank/redux-saga-test-plan/blob/7f78a0742f94c67a221a9a1370b65f65e38b66b6/docs/integration-testing/timeout.md
  });

  it('Should handle error', () => {
    return expectSaga(PhoneNumberPicker.saga, actions.savePhoneNumber('555'))
      .withReducer(PhoneNumberPicker.reducer)

      .provide([[call(PhoneNumberPicker.api.postPhoneNumber, '555'), throwError(new Error('fail'))]])
      .call(PhoneNumberPicker.api.postPhoneNumber, '555')

      .dispatch({ type: 'SAVE_PHONENUMBER_START', payload: '555' })
      .put({ type: 'SAVE_PHONENUMBER_ERROR', payload: undefined })
      .hasFinalState({
        phonenumber: '',
        isLoading: false,
        isError: true,
        isSuccess: false,
      })

      .run(1500);
  });
});
