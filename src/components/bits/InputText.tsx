interface InputTextSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

export default function InputText({
  inputRef,
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
        {label ? <span className="mb-1 block">{label}</span> : null}
        <input
          className="mt-1 p-2 mb-5 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          ref={inputRef}
          type="text"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
