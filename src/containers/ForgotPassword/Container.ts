import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/user';

export interface StateProps {
  sendResetPasswordEmailRequestState?: string;
  isAuthorized?: boolean;
  error?: Error;
}

export interface DispatchProps {
  sendResetPasswordEmail(email: string): void;
  resetUser(): void;
}

function mapStateToProps(state): StateProps {

  return {
    sendResetPasswordEmailRequestState: state.user.sendResetPasswordEmailRequestState,
    isAuthorized: !!state.user.user,
    error: state.user.error,
  };
}


function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({
    sendResetPasswordEmail: actions.sendResetPasswordEmail,
    resetUser: actions.resetUser,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
