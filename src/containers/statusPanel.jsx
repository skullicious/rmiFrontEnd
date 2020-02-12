import React from "react";

const StatusPanel = ({ renderInput }) => {
  return (
    <div>
      {renderInput("postcode", "Postcode")}
      {renderInput("email", "Email Address")}
      {renderInput("contactNumber", "Contact Number")}
    </div>
  );
};

export default StatusPanel;
