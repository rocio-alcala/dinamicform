import { useAppSelector } from "../../store/typedHooks";

export default function SummarySelectedQuote() {
  const selectedQuote = useAppSelector((state) => state.selectedQuote);
  if (Object.values(selectedQuote).length === 0) {
    return <p>No hay quote seleccionada</p>;
  }

  return (
    <div className="border-2 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] my-2 flex py-3 justify-between">
      <p className="font-bold text-2xl text-blue-950 p-4">
        {selectedQuote.productName}
      </p>
      <p className="font-bold text-3xl text-red-800 p-4">
        {selectedQuote.productPrice}€
      </p>
    </div>
  );
}
