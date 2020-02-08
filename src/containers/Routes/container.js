import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../ducks/user';
import Component from './component';


function mapStateToProps(state) {

  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
