import { formConstants } from "../constants";

const initialState = {};

export function person(state = initialState, action) {
  switch (action.type) {
    case formConstants.GETALL_REQUEST:
      return {
        ...state,
      };
    case formConstants.GETALL_SUCCESS:
      console.log(action);
      return {
        // ...state,
        items: { ...action.rider },
      };
    case formConstants.GETALL_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
