import { combineReducers } from "redux";
import reducers from "../ducks/index";
import { LOGOUT } from "../constants";

export default () => {
  const appReducer = combineReducers(reducers);

  const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
      state = undefined;
    }
    //@ts-ignore
    return appReducer(state, action);
  };

  return rootReducer;
};
