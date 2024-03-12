import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputForm } from "./QuoteForm";
import Errors from "../bits/Errors";
import InputCheckBox from "../bits/InputCheckBox";
import { getErrors, getRegisterName } from "../../utils/formsUtils";
import { TravelersInputForm } from "./TravelersForm";
import { Field } from "../../models/types";

interface StepCheckBoxPropsType {
  step: Field;
  register: UseFormRegister<InputForm | TravelersInputForm>;
  errors: FieldErrors<InputForm> | FieldErrors<TravelersInputForm>;
  nestedParent?: string;
  travelerIndex?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  valuesAsColumn?: boolean;
}

export default function StepCheckBox({
  step,
  register,
  errors,
  nestedParent,
  travelerIndex,
  onChange: customOnChange,
  disabled,
  valuesAsColumn
}: StepCheckBoxPropsType) {
  const { ref, name, onChange, ...rest } = register(getRegisterName({
    inputName: step.name,
    nestedParent,
    travelerIndex
  }));

  return (
    <div
      className={`mb-5 mt-2 ${valuesAsColumn ? "flex-col" : "flex flex-wrap"}`}
    >
          <div className="mr-8 w-fit">
            <InputCheckBox
              id={step.label}
              inputRef={ref}
              label={step.label}
              groupName={name}
              onChange={customOnChange || onChange}
              disabled={disabled}
              {...rest}
            />
          </div>
   
      <Errors
        message={getErrors({
          errors,
          inputName: step.name,
          nestedParent,
          travelerIndex
        })}
      />
    </div>
  );
}
