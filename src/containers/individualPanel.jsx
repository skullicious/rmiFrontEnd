import React, { useState, useEffect } from "react";
// import { TITLES_API_URL } from "../services/apiService";
import { connect } from "react-redux";
import { fetchTitles } from "./../actions/testActions";

const Individual = ({ titles, renderInput, renderRadioGrid, fetchTitles }) => {
  useEffect(() => {
    console.log("in use effect");
    fetchTitles();
  }, []);

  // console.log(this.props);
  // const [hasError, setErrors] = useState(false);
  // const [titles, setTitles] = useState([]);

  //USE EFFECTS USED IN PLACE OF COMPONENT DID MOUNT AS SIDE EFFECT IN FUNCTION COMPONENT

  // async function fetchData() {
  //   const res = await fetch(TITLES_API_URL);
  //   res
  //     .json()
  //     .then(res => setTitles(res))
  //     .catch(err => setErrors(err));
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // let titles = [];

  return (
    <div>
      {renderRadioGrid("individual_title", "Title Selection:", titles)}
      {renderInput("individual_firstName", "First Name")}
      {renderInput("individual_lastName", "Last Name")}
    </div>
  );
};

const mapStateToProps = (state) => ({ titles: state.tests.titles });

export default connect(mapStateToProps, { fetchTitles })(Individual);
