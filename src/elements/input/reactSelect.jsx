import React, { Component } from "react";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";

import { Field } from "redux-form";

const colourStyles = {
  control: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: isSelected ? "#4EB9A9" : "white",
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,

      backgroundColor: isFocused ? "#4EB9A9" : "white",

      color: isFocused ? "black" : "",

      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const ReactSelect = ({ name, label, options, value }) => {
  return (
    <React.Fragment>
      <Field
        component={RenderField}
        name={name}
        label={label}
        options={options}
        value={value}
      />
    </React.Fragment>
  );
};

const RenderField = (field) => {
  console.log("FIELD");
  console.log(field);

  console.log("FIELD");
  const data = field.options.map((option, index) => {
    return {
      label: option.name,
      value: option._id,
      key: index,
    };
  });

  //   return <ReactSelect options={data} styles={colourStyles} />;
  return (
    <div>
      <Select
        label={field.input.label}
        options={data}
        styles={colourStyles}
        value={field.input.value}
      />
    </div>
  );
};

// const RenderField = (field) => {
//   console.log("render field");
//   console.log(field);
//   console.log("render field");
//   const data = field.input.options.map((option, index) => {
//     return {
//       label: option.name,
//       value: option._id,
//       key: index,
//     };
//   });

//   const useStyles = makeStyles((theme) => ({}));
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Select
//         label={field.input.label}
//         options={data}
//         styles={colourStyles}
//         selectedValue={field.input.value}
//       />
//     </div>
//   );
// };
export default ReactSelect;
