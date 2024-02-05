import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CounterValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import get from "lodash/get";
import { Fragment } from "react";

interface StepCounterPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
}

export function StepCounter({ step, register, errors }: StepCounterPropsType) {
  return (
    <div className="criteria">
      {step.values.map((counter: CounterValue, index: number) => {
        const { ref, ...rest } = register(`${step.name}.${counter.name}`);
        const errorMessage = get(
          errors,
          `${step.name}.${counter.name}.message`
        )
        return (
          <Fragment key={counter.label + index}>
            <InputCounter
              inputRef={ref}
              {...rest}
              label={counter.label}
              id={counter.label}
              min={counter.min}
              max={counter.max}
            />
            <Errors message={errorMessage ? errorMessage.toString() : undefined} />
          </Fragment>
        );
      })}
    </div>
  );
}
