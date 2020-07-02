import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const RmNavLink = ({ label, to }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // backgroundColor: "white",
      // color: "#4EB9A9",

      // borderRadius: "25px",
      // width: "100%",
      // borderWidth: "5px",
      // borderColor: "#4EB9A9",
      // height: "50px",
      // fontWeight: "Bold",

      backgroundColor: "white",
      color: "#4EB9A9",
      borderRadius: "25px",
      width: "100%",
      borderWidth: "5px",

      borderColor: "#4EB9A9",
      height: "50px",
      fontWeight: "Bold",
      borderStyle: "solid",
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
