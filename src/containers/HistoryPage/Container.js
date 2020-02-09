import { connect } from 'react-redux';

import Component from './Component';

function mapStateToProps(state) {

  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
  };
}


export default connect(
  mapStateToProps,
  {}
)(Component);
