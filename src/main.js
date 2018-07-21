import React from 'react';
import ReactDOM from 'react-dom';
// import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './app/redux/configureStore';
import Main from './app/containers/Main';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
