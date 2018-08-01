import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { setToken } from '../../utils/auth';
import { get } from '../../utils/fetch';

import { signIn } from '../../redux/modules/app/app';


function* signInIterator({ payload: token }) {
  try {
    const data = yield call(get, `/user/auth/facebook/token?access_token=${token}`);
    yield put(signIn.success());
    yield call(setToken, data.accessToken);
    yield put(push('/garage'))
  } catch (e) {
    console.log(e);
    yield put(signIn.failure());
  }
}

function* signInSaga() {
  yield takeLatest(
    signIn.REQUEST,
    signInIterator
  );
}


export default function* () {
  yield all([
    fork(signInSaga)
  ]);
}
