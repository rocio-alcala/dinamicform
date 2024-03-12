import "react-datepicker/dist/react-datepicker.css";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { FieldType } from "../../models/types";
import { InputForm } from "./QuoteForm";
import { StepList } from "./StepList";
import { StepCounter } from "./StepCounter";
import StepText from "./StepText";
import StepCurrency from "./StepCurrency";
import StepDate from "./StepDate";
import StepDateRange from "./StepDateRange";
import StepCheckBox from "./StepCheckBox";
import { TravelersInputForm } from "./TravelersForm";

interface StepSwitcherProps {
  step: any;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  control: Control<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
}

export default function StepSwitcher({
  step,
  register,
  control,
  errors,
  disabled,
  nestedParent,
  travelerIndex
}: StepSwitcherProps) {

  switch (step.type) {
    case FieldType.LIST:
      return (
        <StepList
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          register={register}
          errors={errors}
        />
      );
    case FieldType.COUNTER:
      return (
        <StepCounter
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          register={register}
          errors={errors}
        />
      );
    case FieldType.DATE_RANGE:
      return (
        <StepDateRange
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          control={control}
          errors={errors}
        />
      );
    case FieldType.DATE:
      return (
        <StepDate
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          control={control}
          errors={errors}
        />
      );
    case FieldType.CURRENCY:
      return (
        <StepCurrency
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          register={register}
          errors={errors}
        />
      );
    case FieldType.CHECKBOX:
      return (
        <StepCheckBox
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          register={register}
          errors={errors}
        />
      );
    case FieldType.TEXT:
    default:
      return (
        <StepText
          disabled={disabled}
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          register={register}
          errors={errors}
        />
      );
  }
}
