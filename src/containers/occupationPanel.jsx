import React, { useState, useEffect } from "react";
import {
  OCCUPATIONS_API_URL,
  EMPLOYMENTTYPES_API_URL,
  OCCUPATIONSTATUS_API_URL
} from "../services/apiService";

const OccupationPanel = ({
  renderSelect,
  renderYesNoToggle,
  renderRadioGrid
}) => {
  const [hasError, setErrors] = useState(false);
  const [occStatus, setoccStatus] = useState([]);
  const [occs, setoccs] = useState([]);
  const [ets, setets] = useState([]);
  //USE EFFECTS USED IN PLACE OF COMPONENT DID MOUNT AS SIDE EFFECT IN FUNCTION COMPONENT

  async function fetchData() {
    const occStatusRes = await fetch(OCCUPATIONSTATUS_API_URL);
    occStatusRes
      .json()
      .then(res => setoccStatus(res))
      .catch(err => setErrors(err));

    const occsRes = await fetch(OCCUPATIONS_API_URL);
    occsRes
      .json()
      .then(res => setoccs(res))
      .catch(err => setErrors(err));

    const etsRes = await fetch(EMPLOYMENTTYPES_API_URL);
    etsRes
      .json()
      .then(res => setets(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {renderSelect("occupation_occupation", "Occupation", occs)}
      {renderSelect(
        "occupation_occupationStatus",
        "Occupation Status",
        occStatus
      )}
      {renderYesNoToggle("occupation_partTime", "Part Time?")}
      <br />
      {renderRadioGrid("occupation_employmentType", "Employment Type", ets)}
    </div>
  );
};

export default OccupationPanel;
