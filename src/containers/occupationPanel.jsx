import React from "react";
import { getOccs, getOccStatus } from "../services/occupationService";

const OccupationPanel = ({ renderSelect }) => {
  const occs = getOccs();
  const occStatus = getOccStatus();
  return (
    <div>
      {renderSelect("occupation", "Occupation", occs)}
      {renderSelect("occStatus", "Occupation Status", occStatus)}
    </div>
  );
};

export default OccupationPanel;
