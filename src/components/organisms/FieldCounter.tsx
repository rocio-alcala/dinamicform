import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { Field } from "../../models/types";
import { useTranslation } from "react-i18next";

interface FieldCounterPropsType {
  field: Field;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export function FieldCounter({
  field,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: FieldCounterPropsType) {
  const { t } = useTranslation("global");

  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      <div className="mr-8 w-[20%] min-w-fit">
        <InputCounter
          label={t(field.label)}
          id={t(field.label)}
          min={field.options?.min}
          max={field.options?.max}
          disabled={disabled}
          {...register(
            getRegisterName({
              inputName: field.name,
              nestedParent,
              travelerIndex
            })
          )}
        />
        <Errors
          message={getErrors({
            errors,
            inputName: field.name,
            nestedParent,
            travelerIndex
          })}
        />
      </div>
    </div>
  );
}
