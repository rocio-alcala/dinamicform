import { Control, Controller, FieldErrors } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { useState } from "react";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { useTranslation } from "react-i18next";
import { Field, InputFieldValue } from "../../models/types";


interface StepDateRangePropsType {
  step: Field
  control: Control<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function StepDateRange({
  step,
  control,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepDateRangePropsType) {
  const [startDate, setStartDate] = useState<InputFieldValue>();
  const { t } = useTranslation("global");
  if (step.nameEnd && step.nameStart)
   {return (
    <div className="flex-col">
      <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">{t(step.label)}</legend>
      <div
        className={`mb-5 mt-2 ${
          valuesAsColumn ? "flex-col" : "flex flex-wrap"
        }`}
      >
        <div className="flex flex-wrap">
          <Controller
            name={getRegisterName({
              inputName: step.nameStart,
              nestedParent,
              travelerIndex
            })}
            control={control}
            render={({ field }) => {
              const { ref, value, ...rest } = field;

              // check value
              if (
                typeof value !== "undefined" &&
                typeof value !== "string" &&
                !(value instanceof Date)
              ) {
                throw new Error(
                  `Value for step of type date is not valid: ${value}`
                );
              }
              return (
                <div className="mr-8">
                  <InputDate
                    maxDate={addDays(new Date(), step.options.maxStart)}
                    minDate={addDays(new Date(), step.options.minStart)}
                    label={step.labelStart}
                    selectsStart
                    value={value instanceof Date ? value.toDateString() : value}
                    inputRef={ref}
                    {...rest}
                    onChange={(date) => {
                      setStartDate(date);
                      field.onChange(date?.toISOString());
                    }}
                    showIcon={true}
                    disabled={disabled}
                  />
                  <Errors
                    message={getErrors({
                      errors,
                      inputName: step.nameStart,
                      nestedParent
                    })}
                  />
                </div>
              );
            }}
          />
          <Controller
            name={getRegisterName({
              inputName: step.nameEnd,
              nestedParent,
              travelerIndex
            })}
            control={control}
            render={({ field }) => {
              const { ref, value, ...rest } = field;

              // check value
              if (
                typeof value !== "undefined" &&
                typeof value !== "string" &&
                !(value instanceof Date)
              ) {
                throw new Error(
                  `Value for step of type date is not valid: ${value}`
                );
              }
              // check startDate
              if (typeof startDate === "boolean") {
                throw new Error(
                  `Value for start date is not valid: ${startDate}`
                );
              }

              return (
                <div className="mr-8">
                  <InputDate
                    maxDate={addDays(new Date(), step.options.maxEnd)}
                    minDate={startDate ? addDays(new Date(startDate), 1) : null}
                    disabled={!startDate}
                    label={step.labelEnd}
                    selectsEnd
                    value={value instanceof Date ? value.toDateString() : value}
                    inputRef={ref}
                    {...rest}
                    showIcon={true}
                  />
                  <Errors
                    message={getErrors({
                      errors,
                      inputName: step.nameEnd,
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
    </div>
  );}
}
