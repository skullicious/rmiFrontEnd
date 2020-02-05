import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Android from "@material-ui/icons/Android";
import Paper from "@material-ui/core/Paper/Paper";
import IndividualPanel from "./../../containers/individualPanel";
import OccupationPanel from "../../containers/occupationPanel";
import StatusPanel from "../../containers/statusPanel";
import VehicleUsePanel from "../../containers/vehicleUsePanel";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 3000,
    minWidth: 320
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<PhoneIcon />} aria-label="individualPanel" />
          <Tab icon={<FavoriteIcon />} aria-label="statusPanel" />
          <Tab icon={<PersonPinIcon />} aria-label="occupationPanel" />
          <Tab icon={<Android />} aria-label="vehicleUsePanel" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <IndividualPanel />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <StatusPanel />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <OccupationPanel />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <VehicleUsePanel />
      </TabPanel>
    </div>
  );
}
