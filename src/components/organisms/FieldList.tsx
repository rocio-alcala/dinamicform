import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputList from "../bits/InputList";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { useTranslation } from "react-i18next";
import { Field } from "../../models/types";

interface FieldListPropsType {
  field: Field;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export function FieldList({
  field,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: FieldListPropsType) {
  const { t } = useTranslation("global");
  return (
    <div className="flex-col">
      <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">
        {t(field.label)}
      </legend>
      <div
        className={`mb-5 mt-2 ${
          valuesAsColumn ? "flex-col" : "flex flex-wrap"
        }`}
      >
        {field.items?.map((item) => {
          return (
            <InputList
              asButton={item.asButton}
              key={item.label}
              groupName={field.name}
              label={t(item.label)}
              {...register(
                getRegisterName({
                  inputName: field.name,
                  nestedParent,
                  travelerIndex
                })
              )}
              disabled={disabled}
              value={item.value}
            ></InputList>
          );
        })}
      </div>
      <Errors
        message={getErrors({
          errors,
          inputName: field.name,
          nestedParent,
          travelerIndex
        })}
      />
    </div>
  );
}
