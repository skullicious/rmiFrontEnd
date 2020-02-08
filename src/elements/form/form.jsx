// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./input";
// import Select from "./select";

// class Form extends Component {
//   state = {
//     data: {},
//     errors: {}
//   };

//   renderInput(name, label, type = "text") {
//     const { data, errors } = this.state;
//     return (
//       <Input
//         type={type}
//         name={name}
//         value={data[name]}
//         label={label}
//         onChange={this.handleChange}
//         error={errors[name]}
//       />
//     );
//   }

//   renderSelect(name, label, options) {
//     const { data, errors } = this.state;
//     return (
//       <Select
//         name={name}
//         value={data[name]}
//         label={label}
//         options={options}
//         onChange={this.handleChange}
//         error={errors[name]}
//       />
//     );
//   }

//   renderButton(label) {
//     return (
//       <button
//         disabled={this.validate()}
//         className="btn btn-primary"
//         // onClick={() => history.push("movies")}
//       >
//         {label}
//       </button>
//     );
//   }

//   handleChange = ({ currentTarget: input }) => {

//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;
//     this.setState({ data, errors });
//   };

//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(this.state.data, this.schema, options);

//     if (!error) return null;

//     const errors = {};

//     for (let item of error.details) errors[item.path[0]] = item.message;

//     return errors;

//     // const errors = {};
//     // const { account } = this.state;
//     // if (account.username.trim() === "")
//     //   errors.username = "username is required";
//     // if (account.password.trim() === "")
//     //   errors.password = "password is required";
//     // return Object.keys(errors).length === 0 ? null : errors;
//   };

//   validateProperty = ({ name, value }) => {
//     const obj = { [name]: value }; //build object and determine property name at runtime
//     const schema = { [name]: this.schema[name] }; //use specific schema for single object
//     const { error } = Joi.validate(obj, schema); // validate
//     return error ? error.details[0].message : null; // feed into custom object map

//     // if (name === "username") {
//     //   if (value.trim() === "") return "Username is requred";
//     // }
//   };

//   handleSubmit = e => {
//     //presubmit validation

//     e.preventDefault();

//     const errors = this.validate();
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     this.doSubmit();
//     // const username = this.username.current.value;
//   };
// }

// export default Form;
