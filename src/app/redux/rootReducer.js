import { combineReducers } from 'redux';

import app from './modules/app/app';
import game from './modules/game/game';

export default combineReducers({
  app: combineReducers({
    app
  }),

  game: combineReducers({
    game
  })
});
