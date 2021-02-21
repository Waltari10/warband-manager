import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/user';


export interface StateProps {
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  isAuthorized: boolean;
  error?: any;
}

function mapStateToProps(state): StateProps {
  return {
    isLoading: state.user.isLoading,
    isError: state.user.isError,
    isSuccess: state.user.isSuccess,
    isAuthorized: !!state.user.user,
    error: state.user.error,
  };
}

export interface DispatchProps {
  resetUser(): void;
  signupWithEmail(email: string, password: string): void;
  googleSignIn(): void;
}


function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({
    resetUser: actions.resetUser,
    signupWithEmail: actions.signupWithEmail,
    googleSignIn: actions.googleSignIn
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
