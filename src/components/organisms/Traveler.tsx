import { InputForm } from "./QuoteForm";
import SummaryItem from "./SummaryItem";

interface TravelerPropsType {
  traveler: Record<string, InputForm>;
  title: string;
}

export default function Traveler({ traveler, title }: TravelerPropsType) {
  console.log("traveler", traveler);
  if (traveler.isPolicyHolder) return null;
  return (
    <>
      <div className="border-2 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] my-4">
        <h1 className="text-start p-2 text-gray-950 font-bold">{title}</h1>
        {traveler.first_name && (
          <SummaryItem label="Nombre" info={traveler.first_name}></SummaryItem>
        )}
        {traveler.last_name && (
          <SummaryItem label="Apellido" info={traveler.last_name}></SummaryItem>
        )}
        {traveler.email && (
          <SummaryItem label="Email" info={traveler.email}></SummaryItem>
        )}
        {traveler.birth_date && (
          <SummaryItem
            label="Fecha de nacimiento"
            info={traveler.birth_date.toLocaleDateString()}
          ></SummaryItem>
        )}
        {traveler.passport_number && (
          <SummaryItem
            label="Numero de pasaporte"
            info={traveler.passport_number}
          ></SummaryItem>
        )}
        {traveler.title && (
          <SummaryItem label="Tratamiento" info={traveler.title}></SummaryItem>
        )}
      </div>
    </>
  );
}
