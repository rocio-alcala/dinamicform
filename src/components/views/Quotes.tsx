import { useState } from "react";
import { useAppSelector } from "../../store/typedHooks";
import QuoteCard from "../organisms/QuoteCard";
import Button from "../bits/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitSelectedQuote } from "../../store/selectedQuoteSlice";

export interface Quote {
  productName: string;
  productPrice: number;
  productLabel: string;
  productDescription: Record<string, string>[];
}

export default function Quotes() {
  const quotes = useAppSelector((state) => state.quote);
  const [selectedQuote, setSelectedQuote] = useState<Quote>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    if (selectedQuote) {
      dispatch(submitSelectedQuote(selectedQuote));
      navigate("/travelers");
    }
  }

  return (
    <>
      <h1 className="text-4xl font-extrabold p-20 text-center text-slate-50 bg-gray-700 ">
        Elegi tu seguro
      </h1>
      <div className="flex flex-col m-16 p-10 shadow-2xl bg-[#f5f5f5]">
        <div className="p-10">
          <div className="flex">
            {quotes.length > 0 ? (
              quotes.map((quote: Quote) => (
                <QuoteCard
                selectedQuote={selectedQuote}
                  key={quote.productLabel}
                  quote={quote}
                  setSelectedQuote={setSelectedQuote}
                ></QuoteCard>
              ))
            ) : (
              <p>No existen quotes</p>
            )}
          </div>
        </div>
        <div className="mx-10 mb-10 text-end p-3 justify-self-end">
          <Button
            onClick={handleClick}
            disabled={selectedQuote ? false : true}
            text="CONTINUAR"
          ></Button>
          {selectedQuote ? null : (
            <p className="mt-5 font-bold text-gray-900">
              No hay seguro seleccionado
            </p>
          )}
        </div>
      </div>
    </>
  );
}
