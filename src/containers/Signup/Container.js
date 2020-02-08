import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as signinActions from '../../ducks/login';
import * as signupActions from '../../ducks/signup';

function mapStateToProps(state) {

  return {
    isLoading: state.signup.isLoading,
    isError: state.signup.isError,
    isSuccess: state.signup.isSuccess,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...signinActions, ...signupActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
