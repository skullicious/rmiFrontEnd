import React, { Component } from "react";
import Input from "../elements/input/input";
import OptionsGrid from "../elements/input/optionsGrid";
import { getTitles } from "../services/titleService";
import RadioGrid from "../elements/input/radioGrid";

const Individual = () => {
  const titles = getTitles();

  return (
    <div>
      <div>Title buttons here</div>
      <RadioGrid options={titles} label="Title Selection:" />
      <Input label="First Name" name="firstName" />
      <Input label="Last Name" name="lastName" />
    </div>
  );
};

export default Individual;
