export const vehicles = [
  { _id: "1", name: "Porsche 911" },
  { _id: "2", name: "Ferrari F40" },
  { _id: "3", name: "Subaru Impreza" },
  { _id: "4", name: "Bentley Azure" }
];

export function getVehicles() {
  return vehicles;
}

export const owner = [
  { _id: "1", name: "Proposer or Policy Holder" },
  { _id: "2", name: "Spouse" },
  { _id: "3", name: "Parent" },
  { _id: "4", name: "Daughter or Son" },
  { _id: "5", name: "Employer" },
  { _id: "6", name: "Garage" },
  { _id: "7", name: "Partner - Civil" },
  { _id: "8", name: "Other Family Member" }
];

export function getOwners() {
  return owner;
}

export const keeper = [
  { _id: "1", name: "Proposer or Policy Holder" },
  { _id: "2", name: "Spouse" },
  { _id: "3", name: "Parent" },
  { _id: "4", name: "Daughter or Son" },
  { _id: "5", name: "Employer" },
  { _id: "6", name: "Garage" },
  { _id: "7", name: "Partner - Civil" },
  { _id: "8", name: "Other Family Member" }
];

export function getKeepers() {
  return keeper;
}

export const garageLocation = [
  { _id: "1", name: "Kept on Public Road" },
  { _id: "2", name: "Parked on Drive" },
  { _id: "3", name: "Car Park" },
  { _id: "4", name: "Locked Building" },
  { _id: "5", name: "Locked Compound" },
  { _id: "6", name: "Shed" },
  { _id: "7", name: "Office or Factory Car Park" },
  { _id: "8", name: "Open Public Car Park" },
  { _id: "9", name: "Secure Public Car Park" }
];

export function getGarageLocations() {
  return garageLocation;
}
