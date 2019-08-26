import { all, fork } from 'redux-saga/effects';

import app from './app';
import github from './github';
import user from './user';
import equipment from './equipment';

/**
 * rootSaga
import user from './user';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(app), fork(github), fork(user), fork(equipment)]);
}
