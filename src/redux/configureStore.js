import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createStore,applyMiddleware, compose } from "redux";
import counterReducer from './ducks/counter';
import productReducer from "./ducks/products";
import searchReducer from "./ducks/search";
import totalReducer from "./ducks/total";
import watcherSaga from "./sagas/rootSaga";

const reducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
    search: searchReducer,
    total: totalReducer
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

// const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;