import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  VEHICLEUSES_API_URL,
  LICENSETYPES_API_URL,
} from "./../services/apiService";
import { FETCH_VEHICLEUSES, FETCH_LICENSETYPES } from "./../actions/types";
import { fetchData } from "../actions/testActions";

const VehicleUsePanel = ({
  fetchData,
  vehicleUses,
  licenseTypes,
  renderRadioGrid,
  renderSelect,
  renderYesNoToggle,
  renderButton,
}) => {
  useEffect(() => {
    fetchData(VEHICLEUSES_API_URL, FETCH_VEHICLEUSES);
    fetchData(LICENSETYPES_API_URL, FETCH_LICENSETYPES);
  }, []);

  return (
    <div>
      {renderRadioGrid("vehicleUse_vehicleUse", "Vehicle Use", vehicleUses)}
      {renderSelect("vehicleUse_licenseType", "License Type", licenseTypes)}

      {renderYesNoToggle(
        "vehicleUse_licenseRestriction",
        "Do you have any license restrictions?"
      )}
      {renderYesNoToggle(
        "vehicleUse_motoringQualification",
        "Do you have any motoring qualifications?"
      )}
      <br />
      {renderButton("Next")}
    </div>
  );
};

const mapStateToProps = (state) => ({
  vehicleUses: state.data.vehicleUses,
  licenseTypes: state.data.licenseTypes,
});

export default connect(mapStateToProps, {
  fetchData,
})(VehicleUsePanel);
