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
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1
  },
  icon: {
    border: "1px solid #c7c7c7",
    borderRadius: "5%",
    padding: "5px 10px",
    textAlign: "center",
    margin: "0",
    backgroundColor: "white",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    display: "flex",
    minHeight: "52px",
    letterSpacing: "initial",
    cursor: "pointer",
    fontWeight: "bold",
    width: "130px",
    height: "50px"
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    color: "white"
  },
  radioGroupContainer: {
    display: "block"
  },
  formControlLabel: {
    marginLeft: "0px",
    marginRight: "0px",
    "&:nth-of-type(2n + 1)": {
      paddingRight: "4px",
      paddingLeft: "0"
    },
    "&:nth-of-type(2n + 2)": {
      paddingRight: "0",
      paddingLeft: "4px"
    }
  },
  formLabel: {
    color: "#212529"
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const { label } = props;

  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={
        <span className={clsx(classes.icon, classes.checkedIcon)}>{label}</span>
      }
      icon={
        <span label={label} className={classes.icon}>
          {label}
        </span>
      }
      {...props}
    />
  );
}

// const [getState] = React.useState(value);

const RadioGrid = ({ name, label, options, onToggle, value }) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={"form-group"}>
      <FormLabel className={classes.formLabel} component="legend">
        {label}
      </FormLabel>

      <RadioGroup
        className={clsx(classes.radioGroupContainer)}
        value={value}
        onChange={onToggle}
        aria-label={label}
        name={name}
      >
        {options.map(option => (
          <FormControlLabel
            className={classes.formControlLabel}
            key={option._id}
            value={option._id}
            control={<StyledRadio label={option.name} />}
            name={name}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGrid;
