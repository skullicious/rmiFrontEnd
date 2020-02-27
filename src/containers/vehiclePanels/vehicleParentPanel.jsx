import React from "react";
import ProposedPanel from "./../vehiclePanels/proposedPanel";
import OwnerKeeperPanel from "./../vehiclePanels/ownerKeeperPanel";
import ModSecPanel from "./../vehiclePanels/modSecPanel";
import ParticularsPanel from "./../vehiclePanels/particularsPanel";
import LocationPanel from "./../vehiclePanels/locationPanel";

import TabPanel from "../../elements/nav/tabPanel";
import { useMediaQuery } from "react-responsive";

const VehicleParentPanel = ({
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
            <ProposedPanel
              renderYesNoToggle={renderYesNoToggle}
              renderInput={renderInput}
              renderSelect={renderSelect}
              renderRadioGrid={renderRadioGrid}
            />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <OwnerKeeperPanel
              renderYesNoToggle={renderYesNoToggle}
              renderRadioGrid={renderRadioGrid}
            />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <ModSecPanel renderYesNoToggle={renderYesNoToggle} />
          </TabPanel>

          <TabPanel value={value} index={3}>
            <ParticularsPanel
              renderYesNoToggle={renderYesNoToggle}
              renderInput={renderInput}
            />
          </TabPanel>

          <TabPanel value={value} index={4}>
            <LocationPanel
              renderYesNoToggle={renderYesNoToggle}
              renderInput={renderInput}
              renderButton={renderButton}
            />
          </TabPanel>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <ProposedPanel
            renderYesNoToggle={renderYesNoToggle}
            renderInput={renderInput}
            renderSelect={renderSelect}
            renderRadioGrid={renderRadioGrid}
          />
          <OwnerKeeperPanel
            renderYesNoToggle={renderYesNoToggle}
            renderRadioGrid={renderRadioGrid}
          />
          <ModSecPanel renderYesNoToggle={renderYesNoToggle} />
          <ParticularsPanel
            renderYesNoToggle={renderYesNoToggle}
            renderInput={renderInput}
          />
          <LocationPanel
            renderYesNoToggle={renderYesNoToggle}
            renderInput={renderInput}
            renderButton={renderButton}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default VehicleParentPanel;
