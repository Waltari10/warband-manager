import { connect } from 'react-redux';

import Component from './component';

export interface StateProps {
  isAuthorized?: boolean;
  isLoading?: boolean;
}

function mapStateToProps(state) {

  const isAuthorized = !!state.user.user;
  const isLoading = !!state.user.isLoading;

  return {
    isAuthorized,
    isLoading,
  };
}


export default connect(
  mapStateToProps,
  {}
)(Component);
