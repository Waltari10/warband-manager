import { connect } from 'react-redux';

import Component from './component';

function mapStateToProps(state) {

  const isAuthorized = !!state.login.user;

  return {
    isAuthorized,
  };
}


export default connect(
  mapStateToProps,
  {}
)(Component);
