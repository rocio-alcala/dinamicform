import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";

interface InputCheckBokSpecificProps {
  label?: string;
  groupName?: string;
  onChange: any;
  errors: string;
}

const InputCheckBox = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCheckBokSpecificProps
>(({ name, label, onChange, errors, ...restProps }, ref) => {
  return (
    <>
      <label className="flex items-center">
        <input
          className="h-5 w-5 text-indigo-600"
          name={name}
          ref={ref}
          type="checkbox"
          aria-label={label}
          onChange={onChange}
          {...restProps}
        ></input>
        {label ? (
          <span className="inline pl-3 text-xl font-bold text-gray-900">
            {label}
          </span>
        ) : null}
      </label>
      <Errors message={errors} />
    </>
  );
});

export default InputCheckBox;
