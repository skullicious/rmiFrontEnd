import React, { Component, useRef, useEffect } from "react";
import Select from "react-select";
import SimpleValue from "react-select-simple-value";
import { makeStyles } from "@material-ui/core/styles";

import { Field, change } from "redux-form";

const customStyles = {
  control: (provided, state) => (
    console.log(state),
    {
      ...provided,

      borderColor: state.hasValue !== false ? "#4EB9A9" : "#AEAEAE",
      borderWidth: "3px",
      borderRadius: "25px",
      height: "50px",
    }
  ),
};

const ReactAddressSelect = ({ name, label, options, onChange }) => {
  return (
    <React.Fragment>
      <Field
        component={RenderField}
        name={name}
        label={label}
        options={options}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

const handleSelectChange = (input, value) => {
  //rebuilds object for consumation by form
  const currentTarget = value._id;
  return currentTarget;
};

const RenderField = (field) => {
  console.log("field");
  console.log(field.input.value);
  console.log("field");
  return (
    <div>
      <div className="form-group row">
        <label className={"col-sm-6"}>{field.label}</label>

        <Select
          isMulti={false}
          className={"col-sm-6"}
          id={field.input.name}
          name={field.input.name}
          options={field.options}
          getOptionLabel={(option) => option.name}
          styles={customStyles}
          onChange={(value) =>
            field.input.onChange(handleSelectChange(field.input, value))
          }
          defaultInputValue={field.input.value}
          onBlur={() => field.input.onBlur(field.input.value)}
        />
      </div>
      {field.error && <div className="alert alert-danger">{field.error}</div>}
    </div>
  );
};

// let getAddress = renderfield.onChange.value

export default ReactAddressSelect;
