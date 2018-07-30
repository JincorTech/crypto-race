import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
// import Immutable from 'immutable';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { getToken } from './app/utils/auth';

import configureStore, { history } from './app/redux/configureStore';
import Main from './app/containers/app/Main';

const initialState = {};
const store = configureStore(initialState);

window.socket = io.connect('https://game-api.secrettech.io/', { query: `token=${getToken()}` });
window.socket.on('error', (error) => console.log(error));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Main/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
