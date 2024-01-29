import { Control, Controller } from "react-hook-form";
import { DateValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";

interface StepDatePropsType {
  step: Step;
  control: Control<InputForm>;
}

export default function StepDate({ step, control }: StepDatePropsType) {
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
              if (typeof value !== "undefined" && typeof value !== "string") {
                throw new Error(
                  `Value for step of type date is not valid: ${value}`
                );
              }

              return (
                <InputDate
                  value={value}
                  label={date.labelStart}
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
