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

interface StepSwitcherProps {
  step: Step;
  register: UseFormRegister<InputForm>;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
}

export default function StepSwitcher({
  step,
  register,
  control,
  errors
}: StepSwitcherProps) {
  switch (step.type) {
    case StepType.LIST:
      return <StepList step={step} register={register} errors={errors} />;
    case StepType.COUNTER:
      return <StepCounter step={step} register={register} errors={errors} />;
    case StepType.DATE_RANGE:
      return <StepDateRange step={step} control={control} errors={errors} />;
    case StepType.DATE:
      return <StepDate step={step} control={control} errors={errors} />;
    case StepType.CURRENCY:
      return <StepCurrency step={step} register={register} errors={errors} />;
    case StepType.TEXT:
    default:
      return <StepText step={step} register={register} errors={errors} />;
  }
}
