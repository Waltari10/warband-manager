import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path } from 'ramda';

import * as actions from '../../ducks/Reflections';
import * as userActions from '../../ducks/user';

import Component from './Component';

function mapStateToProps(state, ownProps) {

  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
    isError: state.reflections.isError,
    isLoading: state.reflections.isLoading,
    isSuccess: state.reflections.isSuccess,
    reflectionId: ownProps.id,
    reflection: path(['reflections', 'reflections', ownProps.id], state),
    isSuccessGetReflections: state.reflections.isSuccessGetReflections,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions, ...userActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
