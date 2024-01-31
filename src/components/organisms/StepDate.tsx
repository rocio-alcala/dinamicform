import { Control, Controller, FieldErrors } from "react-hook-form";
import { DateValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";

interface StepDatePropsType {
  step: Step;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
}

export default function StepDate({ step, control, errors }: StepDatePropsType) {
  return (
    <div className="criteria">
      {step.values.map((date: DateValue, index: number) => (
        <div key={index}>
          <Controller
            name={date.name}
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
                  value={value instanceof Date ? value.toDateString() : value}
                  label={date.labelStart}
                  inputRef={ref}
                  {...rest}
                  minDate={new Date()}
                  showIcon={true}
                />
              );
            }}
          />
          <Errors errorMessage={errors[date.name]?.message} />
        </div>
      ))}
    </div>
  );
}
