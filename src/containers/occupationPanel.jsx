import React from "react";
import {
  getOccs,
  getOccStatus,
  getEmploymentTypes
} from "../services/occupationService";
import { getVehicleUses } from "../services/vehicleUseService";

const OccupationPanel = ({
  renderSelect,
  renderYesNoToggle,
  renderRadioGrid
}) => {
  const occs = getOccs();
  const occStatus = getOccStatus();
  const employmentTypes = getEmploymentTypes();
  return (
    <div>
      {renderSelect("occupation", "Occupation", occs)}
      {renderSelect("occStatus", "Occupation Status", occStatus)}
      {renderYesNoToggle("partTime", "Part Time?")}
      <br />
      {renderRadioGrid("employmentType", "Employment Type", employmentTypes)}
    </div>
  );
};

export default OccupationPanel;
