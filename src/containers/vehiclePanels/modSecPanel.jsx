import React from "react";

const ModSec = ({ renderYesNoToggle }) => {
  return (
    <div>
      {renderYesNoToggle("hasModification", "Has the bike been modified?")}
      {renderYesNoToggle(
        "hasSecurityDevice",
        "Do you have any additional security devices?"
      )}
    </div>
  );
};

export default ModSec;
