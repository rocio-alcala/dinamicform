import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { Field } from "../../models/types";
import { useTranslation } from "react-i18next";

interface StepCurrencyPropsType {
  step: Field;
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
  const { t } = useTranslation("global");

  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      <div className="mr-8 w-[20%] min-w-fit">
        <InputCounter
          min={step.options?.min}
          max={step.options?.max}
          placeholder={step.placeholder}
          label={t(step.label)}
          id={step.name}
          disabled={disabled}
          {...register(
            getRegisterName({
              inputName: step.name,
              nestedParent,
              travelerIndex
            })
          )}
        ></InputCounter>
        <Errors
          message={getErrors({
            errors,
            inputName: step.name,
            nestedParent,
            travelerIndex
          })}
        />
      </div>
    </div>
  );
}
