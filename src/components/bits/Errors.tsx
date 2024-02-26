interface ErrorsTypeProps { message: undefined | string }

export default function Errors({ message }:ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className="text-red-300 text-sm mt-1">
          {message}
        </p>
      ) : null}
    </>
  );
}
