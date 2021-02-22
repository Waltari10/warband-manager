import { combineReducers } from 'redux';
import reducers from '../ducks/index';
import { LOGOUT } from '../constants';
import { RootState } from './configureStore';

export default () => {
  const appReducer = combineReducers(reducers);

  const rootReducer = (state: RootState | undefined, action) => {
    if (action.type === LOGOUT) {
      state = undefined;
    }

    return appReducer(state, action);
  };

  return rootReducer;
};
