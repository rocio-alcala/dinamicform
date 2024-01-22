export interface Criteria {
  isPreselected: boolean;
  isRequired: boolean;
  label: string;
  summaryLabel: string;
  value: string;
  valueSummaryLabel: string;
  subProductGroups: SubProductGroup[];
}

export interface SubProductGroup extends Omit<Criteria, "subProductGroups"> {
  step: Step[];
}

export interface Step {
  isRequired: boolean;
  label: string;
  name: string;
  quickLabel: string;
  summaryLabel: string;
  type: string;
  values: Value []
}

export interface Value {}