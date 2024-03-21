import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import { Field, FieldType } from "../../models/types";
import { ChangeEvent, forwardRef } from "react";
import InputCounter from "../bits/InputCounter";
import { useTranslation } from "react-i18next";
import InputText from "../bits/InputText";
import InputCheckBox from "../bits/InputCheckBox";
import InputDate from "../bits/InputDate";
import { addDays } from "date-fns";
import FieldsetRadio from "../bits/FieldsetRadio";
import FieldDateRange from "./FieldDateRange";
import { InputForm } from "../views/QuoteCriteria";

interface FieldSwitcherProps {
  field: Field;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  control: Control<InputForm>
  errors?: string;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
}

const FieldSwitcher = forwardRef<HTMLInputElement, FieldSwitcherProps>(
  ({ field, control, name, ...restProps }, ref) => {
    const { t } = useTranslation("global");

    switch (field.type) {
      case FieldType.LIST:
        return (
          <FieldsetRadio
            items={field.items!} //TO-DO: mapear item para pasar label ya transcripto
            name={name}
            id={name}
            asButton={field.options?.asButton}
            label={t(field.label)}
            ref={ref}
            required={field.required}
            description={field.description && t(field.description)}
            {...restProps}
          />
        );
      case FieldType.COUNTER:
        return (
          <InputCounter
            min={field.options?.min}
            max={field.options?.max}
            step={field.options?.step}
            label={t(field.label)}
            ref={ref}
            name={name}
            required={field.required}
            id={name}
            description={field.description && t(field.description)}
            {...restProps}
          />
        );
            case FieldType.DATE_RANGE:
        return (
          <FieldDateRange
            field={field}
            control={control}
            {...restProps}
          />
        );
      case FieldType.DATE:
        return (
          <Controller
            name={name}
            control={control}
            render={({ field: renderField }) => {
              const { value, ...rest } = renderField;
              // check value
              if (
                typeof value !== "undefined" &&
                typeof value !== "string" &&
                !(value instanceof Date)
              ) {
                throw new Error(
                  `Value for field of type date is not valid: ${value}`
                );
              }
              return (
                <div>
                  <InputDate
                    value={value instanceof Date ? value.toDateString() : value}
                    label={t(field.label)}
                    required={field.required}
                    id={name}
                    maxDate={
                      field.options?.max || field.options?.max === 0
                        ? addDays(new Date(), field.options.max)
                        : undefined
                    }
                    minDate={
                      field.options?.min || field.options?.min === 0
                        ? addDays(new Date(), field.options?.min)
                        : undefined
                    }
                    showIcon={true}
                    description={field.description && t(field.description)}
                    {...restProps}
                    {...rest}
                  />
                </div>
              );
            }}
          />
        );
      case FieldType.CURRENCY:
        return (
          <InputCounter
            placeholder={field.placeholder}
            min={field.options?.min}
            max={field.options?.max}
            step={field.options?.step}
            label={t(field.label)}
            ref={ref}
            name={name}
            required={field.required}
            id={name}
            description={field.description && t(field.description)}
            {...restProps}
          />
        );
      case FieldType.CHECKBOX:
        return (
          <InputCheckBox
            id={name}
            label={t(field.label)}
            ref={ref}
            name={name}
            required={field.required}
            description={field.description && t(field.description)}
            {...restProps}
          />
        );
      case FieldType.TEXT:
      default:
        return (
          <InputText
            label={t(field.label)}
            ref={ref}
            name={name}
            required={field.required}
            id={name}
            description={field.description && t(field.description)}
            {...restProps}
          />
        );
    }
  }
);

export default FieldSwitcher;
