import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/user';

function mapStateToProps(state) {

  return {
    sendResetPasswordEmailRequestState: state.user.sendResetPasswordEmailRequestState,
    isAuthorized: !!state.user.user,
    error: state.user.error,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
