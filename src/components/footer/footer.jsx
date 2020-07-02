import React from "react";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: 3,
    background: "transparent",
  },
  backChevron: {
    position: "absolute",
    top: "-20px",
    left: "35px",
  },
  forwardChevron: {
    position: "absolute",
    top: "-20px",
    right: "35px",
  },
});

export default function Footer({ bottomNavClick, index, iconCount }) {
  const classes = useStyles();

  const handleChange = (dir) => {
    bottomNavClick(dir);
  };

  return (
    <div>
      <BottomNavigation className={classes.root}>
        {index !== 0 && (
          <Fab
            onClick={handleChange.bind(this, "backward")}
            value="backward"
            className={classes.backChevron}
            color="primary"
          >
            <ArrowBackIosIcon />
          </Fab>
        )}

        {index !== iconCount - 1 && (
          <Fab
            onClick={handleChange.bind(this, "forward")}
            value="forward"
            className={classes.forwardChevron}
            color="primary"
          >
            <ArrowForwardIosIcon />
          </Fab>
        )}
      </BottomNavigation>
    </div>
  );
}
