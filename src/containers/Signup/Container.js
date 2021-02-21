import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/user.ts';

function mapStateToProps(state) {

  return {
    isLoading: state.user.isLoading,
    isError: state.user.isError,
    isSuccess: state.user.isSuccess,
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
