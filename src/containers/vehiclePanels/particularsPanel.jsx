import React from "react";

const Particulars = ({ renderInput, renderYesNoToggle }) => {
  return (
    <div>
      {renderYesNoToggle("", "Has the vehicle been purchased?")}
      {renderInput("vehicleValue", "Value of vehicle")}
      {renderInput("annualMileage", "Annual Mileage")}
      {renderInput("currentMileage", "Current Mileage")}
    </div>
  );
};

export default Particulars;
