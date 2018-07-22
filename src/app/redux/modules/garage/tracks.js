import { createReducer, createAction } from '../../../utils/actions';

export const FETCH_TRACKS = 'game/game/FETCH_TRACKS';

export const fetchTracks = createAction(FETCH_TRACKS);

const initialState = {
  tracks: []
};

export default createReducer({
  [FETCH_TRACKS]: (state, { payload }) => payload
}, initialState);
