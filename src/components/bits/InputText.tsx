interface InputTextSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

export default function InputText({
  inputRef,
  name,
  id,
  label,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputTextSpecificProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={name}
        ref={inputRef}
        id={id}
        type="text"
        aria-label={label}
        {...restProps}
      ></input>
    </div>
  );
}
