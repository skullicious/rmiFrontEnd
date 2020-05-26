import React from "react";

const StatusPanel = ({ renderInput }) => {
  return (
    <div>
      {renderInput("status.postcode", "Postcode")}
      {renderInput("status.email", "Email Address")}
      {renderInput("status.contactNumber", "Contact Number")}
    </div>
  );
};

export default StatusPanel;
