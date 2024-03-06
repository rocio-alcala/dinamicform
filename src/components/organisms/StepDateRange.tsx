import { Control, Controller, FieldErrors } from "react-hook-form";
import { DateRangeValue, Step } from "../../models/types";
import { InputForm, InputFormValue } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { useState } from "react";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";
import { TravelersInputForm } from "./TravelersForm";

interface StepDateRangePropsType {
  step: Step | Field;
  control: Control<InputForm | TravelersInputForm> 
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>
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
  const [startDate, setStartDate] = useState<InputFormValue>();

  return (
    <div className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}>
      {step.values.map((dateRange: DateRangeValue, index: number) => (
        <div className="flex flex-wrap" key={dateRange.labelStart + index}>
          <Controller
            name={getRegisterName(
              dateRange.nameStart,
              nestedParent,
              travelerIndex
            )}
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
                    maxDate={addDays(new Date(), dateRange.maxStart)}
                    minDate={addDays(new Date(), dateRange.minStart)}
                    label={dateRange.labelStart}
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
                    message={getErrors(
                      errors,
                      dateRange.nameStart,
                      nestedParent
                    )}
                  />
                </div>
              );
            }}
          />
          <Controller
            name={getRegisterName(
              dateRange.nameEnd,
              nestedParent,
              travelerIndex
            )}
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
                    maxDate={addDays(new Date(), dateRange.maxEnd)}
                    minDate={startDate ? addDays(new Date(startDate), 1) : null}
                    disabled={!startDate}
                    label={dateRange.labelEnd}
                    selectsEnd
                    value={value instanceof Date ? value.toDateString() : value}
                    inputRef={ref}
                    {...rest}
                    showIcon={true}
                  />
                  <Errors
                    message={getErrors(errors, dateRange.nameEnd, nestedParent)}
                  />
                </div>
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}
