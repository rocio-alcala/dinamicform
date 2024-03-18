import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputTextSpecificProps {
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
>(({ label, errors, ...props }, ref) => {
  return (
    <>
      <label>
        {label ? (
          <span className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
          </span>
        ) : null}
        <input
          className="mt-1 p-3 mb-5 h-14 text-xl border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          ref={ref}
          type="text"
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
    </>
  );
});

export default InputText;
