import React, { Component, useRef, useEffect } from "react";
import Select from "react-select";
import SimpleValue from "react-select-simple-value";
import { makeStyles } from "@material-ui/core/styles";

import { Field } from "redux-form";

const customStyles = {
  control: (provided, state) => ({
    ...provided,

    borderColor: state.hasValue !== false ? "#4EB9A9" : "#AEAEAE",
    borderWidth: "3px",
    borderRadius: "25px",
    height: "50px",
  }),
};

const ReactSelect = ({ name, label, options, value, onChange }) => {
  console.log("in select");
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

const handleSelectChange = (input, value) => {
  //rebuilds object for consumation by form
  console.log(value);
  const currentTarget = value._id;
  return currentTarget;
};

const RenderField = (field) => {
  console.log("in select");
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
              // defaultInputValue={"Please Select..."}
              id={field.input.name}
              name={field.input.name}
              options={field.options}
              getOptionLabel={(option) => option.name}
              styles={customStyles}
              onChange={(value) =>
                field.input.onChange(
                  handleSelectChange(field.input.name, value)
                )
              }
            />
          )}
        </SimpleValue>
      </div>
      {field.error && <div className="alert alert-danger">{field.error}</div>}
    </div>
  );
};

export default ReactSelect;
