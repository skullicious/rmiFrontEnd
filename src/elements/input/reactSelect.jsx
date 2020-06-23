import React, { Component, useRef, useEffect } from "react";
import Select from "react-select";
import SimpleValue from "react-select-simple-value";
import { makeStyles } from "@material-ui/core/styles";

import { Field } from "redux-form";

const customStyles = {
  valueContainer: (provided, state) => ({
    ...provided,

    backgroundColor: state.value !== null ? "#4EB9A9" : "white",
    fontWeight: state.value !== null ? "bold" : "normal",
  }),
  // control: (styles, { isSelected }) => ({
  //   ...styles,
  //   backgroundColor: isSelected ? "#4EB9A9" : "white",
  //   fontWeight: isSelected ? "bold" : "normal",
  // }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,

      backgroundColor: isFocused ? "#4EB9A9" : "white",

      color: isFocused ? "black" : "",

      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};
////original reactselect
// const ReactSelect = ({ name, label, options, value, onChange }) => {
//   return (
//     <React.Fragment>
//       <Field
//         component={RenderField}
//         name={name}
//         label={label}
//         options={options}
//         value={value}
//         onChange={onChange}
//       />
//     </React.Fragment>
//   );
// };

const ReactSelect = ({ name, label, options, value, onChange }) => {
  return (
    <React.Fragment>
      <Field
        component={RenderField}
        name={name}
        label={label}
        options={options}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

// const MySelect = ({ options, value }) => (
//   <SimpleValue options={options} value={value}>
//     {(simpleProps) => <Select {...simpleProps} />}
//   </SimpleValue>
// );

const handleSelectChange = (input, value) => {
  //rebuilds object for consumation by form
  const currentTarget = value._id;
  return currentTarget;
};

const ifObjectOrNot = (targetValue) => {
  let newValue = {};

  if (targetValue.input.value.value === undefined) {
    newValue = targetValue.options.find(
      (obj) => obj._id === targetValue.input.value
    );
    return newValue;
  } else {
    newValue = targetValue.options.find(
      (obj) => obj._id === targetValue.input.value.value
    );
    return newValue;
  }
};

const getValue = (opts, val) => {
  const result = opts.find((o) => o._id === val);

  return result;
};

const RenderField = (field) => {
  console.log(field);
  return (
    <div>
      <div className="form-group row">
        <label className={"col-sm-6"}>{field.label}</label>

        <SimpleValue
          options={field.options}
          value={field.input.value}
          getOptionValue={(option) => option._id}
        >
          {(props) => (
            <Select
              {...props}
              isMulti={false}
              className={"col-sm-6"}
              // id={field.input.name}
              // name={field.input.name}
              options={field.options}
              getOptionLabel={(option) => option.name}
              // getOptionLabel={(option) => option.name}
              // getOptionValue={(option) => option._id}
              styles={customStyles}
              // value={field.input.value === "" ? null : ifObjectOrNot(field)}
              // onChange={(value) =>
              //   field.input.onChange(
              //     handleSelectChange(field.input.name, value)

              onChange={(value) =>
                field.input.onChange(
                  handleSelectChange(field.input.name, value)
                )
              }
            />
          )}
        </SimpleValue>

        {/* <MySelect
          isMulti={false}
          className={"col-sm-6"}
          id={field.input.name}
          name={field.input.name}
          options={field.options}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option._id}
          styles={customStyles}
          value={field.input.value}

          //working
          // value={field.input.value === "" ? null : ifObjectOrNot(field)}

          // onChange={(value) =>
          //   field.input.onChange(handleSelectChange(field.input.name, value))
          // }
          // menuIsOpen={true}
        /> */}
      </div>
      {field.error && <div className="alert alert-danger">{field.error}</div>}
    </div>
  );
};

// const RenderField = (field) => {
//   return (
//     <div>
//       <div className="form-group row">
//         <label className={"col-sm-6"}>{field.label}</label>

//         <Select
//           isMulti={false}
//           className={"col-sm-6"}
//           id={field.input.name}
//           name={field.input.name}
//           options={field.options}
//           getOptionLabel={(option) => option.name}
//           getOptionValue={(option) => option._id}
//           styles={customStyles}
//           //working
//           value={field.input.value === "" ? null : ifObjectOrNot(field)}
//           onChange={(value) =>
//             field.input.onChange(handleSelectChange(field.input.name, value))
//           }
//           // menuIsOpen={true}
//         />
//       </div>
//       {field.error && <div className="alert alert-danger">{field.error}</div>}
//     </div>
//   );
// };

export default ReactSelect;
