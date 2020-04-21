import { FETCH_TESTS } from "../actions/types";

const initalState = {
  titles: [],
};

export default function (state = initalState, action) {
  console.log("in reducer");
  console.log(action.type);

  switch (action.type) {
    case FETCH_TESTS:
      console.log("in fetchtests action");
      return {
        ...state,
        titles: action.payload,
      };
    default:
      return state;
  }
}
