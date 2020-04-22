import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  icon: {
    border: "1px solid #c7c7c7",
    borderRadius: "5%",
    minHeight: "64px",
    minWidth: "62px",
    width: "100%",
    fontSize: "13px",
    fontWeight: "bold",
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    color: "white",
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
  },

  labelFocused: {
    color: "#212529 !important",
  },
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

const RadioGrid = ({ name, label, options, onToggle, value, error }) => {
  const classes = useStyles();

  // //Why do I need to string this
  // const reactOptions = options.map(function(row) {
  //   return { _id: row.titleId.toString(), name: row.name };
  // });

  return (
    <React.Fragment>
      <div className={"form-group row"}>
        <label className="col-sm-6">{label}</label>

        <label className="col-sm-6">
          <RadioGroup
            value={value}
            onChange={onToggle}
            aria-label={label}
            name={name}
          >
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              {options.map((option) => (
                <Grid className={classes.gridItem} item xs>
                  <FormControlLabel
                    className={classes.formControlLabel}
                    key={option._id}
                    value={option._id}
                    control={<StyledRadio label={option.name} />}
                    name={name}
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
        </label>

        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default RadioGrid;
