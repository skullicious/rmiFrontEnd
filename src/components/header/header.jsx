import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Image from "react-bootstrap/Image";

import HeaderImage from "../../content/HorizontalClearBG.png";
import { useScrollTrigger } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 0.8,
    height: "64px",
  },
  scrollTriggered: {
    flexGrow: 1,
    opacity: 1,
    height: "64px",
    borderBottom: "1px solid grey",
  },
  appBar: {
    background: "#2E3B55",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  headerImage: {
    backgroundImage: "url(" + Image + ")",
  },
  imgFluid: {
    maxWidth: "100%",
    height: "42px",
  },
}));

const style = {
  background: "white",
  color: "black",
  boxShadow: "none",
  position: "fixed",
};

export default function ButtonAppBar() {
  const classes = useStyles();

  const trigger = useScrollTrigger({ threshold: 33, disableHysteresis: true });

  return (
    <div id="rmiHeader">
      <AppBar
        style={style}
        position="sticky"
        className={!trigger ? classes.root : classes.scrollTriggered}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Image className={classes.imgFluid} src={HeaderImage}></Image>
        </Toolbar>
      </AppBar>
    </div>
  );
}
