import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import Errors from "../bits/Errors";
import InputCheckBox from "../bits/InputCheckBox";
import { Fragment } from "react";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepCheckBoxPropsType {
  step: Step | Field;
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
}: StepCheckBoxPropsType) {
  return (
    <div>
      {step.values.map((check: any, index: number) => {
        const { ref, name, ...rest } = register(
          getRegisterName(check.name, nestedParent, travelerIndex)
        );
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
          </Fragment>
        );
      })}
      <Errors message={getErrors(errors, step.values[0].name, nestedParent)} />
    </div>
  );
}
