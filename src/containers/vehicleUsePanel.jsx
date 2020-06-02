import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  CYCLEUSES_API_URL,
  LICENSETYPES_API_URL,
} from "./../services/apiService";
import { FETCH_CYCLEUSES, FETCH_LICENSETYPES } from "./../actions/types";
import { fetchData } from "../actions/testActions";

const VehicleUsePanel = ({
  fetchData,
  cycleUses,
  licenseTypes,
  renderRadioGrid,
  renderSelect,
  renderYesNoToggle,
  renderButton,
}) => {
  useEffect(() => {
    fetchData(CYCLEUSES_API_URL, FETCH_CYCLEUSES);
    fetchData(LICENSETYPES_API_URL, FETCH_LICENSETYPES);
  }, []);


  return (
    <div>
      {renderRadioGrid("cycleUse.cycleUse", "Cycle Use", cycleUses)}
      {renderSelect("cycleUse.licenseType", "License Type", licenseTypes)}

      {renderYesNoToggle(
        "cycleUse.isCommuting",
        "Do you commute to work by bicycle?"
      )}
      {renderYesNoToggle(
        "cycleUse.motoringQualification",
        "Do you have a full UK Driving license?"
      )}
      <br />
      {renderButton("Next")}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cycleUses: state.data.cycleUses,
  licenseTypes: state.data.licenseTypes,
});

export default connect(mapStateToProps, {
  fetchData,
})(VehicleUsePanel);
