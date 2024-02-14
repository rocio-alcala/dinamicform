import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import Errors from "../bits/Errors";
import InputCheckBox from "../bits/InputCheckBox";
import { Fragment } from "react";

interface StepCheckBoxPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
}

export default function StepText({
  step,
  register,
  errors
}: StepCheckBoxPropsType) {
  return (
    <div>
      {step.values.map((check: any, index: number) => {
        const { ref, name, ...rest } = register(check.name);
        return (
          <Fragment key={check.label + index}>
            <InputCheckBox
              id={check.label}
              inputRef={ref}
              label={check.label}
              groupName={name}
              {...rest}
              value={check.value}
            />
            <Errors message={errors[check.name]?.message} />
          </Fragment>
        );
      })}
    </div>
  );
}