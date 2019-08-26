// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions';

import { ActionTypes } from 'constants/index';

export const { postData: postDataD } = createActions({
  [ActionTypes.EQUIPMENT_CREATE]: () => ({})
});
