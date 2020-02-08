import React from "react";

const VehicleUsePanel = ({ renderYesNoToggle }) => {
  return <div>{renderYesNoToggle("isMarried", "Marriage Status")}</div>;
};

export default VehicleUsePanel;
