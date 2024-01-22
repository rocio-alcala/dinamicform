import { useForm } from "react-hook-form";
import Input from "./Input";

export default function Steps({ steps, register }) {
  return (
    <>
      {steps.map((step) => (
        <div className="step">
          <label className="steplabel">{step.name}</label>
          <Input step={step} register={register}></Input>
        </div>
      ))}
    </>
  );
}
