import { useAppSelector } from "../../store/typedHooks";
import { InputFormValue } from "./QuoteForm";
import SummaryItem from "./SummaryItem";

export default function SummaryQuoteCriteria() {
  const quoteCriteria = useAppSelector((state) => state.quoteCriteria);
  if (Object.values(quoteCriteria).length === 0) {
    return <p>No hay quote criteria guardada</p>;
  }

  return (
    //casteo
    <div className="border-2 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] my-4">
        {quoteCriteria.product && (
          <SummaryItem
            label="Tu producto"
            info={quoteCriteria.product as InputFormValue}
          ></SummaryItem>
        )}
        {quoteCriteria.subproduct && (
          <SummaryItem
            label="Sub producto"
            info={quoteCriteria.subproduct as InputFormValue}
          ></SummaryItem>
        )}
        {quoteCriteria.destination_area && (
          <SummaryItem
            label="Destino"
            info={quoteCriteria.destination_area as InputFormValue}
          ></SummaryItem>
        )}
        {quoteCriteria.travelers && (
          <SummaryItem
            label="Numero de viajeros"
            info={Object.values(quoteCriteria.travelers).reduce(
              (acc, number) => acc + number
            )}
          ></SummaryItem>
        )}
        {quoteCriteria.start_date && (
          <SummaryItem
            label="Salida"
            info={new Date(
              quoteCriteria.start_date as Date
            )}
          ></SummaryItem>
        )}
        {quoteCriteria.end_date && (
          <SummaryItem
            label="Regreso"
            info={new Date(quoteCriteria.end_date as Date)}
          ></SummaryItem>
        )}
        {quoteCriteria.cost ? (
          <SummaryItem
            label="Coste total"
            info={quoteCriteria.cost as InputFormValue}
          ></SummaryItem>
        ) : null}
    </div>
  );
}
