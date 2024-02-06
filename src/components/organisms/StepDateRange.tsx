import { Control, Controller, FieldErrors } from "react-hook-form";
import { DateRangeValue, Step } from "../../../types";
import { InputForm, InputFormValue } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { useState } from "react";

interface StepDateRangePropsType {
  step: Step;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
}

export default function StepDateRange({
  step,
  control,
  errors
}: StepDateRangePropsType) {
  const [startDate, setStartDate] = useState<InputFormValue>();

  return (
    <div className="criteria">
      {step.values.map((dateRange: DateRangeValue, index: number) => (
        <div key={index}>
          <label htmlFor={dateRange.nameStart}>{dateRange.nameStart}</label>
          <Controller
            name={dateRange.nameStart}
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
                    field.onChange(date);
                  }}
                  showIcon={true}
                />
              );
            }}
          />
          <Errors message={errors[dateRange.nameStart]?.message} />
          <label htmlFor={dateRange.nameStart}>{dateRange.nameEnd}</label>
          <Controller
            name={dateRange.nameEnd}
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
              );
            }}
          />
          <Errors message={errors[dateRange.nameEnd]?.message} />
        </div>
      ))}
    </div>
  );
}
