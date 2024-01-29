interface InputListSpecificProps {
    inputRef?: React.LegacyRef<HTMLInputElement>;
    label?: string;
    groupName?: string
  }
  
  export default function InputList({
    inputRef,
    groupName,
    id,
    label,
    ...restProps
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    InputListSpecificProps) {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          name={groupName}
          ref={inputRef}
          id={id}
          type="radio"
          aria-label={label}
          {...restProps}
        ></input>
      </div>
    );
  }
  