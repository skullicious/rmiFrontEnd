import React from "react";
import Android from "@material-ui/icons/Android";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#007bff",
    textAlign: "center"
  }
});

export default function Footer({ bottomNavClick, index }) {
  const classes = useStyles();

  const handleChange = dir => {
    bottomNavClick(dir);
  };

  return (
    <div>
      <BottomNavigation className={classes.root}>
        {index != 0 && (
          <Tab
            icon={
              <ArrowBackIosIcon
                onClick={handleChange.bind(this, "backward")}
                value="backward"
              />
            }
          />
        )}

        <Tab />
        <Tab />
        <Tab />
        <Tab />

        {index != 3 && (
          <Tab
            icon={
              <ArrowForwardIosIcon
                onClick={handleChange.bind(this, "forward")}
                value="forward"
              />
            }
          />
        )}
      </BottomNavigation>
    </div>
  );
}
