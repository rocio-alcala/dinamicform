import "react-datepicker/dist/react-datepicker.css";
import { Control, UseFormRegister } from "react-hook-form";
import { Step } from "../../../types";
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
}

export default function StepSwitcher({
  step,
  register,
  control
}: StepSwitcherProps) {
  switch (step.type) {
    case "list":
      return <StepList step={step} register={register} />;
    case "counter":
      return <StepCounter step={step} register={register} />;
    case "date-range":
      return <StepDateRange step={step} control={control} />;
    case "date":
      return <StepDate step={step} control={control} />;
    case "currency":
      return <StepCurrency step={step} register={register} />;
    default:
      return <StepText step={step} register={register} />;
  }
}
