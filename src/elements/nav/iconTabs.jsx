import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper/Paper";
import IndividualPanel from "./../../containers/individualPanel";
import OccupationPanel from "../../containers/occupationPanel";
import StatusPanel from "../../containers/statusPanel";
import VehicleUsePanel from "../../containers/vehicleUsePanel";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer/footer";
import TabPanel from "../nav/tabPanel";
import PersonParentPanel from "../../containers/personParentPanel";
import VehicleParentPanel from "../../containers/vehiclePanels/vehicleParentPanel";
import RenderPersonParentPanel from "./../../containers/personParentPanel";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 3000,
    minWidth: 320
  }
}));

export default function SimpleTabs({
  renderInput,
  renderSelect,
  renderRadioGrid,
  renderYesNoToggle,
  renderPanel,
  renderButton,
  icons
}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bottomNavClick = dir => {
    console.log("clicking navs");
    console.log(icons.length);
    console.log("clicking navs");

    let newValue;
    if (dir === "forward" && value < icons.length) {
      newValue = value + 1;
      setValue(newValue);
    } else if (dir === "backward" && value > 0) {
      newValue = value - 1;
      setValue(newValue);
    } else {
      console.log("AT END OF INDEX");
    }
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper square className={classes.root}>
          {!isDesktopOrLaptop && (
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon tabs example"
            >
              {icons.map(icon => (
                <Tab icon={icon.tabIcon} aria-label={icon.ariaLabel} />
              ))}
            </Tabs>
          )}
        </Paper>
      </div>
      {renderPanel({
        renderInput,
        renderRadioGrid,
        renderYesNoToggle,
        renderSelect,
        value,
        renderButton
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
