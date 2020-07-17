import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Field } from "redux-form";

const withStyles = makeStyles((theme) => ({
  container: {},

  textFieldEmpty: {
    width: "100%",
    border: "solid",
    borderColor: "#AEAEAE",
    borderWidth: "3px",
    borderRadius: "25px",
    height: "50px",
    paddingTop: "6px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  textFieldPopulated: {
    width: "100%",
    border: "solid",
    borderColor: "#4EB9A9",
    borderWidth: "3px",
    borderRadius: "25px",
    height: "50px",
    paddingTop: "6px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));

const DatePicker = ({ name, label, error, onChange, ...rest }) => {
  return (
    <React.Fragment>
      <Field
        name={name}
        component={renderField}
        error={error}
        label={label}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

const fixDate = (date) => {
  let fixedDate = date.slice(0, -9);
  return fixedDate;
};

const renderField = (field) => {
  const classes = withStyles();

  return (
    <div className="form-group row">
      <label className={"col-sm-6"}>{field.label}</label>
      <div className={"col-sm-6"}>
        <TextField
          id={field.name}
          type="date"
          className={
            field.input.value == ""
              ? classes.textFieldEmpty
              : classes.textFieldPopulated
          }
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            disableUnderline: true,
          }}
          // value={field.input.value.toString()}
          value={
            field.input.value.length > 10
              ? fixDate(field.input.value)
              : field.input.value
          }
          onChange={field.input.onChange}
        />
        {field.error && <div className="alert alert-danger">{field.error}</div>}
      </div>
    </div>
  );
};

export default DatePicker;
