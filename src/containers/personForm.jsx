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

  schema = {
    _id: Joi.string(),
    individual_title: Joi.string()
      .required()
      .label("Title"),
    individual_firstName: Joi.string()
      .required()
      .label("First Name"),
    individual_lastName: Joi.string()
      .required()
      .label("Last Name"),
    status_email: Joi.string()
      .required()
      .label("Email"),
    occupation_occupation: Joi.string()
      .required()
      .label("Occupation"),
    occupation_occupationStatus: Joi.string()
      .required()
      .label("Occupation Status"),
    vehicleUse_vehicleUse: Joi.string()
      .required()
      .label("Vehicle Use"),
    vehicleUse_licenseType: Joi.string()
      .required()
      .label("License Types"),
    status_postcode: Joi.string()
      .required()
      .label("Postcode"),
    status_contactNumber: Joi.string()
      .required()
      .label("Contact Number"),
    occupation_employmentType: Joi.string()
      .required()
      .label("Employment Type"),
    occupation_partTime: Joi.boolean()
      .required()
      .label("Part Time"),
    vehicleUse_licenseRestriction: Joi.boolean()
      .required()
      .label("License Restrictions"),
    vehicleUse_motoringQualification: Joi.boolean()
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
