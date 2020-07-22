import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup";
import { Field } from "redux-form";

const toggleStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "5px",
  },
  paper: {
    display: "flex",
    border: "2px solid #AEAEAE",
    flexWrap: "wrap",
    borderRadius: "25px !important",
  },
  toggleButtonGroup: {
    width: "100%",
    fontWeight: "400",
    borderRadius: "25px !important",
    height: "46px !important",
  },
  toggleButtonNA: {
    color: "black",
    height: "38px !important",
  },
  toggleButtonNo: {
    width: "50%",
    borderRadius: "0px 50px 50px 0px !important",
    color: "#212529",
    height: "39px !important",
    "&:focus": {
      outline: 0,
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  toggleButtonYes: {
    width: "50%",
    borderRadius: "50px 0px 0px 50px !important",
    color: "#212529",
    height: "39px !important",

    "&:focus": {
      outline: 0,
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  toggleButtonSelected: {
    border: "solid #4EB9A9 3px !important",
    backgroundColor: "white !important",
    "& a": {
      color: "#000000 !important",
    },
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 1),
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

const YesNoToggle = ({ name, label, onToggle, error }) => {
  return (
    <React.Fragment>
      <Field
        name={name}
        component={RenderField}
        label={label}
        onChange={onToggle}
        error={error}
      />
    </React.Fragment>
  );
};

const RenderField = (field) => {
  const [alignment, setAlignment] = React.useState(
    field.input.value.toString()
  );

  const handleAlignment = (event, newAlignment, value) => {
    setAlignment(newAlignment);

    field.input.value = event.currentTarget.value;

    field.input.onChange(event);
  };

  const parentClick = (event) => {
    event.preventDefault();
  };

  const classes = toggleStyles();

  return (
    <React.Fragment>
      <div className={(classes.root, "form-group row")}>
        <label className="col-sm-6">{field.label}</label>

        <label className={"col-sm-6"}>
          <Paper elevation={0} className={classes.paper}>
            <StyledToggleButtonGroup
              id={field.input.name}
              name={field.input.name}
              label={field.input.label}
              size="small"
              value={field.input.value}
              exclusive
              aria-label="text alignment"
              className={classes.toggleButtonGroup}
              onChange={handleAlignment}
            >
              <ToggleButton
                classes={{
                  root: classes.toggleButtonYes,
                  selected: classes.toggleButtonSelected,
                }}
                value="true"
                aria-label="true aligned"
                name={field.input.name}
              >
                <a onClick={parentClick}>Yes</a>
              </ToggleButton>

              <ToggleButton
                className={classes.toggleButtonNA}
                value="na"
                aria-label="centered"
                disabled
                selected={true}
              >
                ||
              </ToggleButton>

              <ToggleButton
                classes={{
                  root: classes.toggleButtonNo,
                  selected: classes.toggleButtonSelected,
                }}
                value="false"
                aria-label="false aligned"
                name={field.input.name}
              >
                <a onClick={parentClick}>No</a>
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </label>
        {field.error && <div className="alert alert-danger">{field.error}</div>}
      </div>
    </React.Fragment>
  );
};

export default YesNoToggle;
