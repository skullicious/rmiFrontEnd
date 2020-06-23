import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper/Paper";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: 0.8,
    flexGrow: 1,
    maxWidth: 3000,
    minWidth: 320,
    width: "100%",

    position: "fixed",
    zIndex: "2",
    backgroundColor: "black",
  },
  base: {
    color: "white",
  },

  "@global": {
    "[data-value-error]": {
      backgroundColor: "#f8d7da",
      borderColor: "#f5c6cb",
    },
  },
}));

export default function SimpleTabs({
  renderInput,
  renderSelect,
  renderRadioGrid,
  renderYesNoToggle,
  renderPanel,
  renderButton,
  renderReactSelect,
  icons,
}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bottomNavClick = (dir) => {
    let newValue;
    if (dir === "forward" && value < icons.length) {
      newValue = value + 1;
      setValue(newValue);
    } else if (dir === "backward" && value > 0) {
      newValue = value - 1;
      setValue(newValue);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper
          square
          className={classes.root}
          hidden={isDesktopOrLaptop ? true : false}
        >
          {/* {!isDesktopOrLaptop && ( */}
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary" //indicator!
            textColor="primary"
            aria-label="icon tabs"
          >
            {icons.map((icon, index) => (
              <Tab
                key={index}
                icon={icon.tabIcon}
                aria-label={icon.ariaLabel}
                classes={{
                  root: classes.base,
                }}
              />
            ))}
          </Tabs>
        </Paper>
      </div>
      {renderPanel({
        renderInput,
        renderRadioGrid,
        renderYesNoToggle,
        renderSelect,
        renderReactSelect,
        value,
        renderButton,
      })}

      {!isDesktopOrLaptop && (
        <Footer
          bottomNavClick={bottomNavClick.bind(this)}
          index={value}
          iconCount={icons.length}
        />
      )}
    </React.Fragment>
  );
}
