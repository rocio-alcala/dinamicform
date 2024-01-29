import { UseFormRegister } from "react-hook-form";
import { ListValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputList from "../bits/InputList";

interface StepListPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
}

export function StepList({ step, register }: StepListPropsType) {
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
          ></InputList>
        );
      })}
    </div>
  );
}
