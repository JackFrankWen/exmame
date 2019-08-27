import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const equipmentState = {
  equipment: {
    data: {},
    detail: {},
    list: [],
  },
};

export default {
  equipment: handleActions(
    {
      [ActionTypes.EQUIPMENT_CREATE_FAILURE]: (state, { payload }) => {
        console.log('EQUIPMENT_CREATE_FAILURE')
        return immutable(state, {
          equipment: {
            message: { $set: 'error' },
          },
        });
      },
      [ActionTypes.EQUIPMENT_CREATE_SUCCESS]: (state, { payload }) => {
        console.log('EQUIPMENT_CREATE_SUCCESS')

        return immutable(state);
      },
      [ActionTypes.EQUIPMENT_DETAIL_SUCCESS]: (state, { payload }) => {
        console.log('payload')

        return immutable(state, {
          equipment: {
            detail: { $set: payload },
          },
        });
      },
      [ActionTypes.EQUIPMENT_LIST_SUCCESS]: (state, { payload }) => {
        console.log('payload')

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
