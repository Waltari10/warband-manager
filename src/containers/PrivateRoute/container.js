import { connect } from 'react-redux';

import Component from './component';

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
