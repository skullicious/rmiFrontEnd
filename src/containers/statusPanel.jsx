import React from "react";
import StateManager from "react-select";

const StatusPanel = ({ renderInput, renderSearchButton }) => {
  return (
    <div>
      <input
        type="hidden"
        id="contact.address.id"
        name="contact.address.id"
        value=""
      ></input>
      {renderInput("contact.address.postCode", "Postcode")}

      {renderInput(
        "contact.address.addressLine1",
        "House Name, Number",
        "contact.address.confirmedAddress",
        true
      )}
      {renderInput(
        "contact.address.addressLine2",
        "Street",
        "contact.address.confirmedAddress",
        true
      )}
      {renderInput(
        "contact.address.addressLine3",
        "Town",
        "contact.address.confirmedAddress",
        true
      )}
      {renderInput(
        "contact.address.addressLine4",
        "City",
        "contact.address.confirmedAddress",
        true
      )}
      {renderInput(
        "contact.address.addressLine5",
        "Country",
        "contact.address.confirmedAddress",
        true
      )}

      {renderInput(
        "contact.address.ConfirmedAddress",
        "Confirmed Address",
        "contact.address.confirmedAddress"
      )}
      {renderSearchButton("Search for Address")}

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
