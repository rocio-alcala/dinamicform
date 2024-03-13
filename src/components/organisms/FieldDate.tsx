import { Control, Controller, FieldErrors } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { Field } from "../../models/types";
import { useTranslation } from "react-i18next";

interface FieldDatePropsType {
  field: Field;
  control: any;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function FieldDate({
  field: formField,
  control,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: FieldDatePropsType) {
  const { t } = useTranslation("global");

  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      <div className="mr-8 w-fit">
        <Controller
          name={getRegisterName({
            inputName: formField.name,
            nestedParent,
            travelerIndex
          })}
          control={control}
          render={({ field }) => {
            const { value, ...rest } = field;
            // check value
            if (
              typeof value !== "undefined" &&
              typeof value !== "string" &&
              !(value instanceof Date)
            ) {
              throw new Error(
                `Value for field of type date is not valid: ${value}`
              );
            }
            return (
              <div>
                <InputDate
                  value={value instanceof Date ? value.toDateString() : value}
                  label={t(formField.label)}
                  maxDate={
                    formField.options?.max
                      ? addDays(new Date(), formField.options.max)
                      : undefined
                  }
                  minDate={
                    formField.options?.min
                      ? addDays(new Date(), formField.options?.min)
                      : undefined
                  }
                  {...rest}
                  showIcon={true}
                  disabled={disabled}
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
            );
          }}
        />
      </div>
    </div>
  );
}
