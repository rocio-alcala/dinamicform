import DatePicker, {
  ReactDatePicker,
  ReactDatePickerProps
} from "react-datepicker";

interface InputDateSpecificProps {
  inputRef?: React.LegacyRef<ReactDatePicker>;
  label: string
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
    <>
      <label htmlFor={label}>{label}</label>
      <DatePicker
      // TO-DO: encontrar format de date para renderizarlo bien 
        id={label}
        showIcon={showIcon}
        ref={inputRef}
        value={value}
        selected={value ? new Date(value) : null}
        minDate={minDate}
        {...restProps}
      />
    </>
  );
}
