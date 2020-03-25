import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Component from './Component';
import * as actions from '../../ducks/Reflections';
import { logout } from '../../ducks/user';

function mapStateToProps(state) {

  return {
    isLoading: state.reflections.isLoadingGetReflections,
    isError: state.reflections.isErrorGetReflections,
    isSuccess: state.reflections.isSuccessGetReflections,
    reflections: state.reflections.reflections,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions, logout }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
