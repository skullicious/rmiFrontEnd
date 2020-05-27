import React from "react";

const StatusPanel = ({ renderInput }) => {
  return (
    <div>
      {renderInput("contact.address.postCode", "Postcode")}
      {renderInput("contact.Email.EmailAddress", "Email Address")}
      {renderInput("status.contactNumber", "Contact Number")}
    </div>
  );
};

export default StatusPanel;
