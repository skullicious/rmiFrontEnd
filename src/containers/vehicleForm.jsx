import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import IconTabs from "../elements/nav/iconTabs";

import RenderVehicleParentPanel from "./../containers/vehiclePanels/vehicleParentPanel";
import { authentication } from "./../Reducers/AuthenticationReducer";
import { users } from "./../Reducers/UsersReducer";

import { connect } from "react-redux";
import { formActions } from "./../actions/formActions";

class VehicleForm extends Form {
  // state = {
  //   data: {
  //     proposed_title: "",
  //     proposed_firstName: "",
  //     proposed_lastName: "",
  //     occupation: "",
  //     occupationStatus: "",
  //     regNumber: "",
  //     isMarried: "",
  //     isOwnHouse: "",
  //     hasLicense: "",
  //     hasOwnCar: "",
  //     licenseType: "",
  //     vehicleUse: "",
  //     motoringQualification: "",
  //     postcode: "",
  //     email: "",
  //     contactNumber: "",
  //     employmentType: "",
  //   },
  //   employmentTypes: [],
  //   licenseTypes: [],
  //   licenseRestrictions: [],
  //   vehicleUses: [],
  //   genres: [],
  //   occupations: [],
  //   titles: [],
  //   errors: {},
  // };

  schema = {
    _id: Joi.string(),
    regNoKnown: Joi.boolean().required().label("Registration known"),
    regNumber: Joi.string().required().label("Registration number"),
    vehicle: Joi.string().required().label("Proposed Vehicle"),
    yearOfMake: Joi.string().required().label("Year of make"),
    owner: Joi.string().required().label("Registered Owner"),
    isOwnerKeeper: Joi.boolean().required().label("Registered Keeper"),
    hasModification: Joi.boolean().required().label("Modifications"),
    hasSecurityDevice: Joi.boolean().required().label("Security Device"),
    isPurchased: Joi.boolean().required().label("Purchased"),
    vehicleValue: Joi.string().required().label("Vehicle Value"),
    annualMileage: Joi.string().required().label("Annual Mileage"),
    currentMileage: Joi.string().required().label("Current Mileage"),
    dayLocation: Joi.string().required().label("Daytime Location"),
    isKeptAtHome: Joi.boolean().required().label("Kept At Home"),
  };

  // username = React.createRef();
  componentDidMount() {
    // const occupations = getOccs(); //gen genres for dropdown
    // const titles = getTitles();
    // const vehicleUses = getVehicleUses();
    // const licenseTypes = getLicenseTypes();
    // this.setState({ occupations, titles, vehicleUses, licenseTypes }); //set empty genres to result of call
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
  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  doSubmit = () => {
    // call server
    //  saveMovie(this.state.data); // save movie in state
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <IconTabs
            renderPanel={RenderVehicleParentPanel}
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

function mapState(state) {
  const { users, authentication, vehicle } = state;

  const { user } = authentication;

  return {
    user,
    users,
    vehicle,
  };
}

const actionCreators = {
  GetPerson: formActions.GetPerson,
};

const connectedVehicleForm = connect(mapState, actionCreators)(VehicleForm);
export { connectedVehicleForm as VehicleForm };

// export default VehicleForm;
