import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CounterValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { Fragment } from "react";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepCounterPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
}

export function StepCounter({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex
}: StepCounterPropsType) {
  return (
    <div>
      {step.values.map((counter: CounterValue, index: number) => {
        const { ref, ...rest } = register(
          getRegisterName(counter.name, nestedParent, travelerIndex)
        );
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
            <Errors message={getErrors(errors, counter.name, nestedParent)} />
          </Fragment>
        );
      })}
    </div>
  );
}
