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
    <label className="flex items-center mb-8">
      <input
        className="h-5 w-5 text-indigo-600"
        name={groupName}
        ref={inputRef}
        type="checkbox"
        aria-label={label}
        {...restProps}
      ></input>
      {label ? (
        <span className="inline pl-3 text-xl font-bold text-gray-900">
          {label}
        </span>
      ) : null}
    </label>
  );
}
