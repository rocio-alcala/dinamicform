interface InputCheckBokSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
  groupName?: string
}

export default function InputCheckBox({
  inputRef,
  groupName,
  id,
  label,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputCheckBokSpecificProps) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={groupName}
        ref={inputRef}
        id={id}
        type="checkbox"
        aria-label={label}
        {...restProps}
      ></input>
    </div>
  );
}
