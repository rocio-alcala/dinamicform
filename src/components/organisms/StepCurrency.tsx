import { UseFormRegister } from "react-hook-form";
import { CurrencyValue, Step } from "../../../types";
import { InputForm } from "./QuoteForm";
import InputCounter from "../bits/InputCounter";

interface StepCurrencyPropsType {
  step: Step;
  register: UseFormRegister<InputForm>;
}

export default function StepCurrency({
  step,
  register
}: StepCurrencyPropsType) {
  return (
    <div className="criteria">
      {step.values.map((value: CurrencyValue) => {
        const { ref, ...rest } = register(value.name);
        return (
          <InputCounter
            key={value.name}
            inputRef={ref}
            {...rest}
            min={value.min}
            max={value.max}
            placeholder={value.currency}
            label={value.name}
            id={value.name}
          ></InputCounter>
        );
      })}
    </div>
  );
}
