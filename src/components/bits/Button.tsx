interface ButtonPropsType {
  text: string;
}

export default function Button({
  type,
  text,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsType) {
  return (
    <button
      className="bg-blue-500 disabled:bg-slate-400 hover:bg-blue-700 text-white font-bold py-4 px-5 transition duration-300"
      type={type}
      {...rest}
    >
      {text}
    </button>
  );
}
