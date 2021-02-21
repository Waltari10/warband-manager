import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import createRootReducer from "./rootReducer";

// This causes ducks and firebase to be imported which causes the issues I think...
import { sagas } from "../ducks";

const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState) {
  const middlewares = [sagaMiddleware];

  const store = createStore(
    createRootReducer(),
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);

  return store;
}

function configureStoreDev(initialState) {
  const middlewares = [reduxImmutableStateInvariant(), sagaMiddleware];

  const composeEnhancers =
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);

  //@ts-ignore
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    //@ts-ignore
    module.hot.accept("./rootReducer", () => {
      const nextRootReducer = require("./rootReducer").default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const configureStore =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configureStore;
