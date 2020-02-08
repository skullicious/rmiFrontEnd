import React from "react";

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
          hidden={true}
        ></input>

        <div className="k-form-field">
          {options.map(option => (
            <label>
              <input
                type="radio"
                name="radio"
                value={option.name}
                key={option._id}
                className="k-radio"
                // onChange={onChange}
              ></input>
              <span className="multichoiceboxes">{option.name}</span>
            </label>
          ))}
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default RadioGrid;
