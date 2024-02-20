interface InputCounterSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

export default function InputCounter({
  inputRef,
  name,
  id,
  label,
  defaultValue,
  placeholder,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputCounterSpecificProps) {
  return (
    <div>
      <label>
        {label ? label : null}
        <input
          placeholder={placeholder}
          name={name}
          ref={inputRef}
          id={id}
          defaultValue={defaultValue}
          type="number"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
