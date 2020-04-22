import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./../actions/testActions";
import { OCCUPATIONS_API_URL } from "./../services/apiService";
import { OCCUPATIONSTATUS_API_URL } from "./../services/apiService";
import { FETCH_OCCUPATIONS } from "../actions/types";
import { FETCH_OCCUPATIONSTATUS } from "../actions/types";
import { FETCH_EMPLOYMENTTYPES } from "../actions/types";
import { EMPLOYMENTTYPES_API_URL } from "./../services/apiService";

const OccupationPanel = ({
  fetchData,
  employmentTypes,
  occupations,
  occupationStatus,
  renderSelect,
  renderYesNoToggle,
  renderRadioGrid,
}) => {
  useEffect(() => {
    fetchData(EMPLOYMENTTYPES_API_URL, FETCH_EMPLOYMENTTYPES);
    fetchData(OCCUPATIONS_API_URL, FETCH_OCCUPATIONS);
    fetchData(OCCUPATIONSTATUS_API_URL, FETCH_OCCUPATIONSTATUS);
  }, []);

  return (
    <div>
      {renderSelect("occupation_occupation", "Occupation", occupations)}
      {renderSelect(
        "occupation_occupationStatus",
        "Occupation Status",
        occupationStatus
      )}
      {renderYesNoToggle("occupation_partTime", "Part Time?")}
      <br />
      {renderRadioGrid(
        "occupation_employmentType",
        "Employment Type",
        employmentTypes
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  occupations: state.data.occupations,
  occupationStatus: state.data.occupationStatus,
  employmentTypes: state.data.employmentTypes,
});

export default connect(mapStateToProps, {
  fetchData,
})(OccupationPanel);
