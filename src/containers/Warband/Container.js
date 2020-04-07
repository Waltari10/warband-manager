import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { path } from 'ramda';

import * as actions from '../../ducks/warbands';
import * as userActions from '../../ducks/user';

import Component from './Component';

function mapStateToProps(state, ownProps) {

  const isAuthorized = !!state.user.user;

  return {
    isAuthorized,
    isError: state.warbands.isError,
    isLoading: state.warbands.isLoading,
    isSuccess: state.warbands.isSuccess,
    warbandId: ownProps.id,
    warband: path(['warbands', 'warbands', ownProps.id], state),
    isSuccessGetWarbands: state.warbands.isSuccessGetWarbands,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions, ...userActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
