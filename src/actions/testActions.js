//REFACTORED TO MAKE COMPONENTS CONTAIN INFO FOR FETCH DATA>> NOT SURE IF THIS IS ANTI PATTERN FOR REDUX

// import { FETCH_TITLES } from "./types";
// import { FETCH_OCCUPATIONS } from "./types";
// import { FETCH_OCCUPATIONSTATUS } from "./types";
// import { TITLES_API_URL } from "../services/apiService";
// import { OCCUPATIONS_API_URL } from "./../services/apiService";
// import { OCCUPATIONSTATUS_API_URL } from "./../services/apiService";

// export const fetchTitles = () => (dispatch) => {
//   fetch(TITLES_API_URL)
//     .then((res) => res.json())
//     .then((data) =>
//       dispatch({
//         type: FETCH_TITLES,
//         payload: data,
//       })
//     );
// };

export const fetchData = (API_URL, TYPE) => (dispatch) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: TYPE,
        payload: data,
      })
    );
};
