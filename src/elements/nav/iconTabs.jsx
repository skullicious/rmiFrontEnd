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
    let newValue;
    if (dir === "forward" && value < 3) {
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
      {/* {panels.map(panel => (
        <TabPanel value={value} index={0}>
          {panel.panel}
          Panel here
        </TabPanel>
      ))} */}
      {renderPanel({
        renderInput,
        renderRadioGrid,
        renderYesNoToggle,
        renderSelect,
        value
      })}

      {/* <PersonParentPanel
        renderInput={renderInput}
        renderSelect={renderSelect}
        renderDatePicker={renderDatePicker}
        renderRadioGrid={renderRadioGrid}
        renderYesNoToggle={renderYesNoToggle}
        value={value}
      /> */}
      {/* <VehicleParentPanel
        renderInput={renderInput}
        renderSelect={renderSelect}
        renderDatePicker={renderDatePicker}
        renderRadioGrid={renderRadioGrid}
        renderYesNoToggle={renderYesNoToggle}
        value={value}
      /> */}

      {/* {!isDesktopOrLaptop && (
        <div>
          <TabPanel value={value} index={0}>
            <IndividualPanel
              renderInput={renderInput}
              renderSelect={renderSelect}
              renderDatePicker={renderDatePicker}
              renderRadioGrid={renderRadioGrid}
            />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <StatusPanel renderInput={renderInput} />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <OccupationPanel
              renderSelect={renderSelect}
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
            />
          </TabPanel>

          <TabPanel value={value} index={3}>
            <VehicleUsePanel
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
              renderSelect={renderSelect}
            />
          </TabPanel>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <IndividualPanel
            renderInput={renderInput}
            renderSelect={renderSelect}
            renderDatePicker={renderDatePicker}
            renderRadioGrid={renderRadioGrid}
          />
          <StatusPanel renderInput={renderInput} />
          <OccupationPanel
            renderSelect={renderSelect}
            renderYesNoToggle={renderYesNoToggle}
            renderRadioGrid={renderRadioGrid}
          />
          <VehicleUsePanel
            renderYesNoToggle={renderYesNoToggle}
            renderRadioGrid={renderRadioGrid}
            renderSelect={renderSelect}
          />
        </div>
      )} */}
      {!isDesktopOrLaptop && (
        <Footer bottomNavClick={bottomNavClick.bind(this)} index={value} />
      )}
    </React.Fragment>
  );
}
