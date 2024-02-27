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
    <div className="h-max mr-4">
      <input
        id={label}
        name={groupName}
        ref={inputRef}
        className="peer hidden"
        type="radio"
        value={value}
        aria-label={label}
        {...restProps}
      ></input>
      <label
        htmlFor={label}
        className="my-2 p-5 block w-fit border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer peer-checked:border-blue-500"
      >
        {label ? label : null}
      </label>
    </div>
  );
}
