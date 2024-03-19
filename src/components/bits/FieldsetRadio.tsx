import { useTranslation } from "react-i18next";
import Errors from "../bits/Errors";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import clsx from "clsx/lite";
import { Item } from "../../models/types";

interface FieldsetRadioPropsType {
  items: Item[]
  label?: string;
  errors?: string;
  asButton?: boolean;
  valuesAsColumn?: boolean;
}

const FieldsetRadio = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & FieldsetRadioPropsType
>(({ items, label, name, errors, valuesAsColumn, asButton, ...rest }, ref) => {
  const { t } = useTranslation("global");

  return (
    <fieldset className="flex-col">
      <legend className="text-xl font-bold text-gray-900 tracking-wide leading-6">
        {label}
      </legend>
      <div
        className={clsx(
          "mb-5 mt-2",
          valuesAsColumn && "flex-col",
          !valuesAsColumn && "flex flex-wrap"
        )}
      >
        {items.map((item, index) => {
          //TO-DO: usar libreria para cambiar clases
          return (
            <div
              key={item.label + index}
              className={clsx(
                "h-max",
                asButton && "mr-4 mb-4 w-[30%] text-center min-w-[fit-content]",
                !asButton && "mr-8 flex items-center"
              )}
            >
              <input
                id={item.label + name}
                ref={ref}
                className={clsx(
                  "peer",
                  asButton && "hidden",
                  !asButton && "h-5 w-5"
                )}
                type="radio"
                value={item.value}
                aria-label={item.label}
                name={name}
                {...rest}
              ></input>
              <label
                htmlFor={item.label + name}
                className={clsx(
                  "my-2 p-5 block w-full ",
                  asButton &&
                    "border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer peer-checked:border-blue-500 bg-white peer-disabled:bg-[#f5f5f5]",
                  !asButton && "cursor-pointer peer-checked:text-blue-900"
                )}
              >
                <span className="text-xl font-bold text-gray-900 tracking-wide leading-6">
                  {item.label ? t(item.label) : null}
                </span>
              </label>
            </div>
          );
        })}
      </div>
      <Errors message={errors} />
    </fieldset>
  );
});

export default FieldsetRadio;
