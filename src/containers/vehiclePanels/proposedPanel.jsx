import React from "react";
import { getVehicles } from "../../services/vehicleService";

const Proposed = ({ renderInput, renderYesNoToggle, renderSelect }) => {
  const vehicles = getVehicles();
  return (
    <div>
      {renderYesNoToggle(
        "regNoKnown",
        "Do you know the vehicle registration number?"
      )}
      <br />
      {renderInput("regNumber", "Registration Number")}
      {renderSelect("vehicle", "Select vehicle", vehicles)}
      {renderInput("yearOfMake", "Year of Make")}
    </div>
  );
};

export default Proposed;
