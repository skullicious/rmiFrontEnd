// import React from "react";

// const RadioGrid = ({ name, label, options, error, ...rest }) => {
//   console.log(options);
//   return (
//     <div className="container">
//       <div className="form-group">
//         <label htmlFor={name}>{label}</label>
//         <input
//           type="text"
//           name={name}
//           value=""
//           id={name}
//           {...rest}
//           className="form-control"
//           hidden={true}
//         ></input>

//         <div className="k-form-field">
//           {options.map(option => (
//             <label>
//               <input
//                 type="radio"
//                 name="radio"
//                 value={option.name}
//                 key={option._id}
//                 className="k-radio"
//                 // onChange={onChange}
//               ></input>
//               <span className="multichoiceboxes">{option.name}</span>
//             </label>
//           ))}
//           {error && <div className="alert alert-danger">{error}</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RadioGrid;

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

// const [getState] = React.useState(value);

const RadioGrid = ({ name, label, options, onToggle, value }) => {
  // const radioButtonClicked = event => {
  //   console.log(event);
  //   onToggle(event);
  // };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        value={value}
        onChange={onToggle}
        aria-label={label}
        name={name}
      >
        {options.map(option => (
          <FormControlLabel
            value={option._id}
            control={<StyledRadio />}
            label={option.name}
            name={name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGrid;
