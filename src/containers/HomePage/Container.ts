import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path } from 'ramda';

import Component from './Component';
import * as warbandDuck from '../../ducks/warbands';
import { logout } from '../../ducks/user';


export interface StateProps {
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  warbands: Record<string, warbandDuck.Warband>;
  warbandsIndex: string[];
  uid: string;
  lastAddedWarbandId?: string;
  addWarbandRequestState?: string;
}

export interface DispatchProps {
  logout(): void;
  getWarbands(): void;
  addWarband(warband: warbandDuck.Warband): void;
}

function mapStateToProps(state): StateProps {

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
  return bindActionCreators({
    getWarbands: warbandDuck.getWarbands,
    addWarband: warbandDuck.addWarband,
    logout
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
