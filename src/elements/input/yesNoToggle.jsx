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
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
  },
  toggleButtonGroup: {
    width: "100%",
    fontWeight: "400",
  },
  toggleButtonNA: {
    color: "black",
  },
  toggleButton: {
    width: "50%",
    color: "#212529",
  },
  toggleButtonSelected: {
    backgroundColor: "#4EB9A9 !important",

    borderWidth: "50px",
    borderColor: "#4EB9A9",
    "& a": {
      fontWeight: "Bold",
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

const YesNoToggle = ({ name, label, onToggle, error, value }) => {
  return (
    <React.Fragment>
      <Field
        name={name}
        component={RenderField}
        label={label}
        onChange={onToggle}
        error={error}
        value={value}
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

    console.log(event.currentTarget.value.toString());

    console.log(field);

    field.input.onChange(event);
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
              value={alignment}
              exclusive
              aria-label="text alignment"
              className={classes.toggleButtonGroup}
              onChange={handleAlignment}
            >
              <ToggleButton
                classes={{
                  root: classes.toggleButton,
                  selected: classes.toggleButtonSelected,
                }}
                value="true"
                aria-label="true aligned"
                name={field.input.name}
              >
                <a>Yes</a>
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
                  root: classes.toggleButton,
                  selected: classes.toggleButtonSelected,
                }}
                value="false"
                aria-label="false aligned"
                name={field.input.name}
              >
                <a>No</a>
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
