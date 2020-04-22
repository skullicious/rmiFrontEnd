import { FETCH_TITLES } from "../actions/types";
import { FETCH_OCCUPATIONS } from "../actions/types";
import { FETCH_OCCUPATIONSTATUS } from "../actions/types";
import { FETCH_EMPLOYMENTTYPES } from "../actions/types";
import { FETCH_VEHICLEUSES } from "./../actions/types";
import { FETCH_LICENSETYPES } from "./../actions/types";

const initalState = {
  titles: [],
  occupations: [],
  occupationStatus: [],
  employmentTypes: [],
  vehicleUses: [],
  licenseTypes: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case FETCH_TITLES:
      return {
        ...state,
        titles: action.payload,
      };
    case FETCH_OCCUPATIONS:
      return {
        ...state,
        occupations: action.payload,
      };
    case FETCH_OCCUPATIONSTATUS:
      return {
        ...state,
        occupationStatus: action.payload,
      };
    case FETCH_EMPLOYMENTTYPES:
      return {
        ...state,
        employmentTypes: action.payload,
      };
    case FETCH_VEHICLEUSES:
      return {
        ...state,
        vehicleUses: action.payload,
      };
    case FETCH_LICENSETYPES:
      return {
        ...state,
        licenseTypes: action.payload,
      };
    default:
      return state;
  }
}
