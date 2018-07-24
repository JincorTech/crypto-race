import { combineReducers } from 'redux';

import app from './modules/app/app';
import game from './modules/game/game';
import tracks from './modules/garage/tracks';
import setup from './modules/garage/setup';

export default combineReducers({
  app: combineReducers({
    app
  }),

  game: combineReducers({
    game
  }),

  garage: combineReducers({
    tracks,
    setup
  })
});
