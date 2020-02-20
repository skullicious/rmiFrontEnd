import React from "react";
import { getTitles } from "../services/titleService";

const Individual = ({ renderInput, renderRadioGrid }) => {
  const titles = getTitles();

  console.log("in panel");
  console.log(renderInput);

  console.log("in panel");
  return (
    <div>
      {renderRadioGrid("title", "Title Selection:", titles)}
      {renderInput("firstName", "First Name")}
      {renderInput("lastName", "Last Name")}
    </div>
  );
};

export default Individual;
