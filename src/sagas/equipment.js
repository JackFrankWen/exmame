/**
 * @module Sagas/GitHub
 * @desc GitHub
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'modules/client';

import { ActionTypes } from 'constants/index';

/**
 * Get Repos
 *
 * @param {Object} action
 *
 */
export function* postData({ payload }) {
  try {
    const response = yield call(
      request,
      `https://localhost:3000/api/create`,
    );

    yield put({
      type: ActionTypes.EQUIPMENT_CREATE_SUCCESS,
      payload: { data: response.items },
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.EQUIPMENT_CREATE_FAILURE,
      payload: err,
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.EQUIPMENT_CREATE, postData)]);
}
