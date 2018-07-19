import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
// import { removeToken, setToken, getToken, isAuth } from '../../utils/auth';
import { get } from '../../utils/fetch';

import { login } from '../../redux/modules/app/app';


function* loginIterator({ payload: token }) {
  // yield call(setToken, token);
  // yield put(setAuthState({ authorized: true, token }));
  try {
    const data = yield call(get, `/user/auth/facebook/token?access_token=${token}`);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

function* loginSaga() {
  yield takeLatest(
    login.REQUEST,
    loginIterator
  );
}


// function* checkAuthIterator() {
//   const auth = yield call(isAuth);
//
//   if (auth) {
//     const token = yield call(getToken);
//     yield put(login(token));
//   } else {
//     yield put(setAuthState({ authorized: false, token: '' }));
//   }
// }
//
// function* checkAuthSaga() {
//   yield takeLatest(
//     CHECK_AUTH,
//     checkAuthIterator
//   );
// }


// function* logoutIterator() {
//   yield call(removeToken);
//   yield put(setAuthState({ authorized: false, token: '' }));
// }
//
// function* logoutSaga() {
//   yield takeLatest(
//     LOGOUT,
//     logoutIterator
//   );
// }


export default function* () {
  yield all([
    fork(loginSaga),
    // fork(checkAuthSaga),
    // fork(logoutSaga)
  ]);
}
