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
    flexWrap: "wrap",
    width: "130px"
  },
  toggleButton: {
    color: "#212529"
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
        >
          <ToggleButton
            className={classes.toggleButton}
            value="true"
            aria-label="true aligned"
            name={name}
          >
            <span></span>
            {<a>Yes</a>}
            <span></span>
          </ToggleButton>
          <ToggleButton
            className={classes.toggleButton}
            value="na"
            aria-label="centered"
            disabled
            selected={true}
          >
            ||
          </ToggleButton>
          <ToggleButton
            className={classes.toggleButton}
            name={name}
            value="false"
            aria-label="false aligned"
          >
            <span>&nbsp;</span>
            <a>No</a>
            <span>&nbsp;</span>
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
