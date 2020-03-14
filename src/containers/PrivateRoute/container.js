import { connect } from 'react-redux';

import Component from './component';

function mapStateToProps(state) {

  const isAuthorized = !!state.user.user;
  const isLoading = !!state.user.isLoading;
  const isSuccess = !!state.user.isSuccess;

  return {
    isAuthorized,
    isLoading,
    isSuccess,
  };
}


export default connect(
  mapStateToProps,
  {}
)(Component);
