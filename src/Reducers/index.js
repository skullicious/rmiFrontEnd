import { combineReducers } from "redux";

import dataReducer from "./DataReducer";

import { authentication } from "./AuthenticationReducer";
import { registration } from "./RegistrationReducer";
import { users } from "./UsersReducer";
import { alert } from "./AlertReducer";
import { person } from "./FormReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  authentication,
  registration,
  users,
  alert,
  person,
});

export default rootReducer;
