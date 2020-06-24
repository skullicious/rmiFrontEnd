import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const RmButton = ({ label, target, pristine, submitting, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#4EB9A9",
      color: "white",
      borderRadius: theme.shape.borderRadius,
      width: "100%",
      border: "none",
      borderColor: "#4EB9A9",
      height: "50px",
      fontWeight: "Bold",
    },
  }));

  const classes = useStyles();

  return (
    <button
      // disabled={this.validate()}
      className={classes.root}
      disabled={pristine || submitting}
      value={target}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default RmButton;
