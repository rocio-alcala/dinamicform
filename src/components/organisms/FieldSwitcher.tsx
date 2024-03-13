import "react-datepicker/dist/react-datepicker.css";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { FieldType } from "../../models/types";
import { InputForm } from "./QuoteForm";
import { FieldList } from "./FieldList";
import { FieldCounter } from "./FieldCounter";
import FieldText from "./FieldText";
import FieldCurrency from "./FieldCurrency";
import FieldDate from "./FieldDate";
import FieldDateRange from "./FieldDateRange";
import FieldCheckBox from "./FieldCheckBox";
import { TravelersInputForm } from "./TravelersForm";

interface FieldSwitcherProps {
  field: any;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  control: Control<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
}

export default function FieldSwitcher({
  field,
  register,
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
          register={register}
          errors={errors}
        />
      );
  }
}
