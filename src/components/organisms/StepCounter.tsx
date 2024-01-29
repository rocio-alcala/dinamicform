import { UseFormRegister } from "react-hook-form";
import { CounterValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";

interface StepCounterPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
}

export function StepCounter({ step, register }: StepCounterPropsType) {
  return (
    <div className="criteria">
      {step.values.map((counter: CounterValue) => {
        const { ref, ...rest } = register(counter.name);
        return (
          <InputCounter
            key={counter.label}
            inputRef={ref}
            {...rest}
            label={counter.label}
            id={counter.label}
            min={counter.min}
            max={counter.max}
          ></InputCounter>
        );
      })}
    </div>
  );
}
