import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ListValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputList from "../bits/InputList";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { Field } from "../../models/subscribers";
import { TravelersInputForm } from "./TravelersForm";

interface StepListPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export function StepList({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled,
  valuesAsColumn
}: StepListPropsType) {
  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
      {step.values.map((value: ListValue) => {
        const { ref, name, ...rest } = register(
          getRegisterName({
            inputName: value.name,
            nestedParent,
            travelerIndex
          })
        );
        return (
          <InputList
            asButton={value.asButton}
            key={value.label}
            groupName={name}
            inputRef={ref}
            label={value.label}
            {...rest}
            disabled={disabled}
            value={value.value}
          ></InputList>
        );
      })}
      <Errors
        message={getErrors({
          errors,
          inputName: step.values[0].name,
          nestedParent,
          travelerIndex
        })}
      />
    </div>
  );
}
