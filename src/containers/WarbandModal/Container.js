import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../ducks/warbands';
import Component from './Component';

function mapStateToProps(state) {


  return {
    isError: state.warbands.isError,
    isLoading: state.warbands.isLoading,
    isSuccess: state.warbands.isSuccess,
    removeWarbandRequestState: state.warbands.removeWarbandRequestState,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
