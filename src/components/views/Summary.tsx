import { GrFormNextLink } from "react-icons/gr";
import Button from "../bits/Button";
import SummaryQuoteCriteria from "../organisms/SummaryQuoteCriteria";
import SummaryTravelers from "../organisms/SummaryTravelers";
import SummarySelectedQuote from "../organisms/SummarySelectedQuote";

export default function Summary() {

  return (
    <>
      <h1 className="text-4xl font-extrabold p-20 text-center text-slate-50 bg-gray-700 ">
        Resumen de tu seguro
      </h1>
      <div className="flex flex-col m-16 p-10 border-2 shadow-[1px_1px_3px_0px_rgba(0,0,0,0.3)] bg-[#f5f5f5]">
        <div className="p-10">
          <h1 className="text-gray-950 text-2xl font-bold">
            Datos de tu viaje
          </h1>
          <SummaryQuoteCriteria/>
        </div>
        <div></div>
        <div className="p-10">
          <h1 className="text-gray-950 text-2xl font-bold">
            Viajeros asegurados
          </h1>
          <SummaryTravelers/>
        </div>
        <div className="p-10">
          <h1 className="text-gray-950 text-2xl font-bold">
            Seguro seleccionado
          </h1>
          <SummarySelectedQuote/>
        </div>
        <div className="mx-10 mb-10 p-3 place-self-end flex-col">
          <Button>
            CONTINUAR <GrFormNextLink className="text-2xl" />
          </Button>
        </div>
      </div>
    </>
  );
}
