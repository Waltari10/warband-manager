import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path } from 'ramda';

import Component from './Component';
import * as actions from '../../ducks/warbands.ts';
import { logout } from '../../ducks/user.ts';

function mapStateToProps(state) {

  return {
    isLoading: state.warbands.isLoadingGetWarbands,
    isError: state.warbands.isErrorGetWarbands,
    isSuccess: state.warbands.isSuccessGetWarbands,
    warbands: state.warbands.warbands,
    warbandsIndex: state.warbands.warbandsIndex,
    uid: path(['user', 'user', 'uid'], state),
    lastAddedWarbandId: state.warbands.lastAddedWarbandId,
    addWarbandRequestState: state.warbands.addWarbandRequestState,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions, logout }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
