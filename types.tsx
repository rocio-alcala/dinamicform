export interface Product {
  isPreselected: boolean;
  isRequired: boolean;
  label: string;
  summaryLabel: string;
  name: string;
  value: string;
  valueSummaryLabel: string;
  subProductGroups: SubProduct[];
}

export interface SubProduct extends Omit<Product, "subProductGroups"> {
  steps: Step[];
}

export interface Step {
  isRequired?: boolean;
  label: string;
  name: string;
  quickLabel: string;
  summaryLabel: string;
  desc?: string;
  type?: string;
  values: any;
}

export interface ListValue {
  asButton: boolean;
  desc: string;
  label: string;
  summaryLabel: string;
  value: string;
}

export interface CounterValue {
  name: string;
  label: string;
  summaryLabel: string;
  desc: string;
  isRequired: boolean;
  min: number;
  max: number;
}

export interface DateValue {
  isRequired: boolean;
  labelStart: string;
  summaryLabelStart: string;
  max: number;
  min: number;
  nameStart: string;
  name: string;
  type: string;
}

export interface DateRangeValue {
  isRequired: boolean;
  labelEnd: string;
  summaryLabelEnd: string;
  labelStart: string;
  summaryLabelStart: string;
  maxStart: number;
  maxEnd: number;
  minEnd: number;
  minStart: number;
  nameEnd: string;
  nameStart: string;
}
