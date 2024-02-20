import { Step, StepType } from "./types";

export interface Subscribers {
  policyHolderTree: TravelersTree;
  adultTree: TravelersTree;
  childTree: TravelersTree;
  seniorTree: TravelersTree;
}

export interface TravelersTree {
  label: string;
  name: string;
  rows: Row[];
}

export interface adultTree {}

export interface Row {
  label: string;
  fields: Field[];
}

export interface Field {
  label?: string;
  name: string;
  summaryLabel?: string;
  modifier?: string,
  columns?: number,
  type?: StepType;
  values: any;
  subType?: string[],
}
