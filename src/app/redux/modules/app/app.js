import { createReducer, createAsyncAction } from '../../../utils/actions';

export const SIGN_IN = 'app/app/SIGN_IN';
export const signIn = createAsyncAction(SIGN_IN);
const initialState = {};
export default createReducer({}, initialState);
