import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CurrencyValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { Fragment } from "react";

interface StepCurrencyPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
}

export default function StepCurrency({
  step,
  register,
  errors
}: StepCurrencyPropsType) {
  return (
    <div className="criteria">
      {step.values.map((value: CurrencyValue, index: number) => {
        const { ref, ...rest } = register(value.name);
        return (
          <Fragment key={value.name + index}>
            <InputCounter
              inputRef={ref}
              {...rest}
              min={value.min}
              max={value.max}
              placeholder={value.currency}
              label={value.name}
              id={value.name}
            ></InputCounter>
            <Errors errorMessage={errors[value.name]?.message} />
          </Fragment>
        );
      })}
    </div>
  );
}
