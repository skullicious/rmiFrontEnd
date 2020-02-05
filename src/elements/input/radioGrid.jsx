import React, { Component } from "react";

const RadioGrid = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          name={name}
          value=""
          id={name}
          {...rest}
          className="form-control"
          hidden="true"
        ></input>

        <div className="k-form-field">
          {options.map(option => (
            <label>
              <input
                type="radio"
                name="radio"
                value={option.title}
                key={option._id}
                className="k-radio"
                //   onChange={this.handleChange}
              ></input>
              <span className="multichoiceboxes">{option.title}</span>
            </label>
          ))}
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default RadioGrid;
