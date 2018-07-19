import { all, fork } from 'redux-saga/effects';

import appSaga from './app/appSaga';

export default function* () {
  yield all([
    fork(appSaga)
  ]);
}
