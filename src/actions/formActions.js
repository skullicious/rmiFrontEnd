import { history } from "../_helpers";
import { alertActions } from "./";
import { Person } from "@material-ui/icons/Person";
import { formService } from "./../services/formService";
import { formConstants } from "./../constants/formConstants";

export const formActions = {
  GetRider,
  SaveRider,
};

function GetRider(user) {
  return (dispatch) => {
    dispatch(request());

    formService.GetRider(user).then(
      (rider) => dispatch(success(rider)),
      (error) => dispatch(failure(error))
    );
  };

  function request(rider) {
    return { type: formConstants.GETALL_REQUEST, rider };
  }
  function success(rider) {
    return { type: formConstants.GETALL_SUCCESS, rider };
  }
  function failure(error) {
    return { type: formConstants.GETALL_FAILURE, error };
  }
}

function SaveRider(values) {
  console.log("values in form actions");
  console.log(values);
  return (dispatch) => {
    dispatch(request(values));

    formService.SaveRider(values).then(
      () => {
        dispatch(success());
        console.log("successful save");
        // history.push("/login");
        dispatch(alertActions.success("Save Rider successful"));
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: formConstants.GETALL_REQUEST, user };
  }
  function success(user) {
    return { type: formConstants.GETALL_SUCCESS, user };
  }
  function failure(error) {
    return { type: formConstants.GETALL_FAILURE, error };
  }
}
