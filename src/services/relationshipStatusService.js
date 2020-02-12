export const maritalStats = [
  { _id: "1", name: "Divorced" },
  { _id: "2", name: "Married" },
  { _id: "3", name: "Married - Common Law" },
  { _id: "4", name: "Partnered" },
  { _id: "5", name: "Partnered - Civil" },
  { _id: "6", name: "Seperated" },
  { _id: "7", name: "Single" },
  { _id: "8", name: "Widowed" }
];

export function getMaritalStatus() {
  return maritalStats;
}

export const relationshipToProposer = [
  { _id: "1", name: "Brother or Sister" },
  { _id: "2", name: "Business Partner" },
  { _id: "3", name: "Sibling in Law" },
  { _id: "4", name: "Contractor" }
];

export function getRelationshipStatus() {
  return relationshipStats;
}
