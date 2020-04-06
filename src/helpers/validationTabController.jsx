const ValidationTabController = errors => {
  const tabList = new Set();

  const errorList = Object.entries(errors);

  errorList.map(item => {
    let currentId = item[0];

    if (currentId.includes("individual_")) {
      tabList.add("individualPanel");
    } else if (currentId.includes("status_")) {
      tabList.add("statusPanel");
    } else if (currentId.includes("vehicleUse_")) {
      tabList.add("vehicleUsePanel");
    } else if (currentId.includes("occupation_")) {
      tabList.add("occupationPanel");
    }
  });

  let icons = {};

  icons = document.getElementsByClassName("MuiTabs-flexContainer")[0].children;

  for (var i = 0; i < icons.length; i++) {
    let currentIconElement = icons[i];
    let currentIconLabel = icons[i].getAttribute("aria-label");

    if (tabList.has(currentIconLabel)) {
      currentIconElement.setAttribute("data-value-error", "");
    } else {
      currentIconElement.removeAttribute("data-value-error");
    }
  }
};

export default ValidationTabController;
