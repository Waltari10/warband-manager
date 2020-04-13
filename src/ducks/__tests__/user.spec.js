import User, * as actions from '../user';
import * as matchers from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';


describe('User sagas', () => {
  it('Should test sendResetPasswordEmail', () => {
    return expectSaga(User.saga, actions.sendResetPasswordEmail())
      .withReducer(User.reducer)

      // Mock fetchCountryCodes to return args
      .provide([
        [matchers.call.fn(User.api.callSendResetPasswordEmail), 'john.doe@example.com'],
      ])
      // Assert a call
      .call(User.api.callSendResetPasswordEmail, 'john.doe@example.com')

      // Assert that saga yields Put
      .put({ type: actions.sendResetPasswordEmailSuccess.toString(), payload: undefined })

      // Dispatch action for saga
      .dispatch(actions.sendResetPasswordEmail('john.doe@example.com'))

      // Final output
      .hasFinalState({
        isLoading: true,
        isError: false,
        isSuccess: false,
        error: null,
        user: null,
        sendResetPasswordEmailRequestState: 'SUCCESS',
      })

      .run(1500); // Set timeout time to 1500
  });

  it('Should fail sendResetPasswordEmail', () => {
    return expectSaga(User.saga, actions.sendResetPasswordEmail())
      .withReducer(User.reducer)

      // Mock fetchCountryCodes to return args
      .provide([
        [matchers.call.fn(User.api.callSendResetPasswordEmail), throwError('Fail')],
      ])
      // Assert a call
      .call(User.api.callSendResetPasswordEmail, 'john.doe@example.com')

      // Assert that saga yields Put
      .put({ type: actions.sendResetPasswordEmailError.toString(), payload: 'Fail' })

      // Dispatch action for saga
      .dispatch(actions.sendResetPasswordEmail('john.doe@example.com'))

      // Final output
      .hasFinalState({
        isLoading: true,
        isError: false,
        isSuccess: false,
        error: null,
        user: null,
        sendResetPasswordEmailRequestState: 'ERROR',
      })

      .run(1500); // Set timeout time to 1500
  });

  it('Should test signupWithEmail', () => {
    return expectSaga(User.saga, actions.signupWithEmail())
      .withReducer(User.reducer)

      // Mock fetchCountryCodes to return args
      .provide([
        [matchers.call.fn(User.api.callSignupWithEmail), { email: 'john.doe@example.com' }],
      ])
      // Assert a call
      .call(User.api.callSignupWithEmail, { email: 'john.doe@example.com', password: 'bad_password' })

      // Assert that saga yields Put
      .put({ type: actions.signupWithEmailSuccess.toString(), payload: { email: 'john.doe@example.com' } })

      // Dispatch action for saga
      .dispatch(actions.signupWithEmail('john.doe@example.com', 'bad_password'))

      // Final output
      .hasFinalState({
        isLoading: false,
        isError: false,
        isSuccess: true,
        error: null,
        user: { email: 'john.doe@example.com' },
        sendResetPasswordEmailRequestState: '',
      })

      .run(1500); // Set timeout time to 1500
  });

  it('Should test fail signupWithEmail', () => {
    return expectSaga(User.saga, actions.signupWithEmail())
      .withReducer(User.reducer)

      // Mock fetchCountryCodes to return args
      .provide([
        [matchers.call.fn(User.api.callSignupWithEmail), throwError('Fail')],
      ])
      // Assert a call
      .call(User.api.callSignupWithEmail, { email: 'john.doe@example.com', password: 'bad_password' })

      // Assert that saga yields Put
      .put({ type: actions.signupWithEmailError.toString(), payload: 'Fail' })

      // Dispatch action for saga
      .dispatch(actions.signupWithEmail('john.doe@example.com', 'bad_password'))

      // Final output
      .hasFinalState({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: 'Fail',
        user: null,
        sendResetPasswordEmailRequestState: '',
      })

      .run(1500); // Set timeout time to 1500
  });


  it('Should test callLoginWithEmail', () => {
    return expectSaga(User.saga, actions.loginWithEmail())
      .withReducer(User.reducer)

      // Mock fetchCountryCodes to return args
      .provide([
        [matchers.call.fn(User.api.callLoginWithEmail), { email: 'john.doe@example.com' }],
      ])
      // Assert a call
      .call(User.api.callLoginWithEmail, { email: 'john.doe@example.com', password: 'bad_password' })

      // Assert that saga yields Put
      .put({ type: actions.loginWithEmailSuccess.toString(), payload: { email: 'john.doe@example.com' } })

      // Dispatch action for saga
      .dispatch(actions.loginWithEmail('john.doe@example.com', 'bad_password'))

      // Final output
      .hasFinalState({
        isLoading: false,
        isError: false,
        isSuccess: true,
        error: null,
        user: { email: 'john.doe@example.com' },
        sendResetPasswordEmailRequestState: '',
      })

      .run(1500); // Set timeout time to 1500
  });

  it('Should fail callLoginWithEmail', () => {
    return expectSaga(User.saga, actions.loginWithEmail())
      .withReducer(User.reducer)

      // Mock fetchCountryCodes to return args
      .provide([
        [matchers.call.fn(User.api.callLoginWithEmail), throwError('Fail')],
      ])
      // Assert a call
      .call(User.api.callLoginWithEmail, { email: 'john.doe@example.com', password: 'bad_password' })

      // Assert that saga yields Put
      .put({ type: actions.loginWithEmailError.toString(), payload: 'Fail' })

      // Dispatch action for saga
      .dispatch(actions.loginWithEmail('john.doe@example.com', 'bad_password'))

      // Final output
      .hasFinalState({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: 'Fail',
        user: null,
        sendResetPasswordEmailRequestState: '',
      })

      .run(1500); // Set timeout time to 1500
  });


});
