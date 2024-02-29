import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ListValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputList from "../bits/InputList";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepListPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean;
}

export function StepList({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled
}: StepListPropsType) {
  return (
    <div className="mb-5 mt-2 flex flex-auto flex-wrap">
      {step.values.map((value: ListValue) => {
        const { ref, name, ...rest } = register(
          getRegisterName(value.name, nestedParent, travelerIndex)
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
        message={getErrors(
          errors,
          step.values[0].name,
          nestedParent,
          travelerIndex
        )}
      />
    </div>
  );
}
