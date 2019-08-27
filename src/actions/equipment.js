import { ActionTypes } from 'constants/index';

export function getDetail(payload) {
    return {
        type: ActionTypes.EQUIPMENT_DETAIL,
        payload: payload,
    }
}
export function getList() {
    return {
        type: ActionTypes.EQUIPMENT_List,
    }
}
