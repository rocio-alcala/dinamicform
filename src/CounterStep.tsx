import { UseFormRegister } from "react-hook-form";
import { CounterValue, Step } from "../types";
import { InputForm } from "./QuoteForm";

interface CounterStepPropsType {
    step: Step;
    register: UseFormRegister<InputForm>;
  }

export function CounterStep({ step, register }: CounterStepPropsType) {
  return (
    <div className="criteria">
      {step.values.map((counter: CounterValue, index: number) => (
        <div key={index}>
          <label htmlFor={counter.name}>{counter.name}</label>
          <input
            {...register(counter.name)}
            id={counter.name}
            type="number"
            className="buttons"
            min={counter.min}
            max={counter.max}
          ></input>
        </div>
      ))}
    </div>
  );
}
