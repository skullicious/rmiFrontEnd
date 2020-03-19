import React from "react";

const Location = ({ renderInput, renderYesNoToggle, renderButton }) => {
  return (
    <div>
      {renderInput("dayLocation", "Where is the car parked during the day?")}
      {renderYesNoToggle("isKeptAtHome", "Kept at home address overnight?")}
      <br />
      {renderButton("Next", "vehicle")}
    </div>
  );
};

export default Location;
