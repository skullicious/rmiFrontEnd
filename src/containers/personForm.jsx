import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import IconTabs from "../elements/nav/iconTabs";
import RenderPersonParentPanel from "./personParentPanel";

class PersonForm extends Form {
  state = {
    data: {
      title: "",
      firstName: "",
      lastName: "",
      occupation: "",
      occupationStatus: "",
      regNumber: "",
      isMarried: "",
      isOwnHouse: "",
      hasLicense: "",
      hasOwnCar: "",
      licenseType: "",
      vehicleUse: "",
      motoringQualification: "",
      postcode: "",
      email: "",
      contactNumber: "",
      employmentType: "",
      partTime: ""
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

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    firstName: Joi.string()
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .required()
      .label("Last Name"),
    email: Joi.string()
      .required()
      .label("Email"),
    occupation: Joi.string()
      .required()
      .label("Occupation"),
    occStatus: Joi.string()
      .required()
      .label("Occupation Status"),
    regNumber: Joi.string()
      .required()
      .label("Registration Number"),
    isMarried: Joi.boolean()
      .required()
      .label("Marriage Status"),
    vehicleUse: Joi.string()
      .required()
      .label("Vehicle Use"),
    licenseType: Joi.string()
      .required()
      .label("License Types"),
    postcode: Joi.string()
      .required()
      .label("Postcode"),
    contactNumber: Joi.string()
      .required()
      .label("Contact Number"),
    employmentType: Joi.string()
      .required()
      .label("Employment Type"),
    partTime: Joi.boolean()
      .required()
      .label("Part Time"),
    licenseRestrictions: Joi.boolean()
      .required()
      .label("License Restrictions"),
    motoringQualifications: Joi.boolean()
      .required()
      .label("Motoring Qualifications")
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
