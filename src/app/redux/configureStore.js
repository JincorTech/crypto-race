import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from '../sagas/rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({
  collapsed: true
});

const configureStoreProduction = (initialState) => {
  const middlewares = [
    sagaMiddleware,
    loggerMiddleware,
    routerMiddleware(history)
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

const configureStoreDev = (initialState) => {
  const middlewares = [
    sagaMiddleware,
    loggerMiddleware,
    routerMiddleware(history)
  ];

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(rootSaga);

  return store;
};

const configureStore = process.env.NODE_ENV === 'development'
  ? configureStoreDev
  : configureStoreProduction;

export default configureStore;
