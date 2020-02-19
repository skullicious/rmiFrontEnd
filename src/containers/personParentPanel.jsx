import React, { Component } from "react";
import TabPanels from "../../elements/nav/tabPanels";

const PersonParentPanel = props => {
  return (
    <React.Fragment>
      {!isDesktopOrLaptop && (
        <div>
          <TabPanels panels={panels} />

          <TabPanel value={value} index={0}>
            <IndividualPanel
              renderInput={renderInput}
              renderSelect={renderSelect}
              renderDatePicker={renderDatePicker}
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
            renderDatePicker={renderDatePicker}
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
    </React.Fragment>
  );
};

export default PersonParentPanel;
