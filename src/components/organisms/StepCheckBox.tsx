import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Step } from "../../models/types";
import { InputForm } from "./QuoteForm";
import Errors from "../bits/Errors";
import InputCheckBox from "../bits/InputCheckBox";
import { getErrors, getRegisterName } from "../../utils/formsHelpers";
import { Field } from "../../models/subscribers";

interface StepCheckBoxPropsType {
  step: Step | Field;
  register: UseFormRegister<InputForm>;
  errors: FieldErrors<InputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean
}

export default function StepCheckBox({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  onChange: customOnChange,
  disabled
}: StepCheckBoxPropsType) {
  return (
    <div>
      {step.values.map((check: any, index: number) => {
        const { ref, name, onChange, ...rest } = register(
          getRegisterName(check.name, nestedParent, travelerIndex)
        );
        return (
          <div className="flex" key={check.label + index}>
            <InputCheckBox
              id={check.label}
              inputRef={ref}
              label={check.label}
              groupName={name}
              onChange={customOnChange || onChange}
              disabled={disabled}
              {...rest}
            />
          </div>
        );
      })}
      <Errors message={getErrors(errors, step.values[0].name, nestedParent)} />
    </div>
  );
}
