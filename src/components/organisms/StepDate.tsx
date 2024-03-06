import { Control, Controller, FieldErrors } from "react-hook-form";
import { DateValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { Field } from "../../models/subscribers";
import { TravelersInputForm } from "./TravelersForm";

interface StepDatePropsType {
  step: Step | Field;
  control: Control<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function StepDate({
  step,
  control,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepDatePropsType) {
  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      {step.values.map((date: DateValue, index: number) => (
        <div className="mr-8 w-fit" key={date.label + index}>
          <Controller
            name={getRegisterName({
              inputName: date.name,
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
                    message={getErrors({
                      errors,
                      inputName: date.name,
                      nestedParent,
                      travelerIndex
                    })}
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
