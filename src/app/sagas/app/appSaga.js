import { all, takeLatest, call, fork, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import io from 'socket.io-client';

import { setToken } from '../../utils/auth';
import { get } from '../../utils/fetch';

import { signIn } from '../../redux/modules/app/app';


function* signInIterator({ payload }) {
  const { service, token } = payload;

  try {
    const data = yield call(get, `/user/auth/${service}/token?access_token=${token}`);
    yield put(signIn.success());
    yield call(setToken, data.accessToken);

    yield call(console.log, window.socket);

    if (window.socket.disconnected) {
      window.socket = io.connect('https://game-api.secrettech.io/', { query: `token=${data.accessToken}` });
    }

    yield put(push('/garage'));
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
