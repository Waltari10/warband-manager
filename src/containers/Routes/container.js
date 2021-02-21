import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../ducks/user.ts';
import Component from './component';


function mapStateToProps(state) {
// Needs to be here inorder to rerender routes if login state changes
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
