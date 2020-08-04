import React, { useEffect } from "react";
import { connect } from "react-redux";
import StateManager from "react-select";
import { fetchData } from "../actions/testActions";
import { FETCH_ADDRESS } from "../actions/types";
import { ADDRESS_API_URL } from "../services/apiService";

import { fetchAddress } from "./../actions/testActions";

const StatusPanel = ({
  renderInput,
  renderSearchButton,
  renderReactSelect,
  renderReactAddressSelect,
  addresses,
  dispatch,
}) => {
  // useEffect(() => {
  //   fetchAddress(ADDRESS_API_URL, FETCH_ADDRESS);
  // }, []);

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

      {/* {renderInput(
        "contact.address.ConfirmedAddress",
        "Confirmed Address",
        "contact.address.confirmedAddress"
      )} */}

      {renderSearchButton("Search for Address")}

      {/* {renderReactSelect(
        "contact.address.confirmedAddress",
        "Address",
        addresses
      )} */}

      {renderInput("contact.address.confirmedAddress", "confirmed Address")}

      {renderReactAddressSelect(
        "contact.address.addresses",
        "Address",
        addresses
      )}

      <button
        onClick={() =>
          dispatch(fetchAddress(ADDRESS_API_URL + "ub68sx", FETCH_ADDRESS))
        }
      ></button>

      {/* <button onClick={() => dispatch({ type: "FETCH_ADDRESS" })}>-</button> */}

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

const mapStateToProps = (state) => ({
  addresses: state.data.address,
});

export default connect(mapStateToProps)(StatusPanel);

// export default StatusPanel;
