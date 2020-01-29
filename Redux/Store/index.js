import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../Reducer/index";
import saga from "../Sagas/index";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(saga);

  return store;
}

export default configureStore;
