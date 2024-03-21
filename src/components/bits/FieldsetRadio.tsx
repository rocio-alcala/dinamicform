import Errors from "../bits/Errors";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import clsx from "clsx/lite";

interface FieldsetRadioPropsType {
  items: {
    value: string;
    label?: string;
    description?: string;
  }[];
  id: string | number;
  label?: string;
  description?: string;
  errors?: string;
  asButton?: boolean;
  valuesAsColumn?: boolean;
}

const FieldsetRadio = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & FieldsetRadioPropsType
>(
  (
    {
      items,
      label,
      id,
      errors,
      valuesAsColumn,
      asButton,
      required,
      description,
      ...rest
    },
    ref
  ) => {
    const itemsContainerClassName = clsx(
      "mb-5 mt-2",
      valuesAsColumn && "flex-col",
      !valuesAsColumn && "flex flex-wrap"
    );
    const divContainerClassName = clsx(
      "h-max",
      asButton && "mr-4 text-center min-w-[fit-content]",
      !asButton && "mr-8 flex items-center"
    );
    const inputClassName = clsx(
      "peer",
      asButton && "hidden",
      !asButton && "h-5 w-5"
    );
    const labelClassName = clsx(
      "my-2 p-5 block w-full ",
      asButton &&
        "border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer peer-checked:border-blue-500 bg-white peer-disabled:bg-[#f5f5f5]",
      !asButton && "cursor-pointer peer-checked:text-blue-900"
    );

    return (
      <fieldset>
        {label && (
          <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <div className={itemsContainerClassName}>
          {items.map((item, index) => {
            return (
              <div key={item.value + index} className={divContainerClassName}>
                <input
                  id={item.value + id}
                  ref={ref}
                  className={inputClassName}
                  type="radio"
                  value={item.value}
                  aria-label={item.label}
                  {...rest}
                ></input>
                <label htmlFor={item.value + id} className={labelClassName}>
                  <span className="text-xl font-bold text-gray-900 tracking-wide leading-6">
                    {item.label ? item.label : item.value}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        <Errors message={errors} />
        {description && (
          <div className="text-xs  text-gray-400 tracking-wide leading-6">
            {description}
          </div>
        )}
      </fieldset>
    );
  }
);

export default FieldsetRadio;
