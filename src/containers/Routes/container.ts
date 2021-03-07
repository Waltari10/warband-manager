import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../ducks/user';
import Component from './component';


export interface StateProps {
  isAuthorized: boolean;
}


function mapStateToProps(state): StateProps {
  // Needs to be here inorder to rerender routes if login state changes
  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
  };
}

export interface DispatchProps {
  readSession(): void;
}

function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators({ readSession: actions.readSession }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
