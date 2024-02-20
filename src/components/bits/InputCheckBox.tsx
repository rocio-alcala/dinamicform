interface InputCheckBokSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
  groupName?: string;
}

export default function InputCheckBox({
  inputRef,
  groupName,
  label,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputCheckBokSpecificProps) {
  return (
    <label>
      {label ? label : null}
      <input
        name={groupName}
        ref={inputRef}
        type="checkbox"
        aria-label={label}
        {...restProps}
      ></input>
    </label>
  );
}