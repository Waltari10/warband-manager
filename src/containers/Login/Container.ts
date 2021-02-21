import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/user';

export interface StateProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isAuthorized: boolean;
  error?: any;
}

function mapStateToProps(state) {

  return {
    isLoading: state.user.isLoading,
    isError: state.user.isError,
    isSuccess: state.user.isSuccess,
    isAuthorized: !!state.user.user,
    error: state.user.error,
  };
}

export interface DispatchProps {
  loginWithEmail(email: string, password: string): void;
  googleSignIn(): void;
  resetUser(): void;
}


function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({ googleSignIn: actions.googleSignIn, resetUser: actions.resetUser, loginWithEmail: actions.loginWithEmail }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
