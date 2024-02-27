import Button from "../bits/Button";
import { Quote } from "../views/Quotes";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface QuoteCardPropsType {
  selectedQuote: Quote | undefined;
  quote: Quote;
  setSelectedQuote: React.Dispatch<React.SetStateAction<Quote | undefined>>;
}

export default function QuoteCard({
  selectedQuote,
  quote,
  setSelectedQuote
}: QuoteCardPropsType) {
  const isSelectedQuote = selectedQuote
    ? selectedQuote.productName === quote.productName
    : undefined;

  return (
    <div
      className={`flex flex-col m-8 shadow border-1 ${
        isSelectedQuote && "border-2 border-[#00005b]"
      }`}
    >
      <h1 className="text-2xl font-extrabold p-5 text-center text-slate-50 bg-[#ec4d33]">
        {quote.productName}
      </h1>
      <span className="text-6xl font-bold p-3 text-center text-[#00005b]">
        {quote.productPrice}€
      </span>
      <ul className="p-5 ">
        {quote.productDescription.map((item) => (
          <li key={item.description} className="p-5 flex items-center">
            <div className="p-3">
              <IoMdCheckmarkCircle className="text-2xl" />
            </div>
            <span className="text-[#333] font-bold">{item.description}</span>
          </li>
        ))}
      </ul>
      <div
        className="mx-10 mb-10 text-center p-3"
        onClick={() => setSelectedQuote(quote)}
      >
        <Button text="SELECCIONAR"></Button>
      </div>
    </div>
  );
}
