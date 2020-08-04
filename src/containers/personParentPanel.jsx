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
  renderSearchButton,
  renderButton,
  renderReactSelect,
  renderDatePicker,
  renderReactAddressSelect,
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
      minWidth: "276px",
      padding: "30px",
      backgroundColor: "#FFFFFF",
      margin: "5px 5px 5px 5px",
      borderRadius: "2%",
      [theme.breakpoints.up("md")]: {
        margin: "80px 80px 80px 80px",
      },
      [theme.breakpoints.up("lg")]: {
        margin: "160px 160px 160px 160px",
      },
      [theme.breakpoints.up("xl")]: {
        margin: "140px 240px 240px 240px",
      },
    },
    desktopBackground: {
      padding: "0px 120px 0px 120px",
      backgroundColor: "#ffffff",
      margin: "100px 640px 240px 640px",
      borderRadius: "2%",
      maxWidth: "100%",
      minWidth: "640px",
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
                renderDatePicker={renderDatePicker}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={classes.panelBackground}>
              <StatusPanel
                renderInput={renderInput}
                renderSearchButton={renderSearchButton}
                renderReactSelect={renderReactSelect}
                renderReactAddressSelect={renderReactAddressSelect}
              />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={classes.panelBackground}>
              <OccupationPanel
                renderReactSelect={renderReactSelect}
                renderReactSelect={renderReactSelect}
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
                renderReactSelect={renderReactSelect}
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
                renderReactSelect={renderReactSelect}
                renderRadioGrid={renderRadioGrid}
                renderDatePicker={renderDatePicker}
              />

              <StatusPanel
                renderInput={renderInput}
                renderSearchButton={renderSearchButton}
                renderReactSelect={renderReactSelect}
                renderReactAddressSelect={renderReactAddressSelect}
              />
              <OccupationPanel
                renderReactSelect={renderReactSelect}
                renderReactSelect={renderReactSelect}
                renderYesNoToggle={renderYesNoToggle}
                renderRadioGrid={renderRadioGrid}
              />
              <VehicleUsePanel
                renderYesNoToggle={renderYesNoToggle}
                renderRadioGrid={renderRadioGrid}
                renderReactSelect={renderReactSelect}
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
