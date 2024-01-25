import { UseFormRegister } from "react-hook-form";
import { Step } from "../types";
import { InputForm } from "./QuoteForm";

interface DefaultStepPropsType {
    step: Step;
    register: UseFormRegister<InputForm>;
  }


export default function DefaultStep({ step, register }: DefaultStepPropsType) {
  return (
    <div className="criteria">
      {step.values.map((value, index: number) => (
        <div key={index}>
          <label htmlFor={value.name}>{value.name}</label>
          <input
            {...register(value.name)}
            id={value.label}
            value={value.value}
            type="text"
          ></input>
        </div>
      ))}
    </div>
  );
}
