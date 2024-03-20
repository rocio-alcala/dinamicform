import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputTextSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
>(({ label, errors, required, description, ...props }, ref) => {
  return (
    <div className="flex-col">
      <label>
        {label && (
          <legend className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <input
          className="mt-1 p-3 mb-5 h-14 text-xl border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          ref={ref}
          type="text"
          aria-label={label}
          {...props}
        />
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

export default InputText;
