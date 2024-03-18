import Errors from "../bits/Errors";
import { ComponentPropsWithoutRef, forwardRef } from "react";

interface FieldsetRadioPropsType {
  items: any;
  onChange: any;
  onBlur: any;
  name: string;
  label?: string;
  errors?: string;
  disabled?: boolean;
  asButton?: boolean;
  valuesAsColumn?: boolean;
}

const FieldsetRadio = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & FieldsetRadioPropsType
>(
  (
    { items, label, name, errors, valuesAsColumn, asButton, ...rest },
    ref
  ) => {

    return (
      <fieldset className="flex-col">
        <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">
          {label}
        </legend>
        <div
          className={`mb-5 mt-2 ${
            valuesAsColumn ? "flex-col" : "flex flex-wrap"
          }`}
        >
          {items.map((item, index) => {
            if (asButton)
              //TO-DO: usar libreria para cambiar clases
              return (
                <div key={item.label + index} className="h-max mr-4 mb-4 w-[30%] text-center min-w-[fit-content]">
                  <input
                    id={item.label + name}
                    ref={ref}
                    className="peer hidden"
                    type="radio"
                    value={item.value}
                    aria-label={item.label}
                    name={name}
                    {...rest}
                  ></input>
                  <label
                    htmlFor={item.label + name}
                    className="my-2 p-5 block w-full border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer peer-checked:border-blue-500 bg-white peer-disabled:bg-[#f5f5f5]"
                  >
                    <span className="text-xl font-bold text-gray-900 tracking-wide leading-6">
                      {item.label ? item.label : null}
                    </span>
                  </label>
                </div>
              );
            return (
              <div key={item.label + index} className="h-max mr-8 flex items-center">
                <input
                  id={item.label + name}
                  ref={ref}
                  className="peer h-5 w-5"
                  type="radio"
                  value={item.value}
                  aria-label={item.label}
                  name={name}
                  {...rest}
                ></input>
                <label
                  htmlFor={item.label + name}
                  className="my-2 p-5 block w-full cursor-pointer peer-checked:text-blue-900"
                >
                  <span className="text-xl font-bold tracking-wide leading-6">
                    {item.label ? item.label : null}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        <Errors message={errors} />
      </fieldset>
    );
  }
);

export default FieldsetRadio;
