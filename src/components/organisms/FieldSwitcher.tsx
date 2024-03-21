import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller, FieldErrors } from "react-hook-form";
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
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
  disabled?: boolean;
}

//control prop is only used in type DATE,

const FieldSwitcher = forwardRef<HTMLInputElement, FieldSwitcherProps>(
  ({ field, errors, control, name, ...restProps }, ref) => {
    const { t } = useTranslation("global");

    switch (field.type) {
      case FieldType.LIST:
        return (
          <FieldsetRadio
            items={field.items!.map((item) => {
              // items! bc items is a conditional property in Field but must always come in type LIST
              return { ...item, label: t(item.label) }; // label transcription
            })}
            name={name}
            id={name}
            asButton={field.options?.asButton}
            label={t(field.label)}
            ref={ref}
            required={field.required}
            errors={errors[name]?.message}
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
            errors={errors[name]?.message}
            placeholder={field.placeholder && t(field.placeholder)}
            description={field.description && t(field.description)}
            {...restProps}
          />
        );
      case FieldType.DATE_RANGE:
        return (
          <FieldDateRange
            field={field}
            control={control}
            errors={errors}
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
              // check value type number or boolean not assignable to InputDate
              if (typeof value === "number" || typeof value === "boolean") {
                throw new Error(
                  `Value for field of type date is not valid: ${value}`
                );
              }
              return (
                <div>
                  <InputDate
                    selectedValue={
                      typeof value === "string" ? new Date(value) : value
                    } //check and transform value type string
                    label={t(field.label)}
                    required={field.required}
                    id={name}
                    maxDate={
                      typeof field.options?.max === "number"
                        ? addDays(new Date(), field.options.max)
                        : undefined
                    }
                    minDate={
                      typeof field.options?.min === "number"
                        ? addDays(new Date(), field.options?.min)
                        : undefined
                    }
                    showIcon={true}
                    description={field.description && t(field.description)}
                    errors={errors[name]?.message}
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
            min={field.options?.min}
            max={field.options?.max}
            step={field.options?.step}
            label={t(field.label)}
            ref={ref}
            name={name}
            required={field.required}
            id={name}
            placeholder={field.placeholder && t(field.placeholder)}
            description={field.description && t(field.description)}
            errors={errors[name]?.message}
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
            errors={errors[name]?.message}
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
            placeholder={field.placeholder && t(field.placeholder)}
            errors={errors[name]?.message}
            {...restProps}
          />
        );
    }
  }
);

export default FieldSwitcher;
