import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation("global");
  return (
    <label className="flex items-center">
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
          {t(label)}
        </span>
      ) : null}
    </label>
  );
}
