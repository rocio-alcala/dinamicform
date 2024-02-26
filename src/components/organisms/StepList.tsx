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
}

export function StepList({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex
}: StepListPropsType) {
  return (
    <div className="mb-5 mt-2">
      {step.values.map((value: ListValue) => {
        const { ref, name, ...rest } = register(
          getRegisterName(value.name, nestedParent, travelerIndex)
        );
        return (
          <InputList
            key={value.label}
            groupName={name}
            inputRef={ref}
            id={value.label}
            label={value.label}
            {...rest}
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
