import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/testActions";
import { TITLES_API_URL } from "../services/apiService";
import { FETCH_TITLES } from "../actions/types";
import { Hidden } from "@material-ui/core";

const Individual = ({ titles, renderInput, renderRadioGrid, fetchData }) => {
  useEffect(() => {
    fetchData(TITLES_API_URL, FETCH_TITLES);
  }, []);

  return (
    <div>
      <input
        type="hidden"
        id="individual.id"
        name="individual.id"
        value=""
      ></input>
      {renderRadioGrid("individual.title", "Title Selection:", titles)}
      {renderInput("individual.firstName", "First Name")}
      {renderInput("individual.lastName", "Last Name")}
    </div>
  );
};

const mapStateToProps = (state) => ({ titles: state.data.titles });

export default connect(mapStateToProps, { fetchData })(Individual);
