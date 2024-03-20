import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputCheckBokSpecificProps {
  id: string | number ;
  description?: string ;
  label?: string;
  errors?: string;
}

const InputCheckBox = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCheckBokSpecificProps
>(({ label, errors, required, description, ...restProps }, ref) => {
  return (
    <>
      <label className="flex items-center">
        <input
          className="h-5 w-5 text-indigo-600"
          ref={ref}
          type="checkbox"
          aria-label={label}
          {...restProps}
        ></input>
        {label && (
          <legend className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  text-gray-400 tracking-wide leading-6">
          {description}
        </div>
      )}
    </>
  );
});

export default InputCheckBox;
