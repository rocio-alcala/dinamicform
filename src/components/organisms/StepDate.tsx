import { Control, Controller, FieldErrors } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import InputDate from "../bits/InputDate";
import Errors from "../bits/Errors";
import { addDays } from "date-fns";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { Field } from "../../models/types";

interface StepDatePropsType {
  step: Field;
  control: any;
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
      <div className="mr-8 w-fit">
        <Controller
          name={getRegisterName({
            inputName: step.name,
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
                  label={step.label}
                  maxDate={step.options?.max ? addDays(new Date(), step.options.max) : undefined}
                  minDate={step.options?.min ? addDays(new Date(), step.options?.min): undefined}
                  inputRef={ref}
                  {...rest}
                  showIcon={true}
                  disabled={disabled}
                />
                <Errors
                  message={getErrors({
                    errors,
                    inputName: step.name,
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
