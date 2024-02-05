interface ErrorsTypeProps { message: undefined | string }

export default function Errors({ message }:ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className="error">
          {message}
        </p>
      ) : null}
    </>
  );
}
