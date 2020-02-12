import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
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

export default function LabelBottomNavigation(onClick) {
  console.log(onClick);
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Backward"
        value="backward"
        onClick={onClick}
        icon={<ArrowBackIosIcon />}
      />
      <BottomNavigationAction

      // icon={<FavoriteIcon />}
      />
      <BottomNavigationAction

      // icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Forward"
        value="forward"
        icon={<ArrowForwardIosIcon />}
      />
    </BottomNavigation>
  );
}

// import React from "react";

// const footer = props => {
//   return (
//     <div>
//       <h3 className="hxm-footer">Footer</h3>
//     </div>
//   );
// };

// export default footer;
