import React from "react";

const StatusPanel = ({ renderInput }) => {
  return (
    <div>
      {renderInput("status_postcode", "Postcode")}
      {renderInput("status_email", "Email Address")}
      {renderInput("status_contactNumber", "Contact Number")}
    </div>
  );
};

export default StatusPanel;
