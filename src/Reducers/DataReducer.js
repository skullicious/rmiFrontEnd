import { FETCH_TITLES } from "../actions/types";
import { FETCH_OCCUPATIONS } from "../actions/types";
import { FETCH_OCCUPATIONSTATUS } from "../actions/types";
import { FETCH_EMPLOYMENTTYPES } from "../actions/types";
import { FETCH_VEHICLEUSES } from "./../actions/types";
import { FETCH_LICENSETYPES } from "./../actions/types";
import { FETCH_CYCLEUSES } from "./../actions/types";
import { FETCH_ADDRESS } from "./../actions/types";

const initalState = {
  titles: [],
  occupations: [],
  occupationStatus: [],
  employmentTypes: [],
  vehicleUses: [],
  licenseTypes: [],
  cycleUses: [],
  address: [],
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
    case FETCH_CYCLEUSES:
      return {
        ...state,
        cycleUses: action.payload,
      };
    case FETCH_ADDRESS:
      const dummyAddresses = [
        {
          _id: "1",
          name: "21 Catherine Howard Close, Perivale, Middlesex, IP24 1TQ",
        },
        {
          _id: "2",
          name: "22 Catherine Howard Close, Perivale, Middlesex, IP24 1TQ",
        },
        {
          _id: "3",
          name: "23 Catherine Howard Close, Perivale, Middlesex, IP24 1TQ",
        },
        {
          _id: "4",
          name: "24 Catherine Howard Close, Perivale, Middlesex, IP24 1TQ",
        },
      ];
      return {
        ...state,
        address: dummyAddresses,
      };

    default:
      return state;
  }
}
