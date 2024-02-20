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
      {label ? label : null}
      <DatePicker
        dateFormat="yyyy/MM/dd"
        showIcon={showIcon}
        ref={inputRef}
        selected={value ? new Date(value) : null}
        minDate={minDate}
        {...restProps}
      />
    </label>
  );
}
