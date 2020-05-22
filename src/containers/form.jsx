import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../elements/input/input";
import Select from "./../elements/input/select";
import DatePicker from "../elements/input/datepicker";
import RadioGrid from "../elements/input/radioGrid";
import YesNoToggle from "./../elements/input/yesNoToggle";
import ValidationTabController from "./../helpers/validationTabController";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  renderYesNoToggle(name, label) {
    const { data, errors } = this.state;

    return (
      <YesNoToggle
        name={name}
        label={label}
        value={data[name]}
        onToggle={this.handleToggle}
        error={errors[name]}
      />
    );
  }

  renderRadioGrid(name, label, options) {
    const { data, errors } = this.state;
    return (
      <RadioGrid
        name={name}
        label={label}
        value={data[name]}
        onToggle={this.handleToggle}
        options={options}
        error={errors[name]}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderDatePicker(name, label) {
    const { data, errors } = this.state;
    return (
      <DatePicker
        name={name}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        value={data[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderButton(label, target, pristine, submitting) {
    return (
      <button
        // disabled={this.validate()}
        className="btn btn-primary"
        disabled={pristine || submitting}
        value={target}
        onClick={this.handleSubmit}
      >
        {label}
      </button>
    );
  }

  handleToggle = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });

    ValidationTabController(errors);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };

    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      //allow user to enter date without validation
    }

    // if we have generated errors by doing normal submit start checking fields onChange
    else {
      const errorMessage = this.validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];
    }

    const data = { ...this.state.data };

    data[input.name] = input.value;
    this.setState({ data, errors });

    ValidationTabController(errors);
  };

  validate = () => {
    const options = { abortEarly: false };

    console.log(this.props.currentValues);
    const { error } = Joi.validate(
      this.props.currentValues,
      this.schema,
      options
    );

    console.log(error);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    ValidationTabController(errors);

    return errors;
  };

  validateProperty = ({ name, value }) => {
    //name = name.split(".").join("_"); //fix

    const obj = { [name]: value }; //build object and determine property name at runtime

    const schema = { [name]: this.schema[name] }; //use specific schema for single object

    const { error } = Joi.validate(obj, schema); // validate

    return error ? error.details[0].message : null; // feed into custom object map
  };

  handleSubmit = (e) => {
    //presubmit validation

    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
    // const username = this.username.current.value;
  };
}

export default Form;
