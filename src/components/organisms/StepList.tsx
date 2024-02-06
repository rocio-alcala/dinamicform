import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ListValue, Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputList from "../bits/InputList";
import Errors from "../bits/Errors";

interface StepListPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
}

export function StepList({ step, register, errors }: StepListPropsType) {
  return (
    <div className="criteria">
      {step.values.map((value: ListValue) => {
        const { ref, name, ...rest } = register(step.name);
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
      <Errors message={errors[step.name]?.message} />
    </div>
  );
}
