import React, { Component } from "react";
import { getOccs } from "../services/occupationService";
import Select from "./../elements/input/select";

const OccupationPanel = () => {
  const options = getOccs();
  return (
    <div>
      <div>Occupation content</div>
      <Select options={options} />
    </div>
  );
};

export default OccupationPanel;
