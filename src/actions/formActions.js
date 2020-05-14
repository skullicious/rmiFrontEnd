import { history } from "../_helpers";
import { alertActions } from "./";
import { Person } from "@material-ui/icons/Person";
import { formService } from "./../services/formService";
import { formConstants } from "./../constants/formConstants";

export const formActions = {
  GetPerson,
};

function GetPerson(user) {
  return (dispatch) => {
    dispatch(request());

    formService.GetPerson(user).then(
      (person) => dispatch(success(person)),
      (error) => dispatch(failure(error))
    );
  };

  function request(person) {
    return { type: formConstants.GETALL_REQUEST, person };
  }
  function success(person) {
    return { type: formConstants.GETALL_SUCCESS, person };
  }
  function failure(error) {
    return { type: formConstants.GETALL_FAILURE, error };
  }
}
