
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { createEquipment, getEquipment } from 'service/equipment';

import { ActionTypes } from 'constants/index';

// async function addRule(params) {
//   return api.post('http://localhost:3000/repos/equipments');
// }

export function* postData({ payload }) {
  try {
    yield call(createEquipment, payload);

    yield put({
      type: ActionTypes.EQUIPMENT_CREATE_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ActionTypes.EQUIPMENT_CREATE_FAILURE,
      payload: err,
    });
  }
}

export function* getEquipmentDetail({ payload }) {
  try {
    const response = yield call(getEquipment, payload);

    yield put({
      type: ActionTypes.EQUIPMENT_DETAIL_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: ActionTypes.EQUIPMENT_DETAIL_FAILURE,
      payload: err,
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.EQUIPMENT_CREATE, postData),
    takeLatest(ActionTypes.EQUIPMENT_DETAIL, getEquipmentDetail),
  ]);
}
