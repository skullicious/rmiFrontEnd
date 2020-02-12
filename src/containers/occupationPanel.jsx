import React from "react";
import { employmentTypes } from "./../services/occupationService";
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
      {renderSelect("occupation", "Occupation", occs)}
      {renderSelect("occStatus", "Occupation Status", occStatus)}
      {renderYesNoToggle("partTime", "Part Time?")}
      <br />
      {renderRadioGrid("employmentType", "Employment Type", employmentTypes)}
    </div>
  );
};

export default OccupationPanel;
