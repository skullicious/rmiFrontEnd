import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Image from "react-bootstrap/Image";

import HeaderImage from "../../content/HorizontalClearBG.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 0.8,
    height: "55px",
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
}));

const style = {
  background: "white",
  color: "black",
  boxShadow: "none",
  position: "fixed",
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={style} position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Image className="img-fluid" src={HeaderImage}></Image>
          {/* <Typography variant="h6" className={classes.title}>
            RaceMate Insurance
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
