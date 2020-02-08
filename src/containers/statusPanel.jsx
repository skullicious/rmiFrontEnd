import React from "react";

const StatusPanel = ({ renderYesNoToggle }) => {
  return (
    <div>
      {renderYesNoToggle("married", "Marriage Status")}
      <br />
      {renderYesNoToggle("ownHouse", "Own House")}
      <br />
      {renderYesNoToggle("hasLicense", "Car License")}
    </div>
  );
};

export default StatusPanel;
