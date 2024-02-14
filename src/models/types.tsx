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

export enum StepType {
  TEXT = "text",
  LIST = "list",
  COUNTER = "counter",
  DATE_RANGE = "date-range",
  DATE = "date",
  CURRENCY = "currency",
  CHECKBOX = "checkbox"
}

export interface Step {
  isRequired?: boolean;
  label: string;
  name: string;
  quickLabel: string;
  summaryLabel: string;
  desc?: string;
  type?: StepType;
  // values: ListValue[] | CounterValue[] | CurrencyValue[] | DateValue[] | DateRangeValue[];
  values: any[];
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
  label: string;
  summaryLabel: string;
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

export interface CurrencyValue {
  currency: string;
  desc: string;
  max: number;
  min: number;
  name: string;
  type: string;
}
