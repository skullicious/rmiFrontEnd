import React from "react";
import { getTitles } from "../services/titleService";

const Location = ({ renderInput, renderRadioGrid, renderYesNoToggle }) => {
  return (
    <div>
      {renderInput("dayLocation", "Where is the car parked during the day?")}
      {renderYesNoToggle("isKeptAtHome", "Kept at home address overnight?")}
    </div>
  );
};

export default Location;
