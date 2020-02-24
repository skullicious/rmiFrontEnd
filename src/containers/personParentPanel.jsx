import React from "react";
import IndividualPanel from "./../containers/individualPanel";
import OccupationPanel from "../containers/occupationPanel";
import StatusPanel from "../containers/statusPanel";
import VehicleUsePanel from "../containers/vehicleUsePanel";
import TabPanel from "../elements/nav/tabPanel";
import { useMediaQuery } from "react-responsive";

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

  return (
    <React.Fragment>
      {!isDesktopOrLaptop && (
        <div>
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
            />
          </TabPanel>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
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
          />
        </div>
      )}

      {renderButton("Next")}
    </React.Fragment>
  );
};

export default RenderPersonParentPanel;
