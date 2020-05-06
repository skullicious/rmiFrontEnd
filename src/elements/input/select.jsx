import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "redux-form";

const Select = ({ name, label, options, error, ...rest }) => {
  const useStyles = makeStyles((theme) => ({}));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="form-group row">
        <label className={"col-sm-6"} htmlFor={name}>
          {label}
        </label>
        <Field
          component="select"
          name={name}
          id={name}
          {...rest}
          className="form-control col-sm-6"
        >
          <option value="">Please Select... </option>
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </Field>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
