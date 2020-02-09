import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../ducks/user';
import Component from './Component';

function mapStateToProps(state) {

  return {
    user: state.user.user,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
