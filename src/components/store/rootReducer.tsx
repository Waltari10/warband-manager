/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { combineReducers } from 'redux';
import reducers from '../ducks/index';
 
// https://github.com/erikras/ducks-modul ar-redux
// https://github.com/alexnm/re-ducks

export default () => {

  const appReducer = combineReducers(reducers);

  const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') { // TODO: Replace with constant
      state = undefined;
    }
    return appReducer(state, action);
  };

  return rootReducer;
};
