import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputText from "../bits/InputText";
import Errors from "../bits/Errors";
import { Fragment } from "react";

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
      {step.values.map((value: any, index: number) => {
        const { ref, ...rest } = register(value.name);
        return (
          <Fragment key={value.label + index}>
            <InputText
              id={value.label}
              inputRef={ref}
              label={value.label}
              {...rest}
            />
            <Errors message={errors[value.name]?.message} />
          </Fragment>
        );
      })}
    </div>
  );
}
