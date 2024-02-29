import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import InputText from "../bits/InputText";
import Errors from "../bits/Errors";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepTextPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  disabled?: boolean
}

export default function StepText({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  disabled
}: StepTextPropsType) {
  return (
    <div>
      {step.values.map((value: any, index: number) => {
        const { ref, ...rest } = register(
          getRegisterName(value.name, nestedParent, travelerIndex)
        );
        return (
          <div className="" key={value.label + index}>
            <InputText inputRef={ref} label={value.label} disabled={disabled} {...rest} />
            <Errors
              message={getErrors(
                errors,
                value.name,
                nestedParent,
                travelerIndex
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
