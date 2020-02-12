export const occs = [
  { _id: "1", name: "Abbatoir Worker" },
  { _id: "2", name: "Bartender" },
  { _id: "3", name: "Chef" },
  { _id: "4", name: "Lawyer" },
  { _id: "5", name: "Mechanic" },
  { _id: "6", name: "Occupational Therapist" },
  { _id: "7", name: "Police Officer" },
  { _id: "8", name: "Train Driver" }
];

export function getOccs() {
  return occs;
}

export const occStatus = [
  { _id: "1", name: "Full time" },
  { _id: "2", name: "Part time" },
  { _id: "3", name: "Unemployed" },
  { _id: "4", name: "Contractor" }
];

export function getOccStatus() {
  return occStatus;
}

export const employmentTypes = [
  { _id: "1", name: "Company" },
  { _id: "2", name: "Contractor" },
  { _id: "3", name: "Employed" },
  { _id: "4", name: "Employed (Temporary)" },
  { _id: "5", name: "Financially Assisted" },
  { _id: "6", name: "Household Duties" }
];

export function getEmploymentTypes() {
  return employmentTypes;
}

export const employerBusiness = [
  { _id: "1", name: "Insurance" },
  { _id: "2", name: "Retail" },
  { _id: "3", name: "Technology" },
  { _id: "4", name: "Construction" },
  { _id: "5", name: "Finance" },
  { _id: "6", name: "Local Government" }
];

export function getEmployerBusiness() {
  return employerBusiness;
}
