import { authHeader, config } from "../_helpers";

export const formService = {
  GetRider,
  SaveRider,
};

function GetRider(user) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(
    config.apiUrl + "/api/person/rider/" + user.id,
    requestOptions
  ).then(handleResponse, handleError);
}

function SaveRider(values) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };

  console.log(values);

  return fetch(config.apiUrl + "/api/person/rider/save", requestOptions).then(
    handleResponse,
    handleError
  );
}

function handleResponse(response) {
  return new Promise((resolve, reject) => {
    if (response.ok) {
      // return json if it was returned in the response
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        response.json().then((json) => resolve(json));
      } else {
        resolve();
      }
    } else {
      // return error message from response body
      response.text().then((text) => reject(text));
    }
  });
}

function handleError(error) {
  return Promise.reject(error && error.message);
}
