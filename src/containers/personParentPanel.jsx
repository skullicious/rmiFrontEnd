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
  renderReactSelect,
  value,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: "100px",
    },
    panelBackground: {
      padding: "30px",
      backgroundColor: "#FFFFFF",
      margin: "5px 5px 5px 5px",
      borderRadius: "2%",
    },
    desktopBackground: {
      padding: "30px",
      backgroundColor: "#ffffff",
      margin: "40px 40px 40px 40px",
      borderRadius: "2%",
      maxWidth: "100%",
    },
    flexFix: {
      display: "block",
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      {!isDesktopOrLaptop && (
        <div className={classes.root}>
          <TabPanel value={value} index={0}>
            <div className={classes.panelBackground}>
              <IndividualPanel
                renderInput={renderInput}
                renderSelect={renderSelect}
                renderRadioGrid={renderRadioGrid}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={classes.panelBackground}>
              <StatusPanel renderInput={renderInput} />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={classes.panelBackground}>
              <OccupationPanel
                renderReactSelect={renderReactSelect}
                renderSelect={renderSelect}
                renderYesNoToggle={renderYesNoToggle}
                renderRadioGrid={renderRadioGrid}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className={classes.panelBackground}>
              <VehicleUsePanel
                renderYesNoToggle={renderYesNoToggle}
                renderRadioGrid={renderRadioGrid}
                renderSelect={renderSelect}
                renderButton={renderButton}
              />
            </div>
          </TabPanel>
          <br />
          <br />
        </div>
      )}

      <br />
      {isDesktopOrLaptop && (
        <Grid
          className={classes.flexFix}
          container

          // direction="row"
          // justify="space-between"
          // alignItems="center"
        >
          <div className={classes.desktopBackground}>
            <div className={classes.root}>
              <IndividualPanel
                renderInput={renderInput}
                renderSelect={renderSelect}
                renderRadioGrid={renderRadioGrid}
              />

              <StatusPanel renderInput={renderInput} />
              <OccupationPanel
                renderReactSelect={renderReactSelect}
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
            </div>
            <br />
            <br />
          </div>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default RenderPersonParentPanel;
