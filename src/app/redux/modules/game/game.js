import { createReducer, createAction } from '../../../utils/actions';

export const FETCH_INITIAL_DATA = 'game/game/FETCH_INITIAL_DATA';

export const fetchInitialData = createAction(FETCH_INITIAL_DATA);

const initialState = {
  raceName: '',
  start: 0,
  end: 0,
  player: {
    id: '',
    position: 0,
    ship: {
      type: ''
    },
    x: 0,
    y: 0,
    fuel: []
  },
  enemies: []
};

export default createReducer({
  [FETCH_INITIAL_DATA]: (state, { payload }) => payload
}, initialState);
