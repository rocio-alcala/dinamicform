import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CounterValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { Field } from "../../models/subscribers";
import { TravelersInputForm } from "./TravelersForm";

interface StepCounterPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export function StepCounter({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepCounterPropsType) {
  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      {step.values.map((counter: CounterValue, index: number) => {
        const { ref, ...rest } = register(
          getRegisterName({
            inputName: counter.name,
            nestedParent,
            travelerIndex
          })
        );
        return (
          <div className="mr-8 w-[20%] min-w-fit" key={counter.label + index}>
            <InputCounter
              inputRef={ref}
              {...rest}
              label={counter.label}
              id={counter.label}
              min={counter.min}
              max={counter.max}
              disabled={disabled}
            />
            <Errors
              message={getErrors({
                errors,
                inputName: counter.name,
                nestedParent,
                travelerIndex
              })}
            />
          </div>
        );
      })}
    </div>
  );
}
