import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputList from "../bits/InputList";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { useTranslation } from "react-i18next";
import { Field } from "../../models/types";

interface StepListPropsType {
  step: Field
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export function StepList({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepListPropsType) {
  const { t } = useTranslation("global");
  return (
    <div className="flex-col">
      <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">
        {t(step.label)}
      </legend>
      <div
        className={`mb-5 mt-2 ${
          valuesAsColumn ? "flex-col" : "flex flex-wrap"
        }`}
      >
        {step.items?.map((item) => {
          const { ref, name, ...rest } = register(
            getRegisterName({
              inputName: step.name,
              nestedParent,
              travelerIndex
            })
          );
          return (
            <InputList
              asButton={item.asButton}
              key={item.label}
              groupName={name}
              inputRef={ref}
              label={item.label}
              {...rest}
              disabled={disabled}
              value={item.value}
            ></InputList>
          );
        })}
      </div>
      <Errors
        message={getErrors({
          errors,
          inputName: step.name,
          nestedParent,
          travelerIndex
        })}
      />
    </div>
  );
}
