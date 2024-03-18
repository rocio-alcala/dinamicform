interface ButtonSpecificPropsType {
  isLoading?: boolean;
  color?: string
}

export default function Button({
  type,
  children,
  isLoading,
  color,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  return (
    <button
      className={`flex ${color || "bg-blue-500  hover:bg-blue-700"} disabled:bg-slate-400 text-white font-bold py-4 px-5 transition duration-300`}
      type={type}
      {...rest}
    >
      {isLoading ? <p>LOADING</p> : children}
    </button>
  );
}
