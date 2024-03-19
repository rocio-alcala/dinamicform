import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";
import { Field, FieldType } from "../../models/types";
import { InputForm } from "./QuoteForm";
import { TravelersInputForm } from "./TravelersForm";
import { ChangeEvent, forwardRef } from "react";
import InputCounter from "../bits/InputCounter";
import { useTranslation } from "react-i18next";
import InputText from "../bits/InputText";
import InputCheckBox from "../bits/InputCheckBox";
import InputDate from "../bits/InputDate";
import { addDays } from "date-fns";
import FieldsetRadio from "../bits/FieldSetRadio";

interface FieldSwitcherProps {
  field: Field;
  onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
  onBlur: (e: ChangeEvent<HTMLInputElement>)=> void;
  name: string;
  control: Control<InputForm | TravelersInputForm>;
  errors: string;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
}

const FieldSwitcher = forwardRef<HTMLInputElement, FieldSwitcherProps>(
  ({ field, control, errors, name, ...restProps }, ref) => {
    const { t } = useTranslation("global");

    switch (field.type) {
      case FieldType.LIST:
        return (
          <FieldsetRadio
            items={field.items!}
            name={name}
            asButton={field.options?.asButton}
            label={t(field.label)}
            ref={ref}
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
            {...restProps}
          />
        );
      /*       case FieldType.DATE_RANGE:
        return (
          <FieldDateRange
            disabled={disabled}
            travelerIndex={travelerIndex}
            nestedParent={nestedParent}
            field={field}
            control={control}
            errors={errors}
          />
        ); */
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
                    errors={errors}
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
            errors={errors}
            {...restProps}
          />
        );
      case FieldType.CHECKBOX:
        return (
          <InputCheckBox
            label={t(field.label)}
            ref={ref}
            name={name}
            errors={errors}
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
            errors={errors}
            {...restProps}
          />
        );
    }
  }
);

export default FieldSwitcher;
