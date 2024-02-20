import { Step } from "./types";

export interface Subscribers {
  policyHolderTree: TravelersTree;
  adultTree: TravelersTree;
  childTree: TravelersTree;
  infantTree: TravelersTree;
  seniorTree: TravelersTree;
}

export interface TravelersTree { label: string,
  name: string,
rows: Row[] }

export interface adultTree {}

export interface Row { label: string,
fields: Step []}