interface InputCounterSpecificProps {
  inputRef?: React.LegacyRef<HTMLInputElement>;
  label?: string;
}

export default function InputCounter({
  inputRef,
  name,
  id,
  label,
  defaultValue,
  placeholder,
  ...restProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputCounterSpecificProps) {
  return (
    <div>
      <label className="block text-base font-semibold text-gray-600">
        {label ? <span className="mb-1 block">{label}</span> : null}
        <input
          placeholder={placeholder}
          name={name}
          ref={inputRef}
          id={id}
          defaultValue={defaultValue}
          type="number"
          className="cursor-pointer mt-1 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 focus:ring"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
