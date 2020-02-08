import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/login';

function mapStateToProps(state) {

  return {
    isLoading: state.login.isLoading,
    isError: state.login.isError,
    isSuccess: state.login.isSuccess,
    isAuthorized: !!state.login.user,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
