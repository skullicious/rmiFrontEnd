import React from "react";

const StatusPanel = ({ renderInput }) => {
  return (
    <div>
      <input
        type="hidden"
        id="contact.address.id"
        name="contact.address.id"
        value=""
      ></input>
      {renderInput("contact.address.postCode", "Postcode")}
      <input
        type="hidden"
        id="contact.email.emailAddress.EmailId"
        name="contact.email.emailAddress.Email.Id"
        value=""
      ></input>
      {renderInput("contact.email.emailAddress", "Email Address")}

      {renderInput("contact.phoneNumber.number", "Contact Number")}
    </div>
  );
};

export default StatusPanel;
