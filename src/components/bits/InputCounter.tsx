import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation("global");
  return (
    <div className="mb-5">
      <label className="block text-base font-semibold text-gray-600">
        {label ? (
          <span className="mb-1 block text-xl font-bold text-gray-900 tracking-wide leading-6">
            {t(label)}
          </span>
        ) : null}
        <input
          placeholder={placeholder}
          name={name}
          ref={inputRef}
          id={id}
          defaultValue={defaultValue}
          type="number"
          className="cursor-pointer w-full mt-1 px-6 py-3 text-xl border rounded-md focus:outline-none focus:border-blue-500 focus:ring"
          aria-label={label}
          {...restProps}
        ></input>
      </label>
    </div>
  );
}
