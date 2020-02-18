import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
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
import { useMediaQuery } from "react-responsive";
import SimpleTabs from "./mobileTabs";

export default function NavMaster(props) {
  const { children, value, index, ...other } = props;

  return (
    <React.Fragment>
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

      <SimpleTabs />
    </React.Fragment>
  );
}

NavMaster.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
