
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {createEquipment} from 'service/equipment';

import { ActionTypes } from 'constants/index';

// async function addRule(params) {
//   return api.post('http://localhost:3000/repos/equipments');
// }

export function* postData({payload }) {
  try {
    const response = yield call(
      createEquipment,payload,
    );

    yield put({
      type: ActionTypes.EQUIPMENT_CREATE_SUCCESS,
    });
  } catch (err) {
    console.log(err, 'errerrerr')
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
