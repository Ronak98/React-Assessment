import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import initSagas from "../utils/initSagas";
import rootReducer from "./reducers";

export default function configureStore(options) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  initSagas(sagaMiddleware);

  return store;
}
