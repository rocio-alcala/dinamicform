import "react-datepicker/dist/react-datepicker.css";
import {
  Control,
  Controller,
} from "react-hook-form";
import { FieldType } from "../../models/types";
import { InputForm } from "./QuoteForm";

import { TravelersInputForm } from "./TravelersForm";
import { forwardRef } from "react";
import FieldsetRadio from "../bits/FieldSetRadio";
import InputCounter from "../bits/InputCounter";
import { useTranslation } from "react-i18next";
import InputText from "../bits/InputText";
import InputCheckBox from "../bits/InputCheckBox";
import InputDate from "../bits/InputDate";
import { addDays } from "date-fns";

interface FieldSwitcherProps {
  field: any;
  onChange: any;
  onBlur: any;
  name: string;
  control: Control<InputForm | TravelersInputForm>;
  errors: string;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
}

const FieldSwitcher = forwardRef<HTMLInputElement, FieldSwitcherProps>(
  ({ field, onChange, onBlur, name, control, errors, disabled }, ref) => {
    const { t } = useTranslation("global");

    switch (field.type) {
      case FieldType.LIST:
        return (
          <FieldsetRadio
            disabled={disabled}
            items={field.items}
            asButton={field.options?.asButton}
            onChange={onChange}
            onBlur={onBlur}
            label={t(field.label)}
            ref={ref}
            name={name}
            errors={errors}
          />
        );
      case FieldType.COUNTER:
        return (
          <InputCounter
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            id={t(field.label)}
            min={field.options?.min}
            max={field.options?.max}
            label={t(field.label)}
            ref={ref}
            name={name}
            errors={errors}
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
                      field.options?.max
                        ? addDays(new Date(), field.options.max)
                        : undefined
                    }
                    minDate={
                      field.options?.min
                        ? addDays(new Date(), field.options?.min)
                        : undefined
                    }
                    showIcon={true}
                    disabled={disabled}
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
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            id={t(field.label)}
            placeholder={field.placeholder}
            min={field.options?.min}
            max={field.options?.max}
            label={t(field.label)}
            ref={ref}
            name={name}
            errors={errors}
          />
        );
      case FieldType.CHECKBOX:
        return (
          <InputCheckBox
            disabled={disabled}
            label={t(field.label)}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            name={name}
            errors={errors}
          />
        );
      case FieldType.TEXT:
      default:
        return (
          <InputText
            disabled={disabled}
            label={t(field.label)}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            name={name}
            errors={errors}
          />
        );
    }
  }
);

export default FieldSwitcher;

/* export default function FieldSwitcher({
  field,
  onChange,
  onBlur,
  ref,
  name,
  control,
  errors,
  disabled,
  nestedParent,
  travelerIndex
}: FieldSwitcherProps) {
  switch (field.type) {
        case FieldType.LIST:
      return (
        <FieldList
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          register={register}
          errors={errors}
        />
      );
        case FieldType.COUNTER:
      return (
        <FieldCounter
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          register={register}
          errors={errors}
        />
      );
    case FieldType.DATE_RANGE:
      return (
        <FieldDateRange
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          control={control}
          errors={errors}
        />
      );
    case FieldType.DATE:
      return (
        <FieldDate
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          control={control}
          errors={errors}
        />
      );
    case FieldType.CURRENCY:
      return (
        <FieldCurrency
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          register={register}
          errors={errors}
        />
      );
    case FieldType.CHECKBOX:
      return (
        <FieldCheckBox
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          register={register}
          errors={errors}
        />
      );
    case FieldType.TEXT:
    default:
      return (
        <FieldText
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          field={field}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          name={name}
          errors={errors}
        />
      );
  }
} */
