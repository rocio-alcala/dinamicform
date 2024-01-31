interface ErrorsTypeProps { errorMessage: undefined | string }

export default function Errors({ errorMessage }:ErrorsTypeProps) {
  return (
    <>
      {errorMessage ? (
        <p className="error">
          {errorMessage}
        </p>
      ) : null}
    </>
  );
}
