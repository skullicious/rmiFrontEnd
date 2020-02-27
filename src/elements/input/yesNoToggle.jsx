import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ToggleButton from "@material-ui/lab/ToggleButton/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup/ToggleButtonGroup";

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: "5px"
  },
  paper: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap"
  },
  toggleButtonGroup: {
    width: "100%",
    fontWeight: "400"
  },
  toggleButtonNA: {
    color: "black"
  },
  toggleButton: {
    width: "50%",
    color: "#212529"
  },
  toggleButtonSelected: {
    backgroundColor: "#137cbd !important",
    "& a": {
      color: "white !important"
    }
  }
}));

const StyledToggleButtonGroup = withStyles(theme => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    padding: theme.spacing(0, 1),
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius
    }
  }
}))(ToggleButtonGroup);

export default function YesNoToggle({ name, label, onToggle, value, error }) {
  const [alignment, setAlignment] = React.useState(value);
  const handleAlignment = (event, newAlignment, value) => {
    setAlignment(newAlignment);
    onToggle(event);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>{label}</span>
      <br />
      <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          id={name}
          name={name}
          label={label}
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          className={classes.toggleButtonGroup}
        >
          <ToggleButton
            classes={{
              root: classes.toggleButton,
              selected: classes.toggleButtonSelected
            }}
            value="true"
            aria-label="true aligned"
            name={name}
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
              selected: classes.toggleButtonSelected
            }}
            name={name}
            value="false"
            aria-label="false aligned"
          >
            <a>No</a>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
