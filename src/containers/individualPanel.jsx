import React from "react";
import { getTitles } from "../services/titleService";

const Individual = ({ renderInput, renderRadioGrid }) => {
  const titles = getTitles();

  return (
    <div>
      {renderRadioGrid("individual_title", "Title Selection:", titles)}
      {renderInput("individual_firstName", "First Name")}
      {renderInput("individual_lastName", "Last Name")}
    </div>
  );
};

export default Individual;
