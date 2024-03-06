import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CurrencyValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { Field } from "../../models/subscribers";
import { TravelersInputForm } from "./TravelersForm";

interface StepCurrencyPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function StepCurrency({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepCurrencyPropsType) {
  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      {step.values.map((value: CurrencyValue, index: number) => {
        const { ref, ...rest } = register(
          getRegisterName({
            inputName: value.name,
            nestedParent,
            travelerIndex
          })
        );
        return (
          <div className="mr-8 w-[20%] min-w-fit" key={value.name + index}>
            <InputCounter
              inputRef={ref}
              {...rest}
              min={value.min}
              max={value.max}
              placeholder={value.currency}
              label={value.label}
              id={value.name}
              disabled={disabled}
            ></InputCounter>
            <Errors
              message={getErrors({
                errors,
                inputName: value.name,
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
