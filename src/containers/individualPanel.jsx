import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/testActions";
import { TITLES_API_URL } from "../services/apiService";
import { FETCH_TITLES } from "../actions/types";
import { Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Individual = ({ titles, renderInput, renderRadioGrid, fetchData }) => {
  useEffect(() => {
    fetchData(TITLES_API_URL, FETCH_TITLES);
  }, []);

  return (
    <div>
      About you
      <br></br>
      Please note fields marked with '*' require an entry.
      <br></br>
      <br></br>
      <input
        type="hidden"
        id="individual.id"
        name="individual.id"
        value=""
      ></input>
      {renderRadioGrid("individual.title", "Title Selection *", titles)}
      {renderInput("individual.firstName", "First Name *")}
      {renderInput("individual.lastName", "Last Name *")}
    </div>
  );
};

const mapStateToProps = (state) => ({ titles: state.data.titles });

export default connect(mapStateToProps, { fetchData })(Individual);
