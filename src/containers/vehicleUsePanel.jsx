import React, { Component } from "react";
import Input from "../elements/input/input";
import YesNoSlider from "../elements/input/yesNoSlider";

const VehicleUsePanel = () => {
  return (
    <div>
      <div>VehicleUse content</div>
      <Input label="Registration Number" name="regNumber" />
      <YesNoSlider id="carNice" />
    </div>
  );
};

export default VehicleUsePanel;
