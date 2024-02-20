import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputText from "../bits/InputText";
import Errors from "../bits/Errors";
import { Fragment } from "react";
import { getErrors, getRegisterName } from "../../utils/helpers";

interface StepTextPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
}

export default function StepText({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex
}: StepTextPropsType) {
  return (
    <div>
      {step.values.map((value: any, index: number) => {
        const { ref, name, ...rest } = register(
          getRegisterName(value.name, nestedParent, travelerIndex)
        );
        return (
          <Fragment key={value.label + index}>
            <InputText id={name} inputRef={ref} label={value.label} {...rest} />
            <Errors
              message={getErrors(
                errors,
                value.name,
                nestedParent,
                travelerIndex
              )}
            />
          </Fragment>
        );
      })}
    </div>
  );
}
