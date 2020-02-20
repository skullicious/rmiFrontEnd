import React from "react";

const Location = ({ renderInput, renderYesNoToggle }) => {
  return (
    <div>
      {renderInput("dayLocation", "Where is the car parked during the day?")}
      {renderYesNoToggle("isKeptAtHome", "Kept at home address overnight?")}
    </div>
  );
};

export default Location;