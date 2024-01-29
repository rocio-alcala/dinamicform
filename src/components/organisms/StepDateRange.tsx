import { Control, Controller } from "react-hook-form";
import { DateRangeValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";

interface StepDateRangePropsType {
  step: Step;
  control: Control<InputForm>;
}

export default function StepDateRange({
  step,
  control
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
              if (typeof value !== "undefined" && typeof value !== "string") {
                throw new Error(
                  `Value for step of type date is not valid: ${value}`
                );
              }

              return (
                <InputDate
                  label={dateRange.labelStart}
                  inputRef={ref}
                  {...rest}
                  minDate={new Date()}
                  showIcon={true}
                />
              );
            }}
          />
          <label htmlFor={dateRange.nameStart}>{dateRange.nameEnd}</label>
          <Controller
            name={dateRange.nameEnd}
            control={control}
            render={({ field }) => {
              const { ref, value, ...rest } = field;

              // check value
              if (typeof value !== "undefined" && typeof value !== "string") {
                throw new Error(
                  `Value for step of type date is not valid: ${value}`
                );
              }
              return (
                <InputDate
                  label={dateRange.labelEnd}
                  inputRef={ref}
                  {...rest}
                  minDate={new Date()}
                  showIcon={true}
                />
              );
            }}
          />
        </div>
      ))}
    </div>
  );
}
