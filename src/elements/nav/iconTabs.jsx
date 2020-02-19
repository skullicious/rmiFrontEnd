import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper/Paper";
import IndividualPanel from "./../../containers/individualPanel";
import OccupationPanel from "../../containers/occupationPanel";
import StatusPanel from "../../containers/statusPanel";
import VehicleUsePanel from "../../containers/vehicleUsePanel";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer/footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

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
  renderDatePicker,
  renderRadioGrid,
  renderYesNoToggle,
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

              {/* <IconList options={icons} /> */}
              {/* <Tab icon={<Person />} aria-label="individualPanel" />
              <Tab icon={<Home />} aria-label="statusPanel" />
              <Tab icon={<Work />} aria-label="occupationPanel" />
              <Tab icon={<DirectionsCar />} aria-label="vehicleUsePanel" /> */}
            </Tabs>
          )}
        </Paper>
      </div>

      {!isDesktopOrLaptop && (
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
      )}

      {!isDesktopOrLaptop && (
        <Footer bottomNavClick={bottomNavClick.bind(this)} index={value} />
      )}
    </React.Fragment>
  );
}
