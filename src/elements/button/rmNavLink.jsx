import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const RmNavLink = ({ label, to }) => {
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
    <NavLink to={to}>
      <button className={classes.root}>{label}</button>
    </NavLink>
  );
};

export default RmNavLink;
