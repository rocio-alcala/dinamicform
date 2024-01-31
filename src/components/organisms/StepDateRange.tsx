import { Control, Controller, FieldErrors } from "react-hook-form";
import { DateRangeValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";

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
                  label={dateRange.labelStart}
                  value={value instanceof Date ? value.toDateString() : value}
                  inputRef={ref}
                  {...rest}
                  minDate={new Date()}
                  showIcon={true}
                />
              );
            }}
          />
          <Errors errorMessage={errors[dateRange.nameStart]?.message} />
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
                  label={dateRange.labelEnd}
                  value={value instanceof Date ? value.toDateString() : value}
                  inputRef={ref}
                  {...rest}
                  minDate={new Date()}
                  showIcon={true}
                />
              );
            }}
          />
          <Errors errorMessage={errors[dateRange.nameEnd]?.message} />
        </div>
      ))}
    </div>
  );
}
