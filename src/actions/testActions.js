import { FETCH_TESTS, FETCH_TESTS_X } from "./types";
import { TITLES_API_URL } from "../services/apiService";

export const fetchTitles = () => (dispatch) => {
  console.log("in fetch");

  fetch(TITLES_API_URL)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_TESTS,
        payload: data,
      })
    );
};
