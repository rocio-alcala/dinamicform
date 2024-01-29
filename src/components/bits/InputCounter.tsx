interface InputCounterSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

export default function InputCounter({
  inputRef,
  name,
  id,
  label,
  min,
  max,
  placeholder,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputCounterSpecificProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        id={id}
        min={min}
        max={max}
        type="number"
        aria-label={label}
        {...restProps}
      ></input>
    </div>
  );
}
