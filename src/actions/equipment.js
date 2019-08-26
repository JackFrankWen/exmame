// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { postData: submitData } = createActions({
  [ActionTypes.EQUIPMENT_CREATE]: data => data,
});
