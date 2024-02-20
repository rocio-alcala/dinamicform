interface InputListSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
  groupName?: string;
}

export default function InputList({
  inputRef,
  groupName,
  label,
  value,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputListSpecificProps) {
  return (
    <div>
      <label>
        {label ? label : null}
        <input
          name={groupName}
          ref={inputRef}
          type="radio"
          value={value}
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
