import { ComponentPropsWithoutRef, forwardRef } from "react";
import DatePicker, {
  ReactDatePicker,
  ReactDatePickerProps
} from "react-datepicker";
import Errors from "./Errors";

interface InputDateSpecificProps {
  inputRef?: React.LegacyRef<ReactDatePicker>;
  label: string;
  value?: string | undefined | Date;
  errors?: string
}

const InputDate = forwardRef<
  ReactDatePicker,
  ComponentPropsWithoutRef<"input"> &
    InputDateSpecificProps &
    ReactDatePickerProps
>(({ value, showIcon, errors, label, name, ...restProps }, ref) => {
  return (
    <>
      <label htmlFor={label + name}>
        {label ? (
          <span className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {label}
          </span>
        ) : null}
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
          {...restProps}
          id={label + name}
        />
      </div>
      <Errors message={errors} />
    </>
  );
});

export default InputDate;
