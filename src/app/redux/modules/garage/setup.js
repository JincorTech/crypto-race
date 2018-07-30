import { createReducer, createAction } from '../../../utils/actions';

export const SETUP_SHIP = 'garage/setup/SETUP_SHIP';

export const setupShip = createAction(SETUP_SHIP);

const initialState = 0;

export default createReducer({
  [SETUP_SHIP]: (state, { payload }) => payload
}, initialState);
