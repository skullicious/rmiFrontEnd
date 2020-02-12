export const licenseTypes = [
  { _id: "1", name: "Provisional" },
  { _id: "2", name: "Full UK" },
  { _id: "3", name: "Full EU" },
  { _id: "4", name: "Full Other" }
];

export function getLicenseTypes() {
  return licenseTypes;
}

export const vehicleUses = [
  { _id: "1", name: "Commuting" },
  { _id: "2", name: "Personal Business Use" },
  { _id: "3", name: "Social, Domestic or Pleasure" },
  { _id: "4", name: "Deliveroo, Uber or similar" }
];

export function getVehicleUses() {
  return vehicleUses;
}
