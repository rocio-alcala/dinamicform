import { ComponentPropsWithoutRef, forwardRef } from "react";

interface InputCounterSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

const InputCounter = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCounterSpecificProps
>(({ name, id, label, defaultValue, placeholder, ...restProps }, ref) => {
  return (
    <div className="mb-5">
      <label className="block text-base font-semibold text-gray-600">
        {label ? (
          <span className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
          </span>
        ) : null}
        <input
          placeholder={placeholder}
          name={name}
          ref={ref}
          id={id}
          defaultValue={defaultValue}
          type="number"
          className="cursor-pointer w-full mt-1 px-6 py-3 text-xl border rounded-md focus:outline-none focus:border-blue-500 focus:ring"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
});

export default InputCounter;