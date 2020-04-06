import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import IconTabs from "../elements/nav/iconTabs";
import RenderPersonParentPanel from "./personParentPanel";

class PersonForm extends Form {
  state = {
    data: {
      individual_title: "",
      individual_firstName: "",
      individual_lastName: "",
      occupation_occupation: "",
      occupation_occupationStatus: "",
      occupation_employmentType: "",
      occupation_partTime: "",
      vehicleUse_licenseRestriction: "",
      vehicleUse_licenseType: "",
      vehicleUse_vehicleUse: "",
      vehicleUse_motoringQualification: "",
      status_postcode: "",
      status_email: "",
      status_contactNumber: ""
    },
    employmentTypes: [],
    licenseTypes: [],
    licenseRestrictions: [],
    vehicleUses: [],
    genres: [],
    occupations: [],
    titles: [],
    errors: {}
  };

  errorType = {};

  schema = {
    _id: Joi.string(),
    individual_title: Joi.string()
      .required()
      .label("Title")
      .error(() => {
        return {
          message: "Please select a title"
        };
      }),
    individual_firstName: Joi.string()
      .required()
      .label("First Name")
      .error(() => {
        return {
          message: "Please enter your first name"
        };
      }),
    individual_lastName: Joi.string()
      .required()
      .label("Last Name")
      .error(() => {
        return {
          message: "Please enter your last name"
        };
      }),
    status_email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Email")
      .error(() => {
        return {
          message: "Please enter a valid email address"
        };
      }),
    occupation_occupation: Joi.string()
      .required()
      .label("Occupation")
      .error(() => {
        return {
          message: "Please select an occupation from the list"
        };
      }),
    occupation_occupationStatus: Joi.string()
      .required()
      .label("Occupation Status")
      .error(() => {
        return {
          message: "Please select an occupation status from the list"
        };
      }),
    vehicleUse_vehicleUse: Joi.string()
      .required()
      .label("Vehicle Use")
      .error(() => {
        return {
          message: "Please select a vehicle use from the options provided"
        };
      }),
    vehicleUse_licenseType: Joi.string()
      .required()
      .label("License Types")
      .error(() => {
        return {
          message: "Please select an license type from the list"
        };
      }),

    status_postcode: Joi.string()
      .regex(/[A-Za-z]{1,2}[0-9]{1,2}\s*[A-Za-z]{0,1}\s*?[0-9][A-Za-z]{2}\s*/)
      .required()
      .label("Postcode")
      .error(() => {
        return {
          message: "Please enter a valid postcode"
        };
      }),
    status_contactNumber: Joi.string()
      .regex(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
      )
      .required()
      .label("Contact Number")
      .error(() => {
        return {
          message: "Please enter a valid UK phone number"
        };
      }),
    occupation_employmentType: Joi.string()
      .required()
      .label("Employment Type")
      .error(() => {
        return {
          message: "Please select an employment type from the options provided"
        };
      }),
    occupation_partTime: Joi.boolean()
      .required()
      .label("Part Time")
      .error(() => {
        return {
          message: "Please state if you are a part time worker"
        };
      }),
    vehicleUse_licenseRestriction: Joi.boolean()
      .required()
      .label("License Restrictions")
      .error(() => {
        return {
          message: "Please state if you have any license restrictions"
        };
      }),
    vehicleUse_motoringQualification: Joi.boolean()
      .required()
      .label("Motoring Qualifications")
      .error(() => {
        return {
          message: "Please state if you have any motoring qualifications"
        };
      })
  };

  // username = React.createRef();
  componentDidMount() {
    // const occupations = getOccs(); //gen genres for dropdown
    // const titles = getTitles();
    // const vehicleUses = getVehicleUses();
    // const licenseTypes = getLicenseTypes();
    // const employmentTypes = getEmploymentTypes();
    // this.setState({
    //   occupations,
    //   titles,
    //   vehicleUses,
    //   licenseTypes,
    //   employmentTypes
    // });
    //
    //
    //set empty genres to result of call
    ////*** */
    // const movieId = this.props.match.params.id; //set movie id to the paramater
    // if (movieId === "new") return; // if movie id is new return to empty page to allow details to be added
    //else
    // const movie = getMovie(movieId); //get movie based on id in paramater.
    // if (!movie) return this.props.history.replace("/not-found"); //if not found redirect to error
    // this.setState({ data: this.mapToViewModel(movie) }); //if found map results from getMovie to a viewModel that fits with our local state
    ///*** */
  }

  //map movie to viewmodel for view method
  mapToViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };

  doSubmit = () => {
    // call server
    //  saveMovie(this.state.data); // save movie in state
    this.props.history.push("/vehicle");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <IconTabs
            renderPanel={RenderPersonParentPanel}
            icons={this.props.icons}
            renderInput={this.renderInput.bind(this)}
            renderSelect={this.renderSelect.bind(this)}
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

export default PersonForm;
