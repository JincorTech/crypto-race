import { from } from 'seamless-immutable';
import { createReducer, createAction, createAsyncAction } from '../../../utils/actions';

export const LOGIN = 'app/app/LOGIN';

export const login = createAsyncAction(LOGIN);

// export const SET_AUTH_STATE = 'app/app/SET_AUTH_STATE';
// export const LOGOUT = 'app/app/LOGOUT';
// export const LOGIN = 'app/app/LOGIN';
// export const CHECK_AUTH = 'app/app/CHECK_AUTH';
// export const FETCH_USER = 'app/app/FETCH_USER';
//
// export const setAuthState = createAction(SET_AUTH_STATE);
// export const login = createAction(LOGIN);
// export const logout = createAction(LOGOUT);
// export const checkAuth = createAction(CHECK_AUTH);
// export const fetchUser = createAsyncAction(FETCH_USER);

const initialState = from({
  authorized: false,
  token: '',
  fetching: false
});

export default createReducer({
  [login.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [login.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      ...payload
    })
  ),

  [login.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),
}, initialState);
