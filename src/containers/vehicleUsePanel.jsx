import React, { useState, useEffect } from "react";
import {
  getVehicleUses,
  getLicenseTypes,
} from "./../services/vehicleUseService";
import {
  VEHICLEUSES_API_URL,
  LICENSETYPES_API_URL,
} from "./../services/apiService";

const VehicleUsePanel = ({
  renderRadioGrid,
  renderSelect,
  renderYesNoToggle,
  renderButton,
}) => {
  const [hasError, setErrors] = useState(false);
  const [vehicleUses, setVehicleUses] = useState([]);
  const [licenseTypes, setLicenseTypes] = useState([]);

  async function fetchData() {
    const vehicleUsesRes = await fetch(VEHICLEUSES_API_URL);
    vehicleUsesRes
      .json()
      .then((res) => setVehicleUses(res))
      .catch((err) => setErrors(err));

    const licenseTypesRes = await fetch(LICENSETYPES_API_URL);
    licenseTypesRes
      .json()
      .then((res) => setLicenseTypes(res))
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {renderRadioGrid("vehicleUse_vehicleUse", "Vehicle Use", vehicleUses)}
      {renderSelect("vehicleUse_licenseType", "License Type", licenseTypes)}

      {renderYesNoToggle(
        "vehicleUse_licenseRestriction",
        "Do you have any license restrictions?"
      )}
      {renderYesNoToggle(
        "vehicleUse_motoringQualification",
        "Do you have any motoring qualifications?"
      )}
      <br />
      {renderButton("Next")}
    </div>
  );
};

export default VehicleUsePanel;
