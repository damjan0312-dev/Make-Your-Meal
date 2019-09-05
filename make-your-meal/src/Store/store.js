/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../Sagas";
import rootReducer from "../Reducers";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(compose(applyMiddleware(sagaMiddleware)))
);
export default store;

sagaMiddleware.run(rootSaga);
