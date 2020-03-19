import React from "react";
import {
  getOccs,
  getOccStatus,
  getEmploymentTypes
} from "../services/occupationService";

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
      {renderSelect("occupation_occupation", "Occupation", occs)}
      {renderSelect(
        "occupation_occupationStatus",
        "Occupation Status",
        occStatus
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

export default OccupationPanel;
