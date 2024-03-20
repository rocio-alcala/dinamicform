import { ComponentPropsWithoutRef, forwardRef } from "react";
import DatePicker, {
  ReactDatePicker,
  ReactDatePickerProps
} from "react-datepicker";
import Errors from "./Errors";

interface InputDateSpecificProps {
  id: string | number ;
 description?: string ;
  label?: string;
  value?: string | undefined | Date;
  errors?: string
}

const InputDate = forwardRef<
  ReactDatePicker,
  ComponentPropsWithoutRef<"input"> &
    InputDateSpecificProps &
    ReactDatePickerProps
>(({ value, showIcon, errors, label, id, required, description,  ...restProps }, ref) => {

  return (
    <>
      <label htmlFor={id}>
      {label && (
          <legend className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
      </label>
      <div className="mt-2 mb-5">
        <DatePicker
          className="cursor-pointer p-10 border rounded-md focus:outline-none focus:border-blue-500 focus:ring disabled:bg-slate-100"
          dateFormat="yyyy/MM/dd"
          customInput={<input className="h-14 text-xl text-center px-12" />}
          showIcon={showIcon}
          calendarIconClassname="mt-[10px] ml-[10px] text-xl"
          ref={ref}
          selected={value ? new Date(value) : null}
          id={id}
          {...restProps}
        />
      </div>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  text-gray-400 tracking-wide leading-6">
          {description}
        </div>
      )}
    </>
  );
});

export default InputDate;
