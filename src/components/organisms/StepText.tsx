import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputText from "../bits/InputText";
import Errors from "../bits/Errors";

interface StepTextPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
}

export default function StepText({
  step,
  register,
  errors
}: StepTextPropsType) {
  return (
    <div className="criteria">
      {step.values.map((value: any) => {
        const { ref, ...rest } = register(value.name);
        return (<>
          <InputText
            key={value.label}
            id={value.label}
            inputRef={ref}
            label={value.label}
            {...rest}
          />
          <Errors errorMessage={errors[value.name]?.message}/>
          </>
        );
      })}
    </div>
  );
}
