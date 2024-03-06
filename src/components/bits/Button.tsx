interface ButtonSpecificPropsType {
  isLoading?: boolean;
}

export default function Button({
  type,
  children,
  isLoading,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  return (
    <button
      className="flex bg-blue-500 disabled:bg-slate-400 hover:bg-blue-700 text-white font-bold py-4 px-5 transition duration-300"
      type={type}
      {...rest}
    >
      {isLoading ? <p>LOADING</p> : children}
    </button>
  );
}
