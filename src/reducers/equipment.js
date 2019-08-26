import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from 'constants/index';

export const equipmentState = {
  equipment: {
    data: {},
  },
};

export default {
  equipment: handleActions(
    {
      [ActionTypes.EQUIPMENT_CREATE_FAILURE]: (state, { payload }) => {
        console.log('has shut down')
        return immutable(state, {
          equipment: {
            message: { $set: 'error' },
          },
        });
      },
      [ActionTypes.EQUIPMENT_CREATE_SUCCESS]: (state, { payload }) => {
        console.log('suceess')

        return immutable(state, {
          equipment: {
            data: { $set: payload },
          },
        });
      },
 
    },
    equipmentState,
  ),
};
