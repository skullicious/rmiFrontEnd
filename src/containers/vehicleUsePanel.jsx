import React from "react";
import {
  getVehicleUses,
  getLicenseTypes
} from "./../services/vehicleUseService";

const VehicleUsePanel = ({
  renderRadioGrid,
  renderSelect,
  renderYesNoToggle,
  renderButton
}) => {
  const vehicleUses = getVehicleUses();
  const licenseTypes = getLicenseTypes();
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

export default VehicleUsePanel;
