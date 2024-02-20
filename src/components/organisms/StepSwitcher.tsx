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

interface StepSwitcherProps {
  step: Step;
  register: UseFormRegister<InputForm>;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
}

export default function StepSwitcher({
  step,
  register,
  control,
  errors,
  nestedParent,
  travelerIndex
}: StepSwitcherProps) {
  switch (step.type) {
    case StepType.LIST:
      return (
        <StepList
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
          travelerIndex={travelerIndex}
          nestedParent={nestedParent}
          step={step}
          register={register}
          errors={errors}
        />
      );
  }
}
