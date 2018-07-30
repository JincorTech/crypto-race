import { createReducer, createAction } from '../../../utils/actions';

export const FETCH_INITIAL_DATA = 'game/game/FETCH_INITIAL_DATA';

export const fetchInitialData = createAction(FETCH_INITIAL_DATA);

const initialState = {
  id: '',
  raceName: '',
  start: 0,
  end: 0,
  totalPlyaers: 0,
  player: {
    id: '',
    email: '',
    name: '',
    picture: '',
    position: 0,
    x: 0,
    ship: {
      type: ''
    },
    fuel: []
  },
  players: []
};

export default createReducer({
  [FETCH_INITIAL_DATA]: (state, { payload }) => payload
}, initialState);
