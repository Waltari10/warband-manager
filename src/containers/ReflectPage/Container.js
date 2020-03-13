import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../ducks/Reflections';
import * as userActions from '../../ducks/user';

import Component from './Component';

function mapStateToProps(state) {

  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
    isError: state.reflections.isError,
    isLoading: state.reflections.isLoading,
    isSuccess: state.reflections.isSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions, ...userActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
