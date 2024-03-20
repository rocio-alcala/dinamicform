import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputCounterSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputCounter = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCounterSpecificProps
>(({ label, errors, required,description, ...restProps }, ref) => {
  return (
    <div className="mb-5">
      <label className="block text-base font-semibold text-gray-600">
        {label && (
          <legend className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <input
          ref={ref}
          type="number"
          className="cursor-pointer w-full mt-1 px-6 py-3 text-xl border rounded-md focus:outline-none focus:border-blue-500 focus:ring"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  text-gray-400 tracking-wide leading-6">
          {description}
        </div>
      )}
    </div>
  );
});

export default InputCounter;
