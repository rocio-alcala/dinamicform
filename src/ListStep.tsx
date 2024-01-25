import { UseFormRegister } from "react-hook-form";
import { ListValue, Step } from "../types";
import { InputForm } from "./QuoteForm";

interface ListStepPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
}

export function ListStep({ step, register }: ListStepPropsType) {
  return <div className="criteria">
    {step.values.map((value: ListValue, index: number) => (
      <div key={index}>
        <label htmlFor={value.label}>{value.label}</label>
        <input
          {...register(step.name)}
          id={value.label}
          value={value.value}
          type="radio"
        ></input>
      </div>
    ))}
  </div>;
}
