import React from "react";
import { getOwners } from "../../services/vehicleService";

const OwnerKeeper = ({ renderRadioGrid, renderYesNoToggle }) => {
  const owners = getOwners();
  return (
    <div>
      {renderRadioGrid("owner", "Who is the registered Owner?", owners)}
      {renderYesNoToggle(
        "isOwnerKeeper",
        "Is the Registered Keeper the same as the Owner"
      )}
    </div>
  );
};

export default OwnerKeeper;
