import { ServiceDetailProperties } from "./Services.types";

export const calcNumSectionsForMed = (sections?: ServiceDetailProperties[]): number => {
  let result = 12;

  if (undefined !== sections && null !== sections) {
    if (sections.length > 4) {
      result = 3;
    } else if (sections.length > 3) {
      result = 2;
    }
  }

  return result;
}