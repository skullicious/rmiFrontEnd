import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import { Field } from "redux-form";

const withStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    border: "2px solid #AEAEAE",
    borderRadius: "25px",
    minHeight: "50px",

    minWidth: "90px",
    width: "100%",
    fontSize: "14px",
    // fontWeight: "bold",
    paddingTop: "13px",
  },
  checkedIcon: {
    paddingTop: "13px",
    borderColor: "#4EB9A9",
    borderWidth: "3px",
    color: "#000000",
  },
  formControlLabel: {
    margin: "0",
    width: "100%",
  },

  gridItem: {
    "&:nth-of-type(2n+1)": {},
    "&:nth-of-type(2n+2)": {},
  },

  formLabel: {
    color: "#212529",
    "&:hover": {
      backgroundColor: "red !important",
    },
  },

  labelFocused: {
    color: "#212529 !important",
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const { label } = props;

  const classes = withStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple={true}
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

const RadioGrid = ({ name, label, options, onToggle, value, error }) => {
  const classes = withStyles();

  return (
    <React.Fragment>
      <Field
        name={name}
        component={renderField}
        options={options}
        onChange={onToggle}
        error={error}
        label={label}
      />
    </React.Fragment>
  );
};

const renderField = (field) => {
  const classes = withStyles();

  return (
    <div className={"form-group row"}>
      <label className="col-sm-6">{field.label}</label>
      <label className={"col-sm-6"}>
        <RadioGroup
          value={field.input.value.toString()}
          onChange={field.input.onChange}
          aria-label={field.input.label}
          name={field.input.name}
        >
          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            {field.options.map((option) => (
              <Grid className={classes.gridItem} item xs>
                <FormControlLabel
                  className={classes.formControlLabel}
                  key={option._id}
                  value={option._id}
                  control={<StyledRadio label={option.name} />}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </label>

      {field.error && <div className="alert alert-danger">{field.error}</div>}
    </div>
  );
};

export default RadioGrid;
