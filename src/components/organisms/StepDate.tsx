import { Control, Controller, FieldErrors } from "react-hook-form";
import { DateValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepDatePropsType {
  step: Step | Field;
  control: Control<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean
}

export default function StepDate({
  step,
  control,
  errors,
  nestedParent,
  travelerIndex,
  disabled
}: StepDatePropsType) {
  return (
    <div>
      {step.values.map((date: DateValue, index: number) => (
        <div key={date.label + index}>
          <Controller
            name={getRegisterName(date.name, nestedParent, travelerIndex)}
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
                <div>
                  <InputDate
                    value={value instanceof Date ? value.toDateString() : value}
                    label={date.label}
                    maxDate={addDays(new Date(), date.max)}
                    minDate={addDays(new Date(), date.min)}
                    inputRef={ref}
                    {...rest}
                    showIcon={true}
                    disabled={disabled}
                  />
                  <Errors
                    message={getErrors(errors, date.name, nestedParent)}
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
