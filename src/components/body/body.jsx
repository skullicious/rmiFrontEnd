import React from "react";
import PersonForm from "../../containers/personForm";
import { VehicleForm } from "./../../containers";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import Work from "@material-ui/icons/Work";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import Build from "@material-ui/icons/Build";
import Info from "@material-ui/icons/Info";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";

const PersonBase = (props) => {
  const icons = [
    { tabIcon: <Person />, ariaLabel: "individualPanel" },
    { tabIcon: <Home />, ariaLabel: "statusPanel" },
    { tabIcon: <Work />, ariaLabel: "occupationPanel" },
    { tabIcon: <DirectionsCar />, ariaLabel: "vehicleUsePanel" },
  ];

  return <PersonForm icons={icons} history={props.history} />;
};

const VehicleBase = (props) => {
  const icons = [
    { tabIcon: <DirectionsCar />, ariaLabel: "proposedPanel" },
    { tabIcon: <PeopleAlt />, ariaLabel: "ownerKeeperPanel" },
    { tabIcon: <Build />, ariaLabel: "modSecPanel" },
    { tabIcon: <Info />, ariaLabel: "particularsPanel" },
    { tabIcon: <EmojiTransportationIcon />, ariaLabel: "locationPanel" },
  ];

  return <VehicleForm icons={icons} history={props.history} />;
};

export { PersonBase, VehicleBase };
