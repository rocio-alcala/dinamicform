import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CurrencyValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { Fragment } from "react";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepCurrencyPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
}

export default function StepCurrency({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex
}: StepCurrencyPropsType) {
  return (
    <div>
      {step.values.map((value: CurrencyValue, index: number) => {
        const { ref, ...rest } = register(
          getRegisterName(value.name, nestedParent, travelerIndex)
        );
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
            <Errors message={getErrors(errors, value.name, nestedParent)} />
          </Fragment>
        );
      })}
    </div>
  );
}
