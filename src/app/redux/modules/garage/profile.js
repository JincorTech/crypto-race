import { createReducer, createAction } from '../../../utils/actions';

export const FETCH_PROFILE = 'garage/profile/FETCH_PROFILE';

export const fetchProfile = createAction(FETCH_PROFILE);

const initialState = {
  name: '',
  picture: '',
  balance: ''
};

export default createReducer({
  [FETCH_PROFILE]: (state, { payload }) => payload
}, initialState);
