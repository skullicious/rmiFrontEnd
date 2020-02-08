import React from "react";

const YesNoSlider = ({ name }) => {
  return (
    <div
      id={name}
      className="switch-toggle switch-3 switch-candy form-group"
      value={true}
    >
      <input id={name + "_on"} name={name} type="radio" />

      <label htmlFor={name + "_on"} onClick="">
        ON
      </label>

      <input
        id={name + "_na"}
        name={name}
        type="radio"
        disabled
        checked="defaultChecked"
      />
      <label htmlFor={name + "_na"} className="disabled" onClick="">
        ||
      </label>

      <input id={name + "_off"} name={name} type="radio" />

      <label htmlFor={name + "_off"} onClick="">
        OFF
      </label>

      <a></a>
    </div>
  );
};

export default YesNoSlider;
