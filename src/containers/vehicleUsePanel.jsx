import React from "react";
import {
  getVehicleUses,
  getLicenseTypes
} from "./../services/vehicleUseService";

const VehicleUsePanel = ({
  renderRadioGrid,
  renderSelect,
  renderYesNoToggle
}) => {
  const vehicleUses = getVehicleUses();
  const licenseTypes = getLicenseTypes();
  return (
    <div>
      {renderRadioGrid("vehicleUse", "Vehicle Use", vehicleUses)}
      {renderSelect("licenseType", "License Type", licenseTypes)}

      {renderYesNoToggle(
        "licenseRestrictions",
        "Do you have any license restrictions?"
      )}
      {renderYesNoToggle(
        "motoringQualifications",
        "Do you have any motoring qualifications?"
      )}
    </div>
  );
};

export default VehicleUsePanel;
