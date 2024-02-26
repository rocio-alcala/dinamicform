import DatePicker, {
  ReactDatePicker,
  ReactDatePickerProps
} from "react-datepicker";

interface InputDateSpecificProps {
  inputRef?: React.LegacyRef<ReactDatePicker>;
  label: string;
  value?: string | undefined | Date;
}

export default function InputDate({
  showIcon,
  value,
  inputRef,
  minDate,
  label,
  ...restProps
}: ReactDatePickerProps & InputDateSpecificProps) {
  return (
    <label>
      {label ? (
        <span className="text-base font-semibold text-gray-600 mb-2 block">
          {label}
        </span>
      ) : null}
      <div className="mt-1">
        <DatePicker
          className="cursor-pointer border rounded-md focus:outline-none focus:border-blue-500 focus:ring disabled:bg-slate-100"
          dateFormat="yyyy/MM/dd"
          showIcon={showIcon}
          ref={inputRef}
          selected={value ? new Date(value) : null}
          minDate={minDate}
          {...restProps}
        />
      </div>
    </label>
  );
}
