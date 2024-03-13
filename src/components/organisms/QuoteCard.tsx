
import { QuoteProduct } from "../../models/quote";
import Button from "../bits/Button";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface QuoteCardPropsType {
  selectedQuote: QuoteProduct | undefined;
  quoteProduct: QuoteProduct;
  setSelectedQuote: React.Dispatch<
    React.SetStateAction<QuoteProduct | undefined>
  >;
}

export default function QuoteCard({
  selectedQuote,
  quoteProduct,
  setSelectedQuote
}: QuoteCardPropsType) {
  const isSelectedQuote = selectedQuote
    ? selectedQuote.name === quoteProduct.name
    : undefined;

  return (
    <div
      className={`flex flex-col m-8 shadow border-1 max-w-[400px] ${
        isSelectedQuote && "border-2 border-[#00005b]"
      }`}
    >
      <h1 className="text-2xl font-extrabold p-5 text-center text-slate-50 bg-[#ec4d33]">
        {quoteProduct.name}
      </h1>
      <span className="text-6xl font-bold p-3 text-center text-[#00005b]">
        {quoteProduct.prices?.price_after_discount_incl_tax}€
      </span>
      <ul className="p-5 ">
        {quoteProduct.guarantees.map((guarante) => {
          if (guarante.headline)
            return (
              <li key={guarante.label} className="p-5 flex items-center">
                <div className="p-3">
                  <IoMdCheckmarkCircle className="text-2xl" />
                </div>
                <span className="text-[#333] font-bold">
                  {guarante.headline}
                </span>
              </li>
            );
        })}
      </ul>
      <div
        className="mx-10 mb-10 p-3 self-center"
        onClick={() => setSelectedQuote(quoteProduct)}
      >
        <Button>SELECCIONAR</Button>
      </div>
    </div>
  );
}
