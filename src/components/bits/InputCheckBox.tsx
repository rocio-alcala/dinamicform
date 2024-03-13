import { ComponentPropsWithoutRef, forwardRef } from "react";


interface InputCheckBokSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
  groupName?: string;
}

const InputCheckBox = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCheckBokSpecificProps
>(({ groupName, label, ...restProps }, ref) => {
  return (
    <label className="flex items-center">
      <input
        className="h-5 w-5 text-indigo-600"
        name={groupName}
        ref={ref}
        type="checkbox"
        aria-label={label}
        {...restProps}
      ></input>
      {label ? (
        <span className="inline pl-3 text-xl font-bold text-gray-900">
          {label}
        </span>
      ) : null}
    </label>
  );
});

export default InputCheckBox;
