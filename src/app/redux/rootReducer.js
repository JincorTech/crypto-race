import { combineReducers, routerReducer } from 'redux-seamless-immutable';

import app from './modules/app/app';

export default combineReducers({
  routing: routerReducer,

  app: combineReducers({
    app
  }),
});
