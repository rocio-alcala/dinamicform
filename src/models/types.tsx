export enum FieldType {
  TEXT = "text",
  LIST = "list",
  COUNTER = "number",
  DATE_RANGE = "date-range",
  DATE = "date",
  CURRENCY = "currency",
  CHECKBOX = "checkbox"
}
export type FormFields = Row[];

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
    min?: number;
    max?: number;
    step?: number;
    maxStart?: number;
    maxEnd?: number;
    minEnd?: number;
    minStart?: number;
    validations?: string[]
  };
  items?: {
    value: string;
    label: string;
    description?: string;
    asButton?: boolean;
  }[];
  default_value?: string | number;
  conditional_field?: { field: string; value: string[] | number[] };
}

export type InputFieldValue = string | number | undefined | Date | null | boolean;
