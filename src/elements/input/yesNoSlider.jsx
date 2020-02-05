import React from "react";

const YesNoSlider = ({ id }) => {
  return (
    <div id={id} class="switch-toggle switch-3 switch-candy hxm-slider-width">
      <input id={id + "Yes"} name={id} type="radio" />
      <label htmlFor={id + "Yes"} onclick="">
        Yes
      </label>

      <input id={id + "Na"} name={id} type="radio" disabled="disabled" />
      <label htmlFor={id + "Na"} class="disabled" onclick="">
        |
      </label>

      <input id={id + "No"} name={id} type="radio" />
      <label htmlFor={id + "No"} onclick="">
        No
      </label>

      <a></a>
    </div>
  );
};

export default YesNoSlider;
