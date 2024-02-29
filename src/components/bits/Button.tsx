export default function Button({
  type,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex bg-blue-500 disabled:bg-slate-400 hover:bg-blue-700 text-white font-bold py-4 px-5 transition duration-300"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
