import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../../ducks/warbands";
import Component from "./Component";
import { RootState } from "../../store/configureStore";

export interface StateProps {
  removeWarbandRequestState: string;
}

export interface DispatchProps {
  removeWarbandReset(): void;
}

export interface NavProps {
  match: any;
}

function mapStateToProps(state: RootState): StateProps {
  return {
    removeWarbandRequestState: state.warbands.removeWarbandRequestState
  };
}

function mapDispatchToProps(dispatch): DispatchProps {
  return bindActionCreators(
    { removeWarbandReset: actions.removeWarbandReset },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
