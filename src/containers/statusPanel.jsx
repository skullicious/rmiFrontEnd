import React, { Component } from "react";
import YesNoSlider from "../elements/input/yesNoSlider";

const StatusPanel = () => {
  return (
    <div>
      <div>Status content</div>
      <YesNoSlider id="homeOwnershipStatus" />
      <br />
      <YesNoSlider id="ukResidencyStatus" />
      <br />
      <YesNoSlider id="marriageStatus" />
    </div>
  );
};

export default StatusPanel;
