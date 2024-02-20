interface InputTextSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

export default function InputText({
  inputRef,
  name,
  label,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputTextSpecificProps) {
  return (
    <div>
      <label>
        {label ? label : null}
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          name={name}
          ref={inputRef}
          type="text"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
