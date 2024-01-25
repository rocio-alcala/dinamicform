import "react-datepicker/dist/react-datepicker.css";
import { Control, UseFormRegister } from "react-hook-form";
import { Step } from "../types";
import { InputForm } from "./QuoteForm";
import { ListStep } from "./ListStep";
import { CounterStep } from "./CounterStep";
import DateRangeStep from "./DateRangeStep";
import DateStep from "./DateStep";
import DefaultStep from "./DefaultStep";

interface InputPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  control: Control<InputForm, any>;
}

export default function InputSwitcher({ step, register, control }: InputPropsType) {
  switch (step.type) {
    case "list":
      return <ListStep step={step} register={register}></ListStep>;
    case "counter":
      return <CounterStep step={step} register={register}></CounterStep>;
    case "date-range":
      return <DateRangeStep step={step} control={control}></DateRangeStep>;
    case "date":
      return <DateStep step={step} control={control}></DateStep>;
    default:
      return <DefaultStep step={step} register={register}></DefaultStep>;
  }
}
