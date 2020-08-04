import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";

const withStyles = makeStyles((theme) => ({
  padding: {
    padding: "0px",
  },
  fieldEmpty: {
    borderRadius: "25px !important",
    width: "50%",
    border: "3px solid #AEAEAE",
    height: "50px",
    width: "100%",

    padding: "15px",
    "&:focus": {
      outline: 0,
    },
  },
  fieldPopulated: {
    borderRadius: "25px !important",
    width: "50%",
    border: "3px solid #4EB9A9",
    height: "50px",
    width: "100%",

    padding: "15px",
    "&:focus": {
      outline: 0,
    },
  },
}));

const Input = ({ name, label, error, dependent, isReadOnly }) => {
  return (
    <React.Fragment>
      <Field
        name={name}
        component={renderField}
        error={error}
        label={label}
        dependent={dependent}
        isReadOnly={isReadOnly}
      />
    </React.Fragment>
  );
};

const renderField = (field) => {
  const classes = withStyles();

  return (
    <React.Fragment>
      <div
        hidden={
          field.dependent != undefined && field.input.value == "" ? true : false
        }
        className={(classes.padding, "form-group row")}
      >
        <label className="col-sm-6" htmlFor={field.input.name}>
          {field.label}
        </label>
        <div className="col-sm-6">
          <Field
            component="input"
            id={field.input.name}
            className={
              field.input.value == ""
                ? classes.fieldEmpty
                : classes.fieldPopulated
            }
            name={field.input.name}
            value={field.input.value}
            readOnly={field.isReadOnly}
          />
        </div>
      </div>

      {field.error && <div className="alert alert-danger">{field.error}</div>}
    </React.Fragment>
  );
};

export default Input;
