import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import IconTabs from "../elements/nav/iconTabs";
import RenderPersonParentPanel from "./personParentPanel";

import { connect } from "react-redux";
import { formActions } from "./../actions/formActions";

import { reduxForm, getFormValues } from "redux-form";

class PersonForm extends Form {
  componentDidMount() {
    // console.log(this.props.user.id);

    this.props.GetRider(this.props.user);
  }

  errorType = {};

  schema = {
    Id: Joi.number(),
    id: Joi.number(),
    "individual.id": Joi.number(),
    "individual.userId": Joi.number(),
    "individual.title": Joi.string()
      .required()
      .label("Title")
      .error(() => {
        return {
          message: "Please select a title",
        };
      }),
    "individual.firstName": Joi.string()
      .required()
      .label("First Name")
      .error(() => {
        return {
          message: "Please enter your first name",
        };
      }),
    "individual.lastName": Joi.string()
      .required()
      .label("Last Name")
      .error(() => {
        return {
          message: "Please enter your last name",
        };
      }),
    "contact.email.emailAddress": Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Email")
      .error(() => {
        return {
          message: "Please enter a valid email address",
        };
      }),
    "occupation.occupation": Joi.string()
      .required()
      .label("Occupation")
      .error(() => {
        return {
          message: "Please select an occupation from the list",
        };
      }),
    "occupation.occupationStatus": Joi.string()
      .required()
      .label("Occupation Status")
      .error(() => {
        return {
          message: "Please select an occupation status from the list",
        };
      }),
    "cycleUse.cycleUse": Joi.string()
      .required()
      .label("Vehicle Use")
      .error(() => {
        return {
          message: "Please select a vehicle use from the options provided",
        };
      }),
    "cycleUse.licenseType": Joi.string()
      .required()
      .label("License Types")
      .error(() => {
        return {
          message: "Please select an license type from the list",
        };
      }),
    "contact.address.postCode": Joi.string()
      .regex(/[A-Za-z]{1,2}[0-9]{1,2}\s*[A-Za-z]{0,1}\s*?[0-9][A-Za-z]{2}\s*/)
      .required()
      .label("Postcode")
      .error(() => {
        return {
          message: "Please enter a valid postcode",
        };
      }),
    "contact.phoneNumber.number": Joi.string()
      .regex(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
      )
      .required()
      .label("Contact Number")
      .error(() => {
        return {
          message: "Please enter a valid UK phone number",
        };
      }),
    "occupation.employmentType": Joi.string()
      .required()
      .label("Employment Type")
      .error(() => {
        return {
          message: "Please select an employment type from the options provided",
        };
      }),
    "occupation.partTime": Joi.boolean()
      .required()
      .label("Part Time")
      .error(() => {
        return {
          message: "Please state if you are a part time worker",
        };
      }),
    "cycleUse.isCommuting": Joi.boolean()
      .required()
      .label("Do you commute to work?")
      .error(() => {
        return {
          message: "Please state if you commute to work",
        };
      }),
    "cycleUse.motoringQualification": Joi.boolean()
      .required()
      .label("Motoring Qualifications")
      .error(() => {
        return {
          message: "Please state if you have any motoring qualifications",
        };
      }),
  };

  //map movie to viewmodel for view method
  mapToViewModel = (data) => {
    return {
      // _id: data._id,
      // individual_title: data.individual.individual_title,
      // genreId: movie.genre._id,
      // numberInStock: movie.numberInStock,
      // dailyRentalRate: movie.dailyRentalRate,
    };
  };

  doSubmit = () => {
    // call server

    console.log("in dosubmit");

    const userId = this.props.user.id;

    //not sure about this
    this.props.currentValues.Id = userId;
    // this.props.SaveRider(this.props.currentValues);
    const { dispatch } = this.props;

    dispatch(formActions.SaveRider(this.props.currentValues));
    //  saveMovie(this.state.data); // save movie in state
    //this.props.history.push("/vehicle");
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <IconTabs
            renderPanel={RenderPersonParentPanel}
            icons={this.props.icons}
            renderInput={this.renderInput.bind(this)}
            renderSelect={this.renderSelect.bind(this)}
            renderReactSelect={this.renderReactSelect.bind(this)}
            renderDatePicker={this.renderDatePicker.bind(this)}
            renderRadioGrid={this.renderRadioGrid.bind(this)}
            renderYesNoToggle={this.renderYesNoToggle.bind(this)}
            renderButton={this.renderButton.bind(this)}
          />
        </form>
      </div>
    );
  }
}

PersonForm = reduxForm({
  // a unique name for the form
  form: "person",
})(PersonForm);

PersonForm = connect(
  (state) => ({
    currentValues: getFormValues("person")(state),
    initialValues: state.person.items,
    user: state.authentication.user,
    users: state.authentication.users,
  }),
  { GetRider: formActions.GetRider, SaveRider: formActions.SaveRider }
)(PersonForm);

export default PersonForm;
