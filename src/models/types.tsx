export interface Product {
  isPreselected: boolean;
  label: string;
  value: string;
  description: string;
  sub_products: SubProduct[];
}

export interface SubProduct {
  isPreselected: boolean;
  label: string;
  value: string;
  description: string;
  criterias: Row[];
}

export enum FieldType {
  TEXT = "text",
  LIST = "list",
  COUNTER = "number",
  DATE_RANGE = "date-range",
  DATE = "date",
  CURRENCY = "currency",
  CHECKBOX = "checkbox"
}
/* export type FormFields = Row[]; */

export type Row = Field[];

export interface Field {
  name: string;
  label: string;
  description?: string;
  type?: FieldType;
  required?: boolean;
  labelEnd?: string;
  labelStart?: string;
  nameEnd?: string;
  nameStart?: string;
  placeholder?: string;
  options?: {
    asButton?: boolean;
    min?: number;
    max?: number;
    step?: number;
    maxStart?: number;
    maxEnd?: number;
    minEnd?: number;
    minStart?: number;
    validations?: string[];
  };
  items?: Item[];
  default_value?: string | number;
  conditional_field?: { field: string; value: string[] | number[] };
}

export interface Item {
  value: string;
  label: string;
  description?: string;
}

export type InputFieldValue =
  | string
  | number
  | undefined
  | Date
  | null
  | boolean;
