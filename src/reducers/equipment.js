import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const equipmentState = {
  equipment: {
    data: {},
    detail: {},
    list: [],
    message: '',
    status: undefined,
  },
};

export default {
  equipment: handleActions(
    {
      [ActionTypes.EQUIPMENT_CREATE_FAILURE]: (state, { payload }) => {
        console.log('EQUIPMENT_CREATE_FAILURE')
        return immutable(state, {
          equipment: {
            message: { $set: 'something went wrong' },
            status: { $set: 500 },
          },
        });
      },
      [ActionTypes.EQUIPMENT_CREATE_SUCCESS]: (state, { payload }) => {

        return immutable(state, {
          equipment: {
            message: { $set: 'success' },
            status: { $set: 200 },
          },
        });
      },
      [ActionTypes.EQUIPMENT_DETAIL_SUCCESS]: (state, { payload }) => {

        return immutable(state, {
          equipment: {
            detail: { $set: payload },
          },
        });
      },
      [ActionTypes.EQUIPMENT_LIST_SUCCESS]: (state, { payload }) => {

        return immutable(state, {
          equipment: {
            list: { $set: payload },
          },
        });
      },
 
    },
    equipmentState,
  ),
};
