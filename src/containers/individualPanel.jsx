import React from "react";
import { getTitles } from "../services/titleService";

const Individual = ({ renderSelect, renderInput, renderRadioGrid }) => {
  const titles = getTitles();

  return (
    <div>
      {renderSelect("title", "Title", titles)}
      {renderInput("firstName", "First Name")}
      {renderInput("lastName", "Last Name")}
      {renderRadioGrid("title", "Title Selection:", titles)}
    </div>
  );
};

export default Individual;
