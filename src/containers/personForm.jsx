import React from "react";
import Joi from "joi-browser";
import Form from "./form";
//import { getGenres } from "./services/fakeGenreService";
//import { saveMovie, getMovie } from "./services/fakeMovieService";
import IconTabs from "../elements/nav/iconTabs";
import { getOccs } from "../services/occupationService";
import { getTitles } from "../services/titleService";

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
      hasOwnCar: ""
    },
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
      .label("Marriage Status")
  };

  // username = React.createRef();
  componentDidMount() {
    const occupations = getOccs(); //gen genres for dropdown
    const titles = getTitles();
    this.setState({ occupations, titles }); //set empty genres to result of call

    console.log(titles);
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

    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <IconTabs
            renderInput={this.renderInput.bind(this)}
            renderSelect={this.renderSelect.bind(this)}
            renderDatePicker={this.renderDatePicker.bind(this)}
            renderRadioGrid={this.renderRadioGrid.bind(this)}
            renderYesNoToggle={this.renderYesNoToggle.bind(this)}
          />
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default PersonForm;
