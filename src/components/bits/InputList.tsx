interface InputListSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label: string;
  groupName: string;
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
    <div className="h-max mr-4 mb-4 w-[30%] text-center min-w-[fit-content]">
      <input
        id={label + groupName}
        ref={inputRef}
        className="peer hidden"
        type="radio"
        value={value}
        aria-label={label}
        {...restProps}
        name={groupName}
      ></input>
      <label
        htmlFor={label + groupName}
        className="my-2 p-5 block w-full border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer peer-checked:border-blue-500 bg-white peer-disabled:bg-[#f5f5f5]"
      >
        <span className="text-xl font-bold text-gray-900 tracking-wide leading-6">
          {label ? label : null}
        </span>
      </label>
    </div>
  );
}
