import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";

const Input = ({ name, label, error, ...rest }) => {
  const useStyles = makeStyles((theme) => ({}));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={(classes.padding, "form-group row")}>
        <label className="col-sm-6" htmlFor={name}>
          {label}
        </label>

        <Field
          component="input"
          id={name}
          className={"form-control col-sm-6"}
          name={name}
          {...rest}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
