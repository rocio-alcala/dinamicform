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
    <div className=" h-max">
      <label className="my-2 p-3 block w-fit border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer">
        {label ? label : null}
        <input
          name={groupName}
          ref={inputRef}
          className="peer"
          type="radio"
          value={value}
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
