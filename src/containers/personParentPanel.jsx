import React from "react";
import IndividualPanel from "./../containers/individualPanel";
import OccupationPanel from "../containers/occupationPanel";
import StatusPanel from "../containers/statusPanel";
import VehicleUsePanel from "../containers/vehicleUsePanel";
import TabPanel from "../elements/nav/tabPanel";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const RenderPersonParentPanel = ({
  renderInput,
  renderSelect,
  renderYesNoToggle,
  renderRadioGrid,
  renderButton,
  value
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });

  const useStyles = makeStyles(theme => ({
    root: {
      paddingTop: "100px",

      width: "100%"
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      {!isDesktopOrLaptop && (
        <div className={classes.root}>
          <TabPanel value={value} index={0}>
            <IndividualPanel
              renderInput={renderInput}
              renderSelect={renderSelect}
              renderRadioGrid={renderRadioGrid}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <StatusPanel renderInput={renderInput} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <OccupationPanel
              renderSelect={renderSelect}
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <VehicleUsePanel
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
              renderSelect={renderSelect}
              renderButton={renderButton}
            />
          </TabPanel>
          <br />
          <br />
        </div>
      )}

      <br />
      {isDesktopOrLaptop && (
        <Grid
          container

          // direction="row"
          // justify="space-between"
          // alignItems="center"
        >
          <div className={classes.root}>
            <IndividualPanel
              renderInput={renderInput}
              renderSelect={renderSelect}
              renderRadioGrid={renderRadioGrid}
            />
            <StatusPanel renderInput={renderInput} />
            <OccupationPanel
              renderSelect={renderSelect}
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
            />
            <VehicleUsePanel
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
              renderSelect={renderSelect}
              renderButton={renderButton}
            />
            <br />
            <br />
          </div>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default RenderPersonParentPanel;
