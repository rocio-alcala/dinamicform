import "react-datepicker/dist/react-datepicker.css";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import { Step, StepType } from "../../models/types";
import { InputForm } from "./QuoteForm";
import { StepList } from "./StepList";
import { StepCounter } from "./StepCounter";
import StepText from "./StepText";
import StepCurrency from "./StepCurrency";
import StepDate from "./StepDate";
import StepDateRange from "./StepDateRange";
import StepCheckBox from "./StepCheckBox";
import { Field } from "../../models/subscribers";

interface StepSwitcherProps {
  step: Step | Field;
  register: UseFormRegister<InputForm>;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean
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
    case StepType.LIST:
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
    case StepType.COUNTER:
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
    case StepType.DATE_RANGE:
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
    case StepType.DATE:
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
    case StepType.CURRENCY:
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
    case StepType.CHECKBOX:
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
    case StepType.TEXT:
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
