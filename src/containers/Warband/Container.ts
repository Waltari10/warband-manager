import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { path } from "ramda";

import * as actions from "../../ducks/warbands";
import * as userActions from "../../ducks/user";

import Component from "./Component";

function mapStateToProps(state, ownProps) {
  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
    isError: state.warbands.isError,
    isLoading: state.warbands.isLoading,
    warbandId: ownProps.id,
    warband: path(["warbands", "warbands", ownProps.id], state),
    isSuccessGetWarbands: state.warbands.isSuccessGetWarbands,
    isLoadingGetWarbands: state.warbands.isLoadingGetWarbands
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveWarband: actions.saveWarband,
      logout: userActions.logout,
      removeWarband: actions.removeWarband,
      addWarbandReset: actions.addWarbandReset,
      getWarbands: actions.getWarbands
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
