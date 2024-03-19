import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputCounterSpecificProps {
  name: string;
  errors?: string;
  label?: string;
}

const InputCounter = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCounterSpecificProps
>(({ label, errors, ...restProps }, ref) => {
  return (
    <div className="mb-5">
      <label className="block text-base font-semibold text-gray-600">
        {label ? (
          <span className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
          </span>
        ) : null}
        <input
          ref={ref}
          type="number"
          className="cursor-pointer w-full mt-1 px-6 py-3 text-xl border rounded-md focus:outline-none focus:border-blue-500 focus:ring"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
      <Errors
            message={
              errors}
          />
    </div>
  );
});

export default InputCounter;