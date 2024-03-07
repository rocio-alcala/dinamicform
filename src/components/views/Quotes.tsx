import { useState } from "react";
import { useAppSelector } from "../../store/typedHooks";
import QuoteCard from "../organisms/QuoteCard";
import Button from "../bits/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitSelectedQuote } from "../../store/selectedQuoteSlice";
import { GrFormNextLink } from "react-icons/gr";
import { QuoteProduct } from "../../models/quote";
import { useTranslation } from "react-i18next";

export default function Quotes() {
  const quote = useAppSelector((state) => state.quote);
  const storeSelectedQuote = useAppSelector((state) => state.selectedQuote);
  const quoteProducts = quote.products;
  const [selectedQuote, setSelectedQuote] = useState<QuoteProduct | undefined>(
    storeSelectedQuote.name ? storeSelectedQuote : undefined
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation("global");

  function handleClick() {
    if (selectedQuote) {
      dispatch(submitSelectedQuote(selectedQuote));
      navigate("/travelers");
    }
  }

  return (
    <div className="font-AXA relative">
      <h1
        className="relative z-10 text-4xl w-full font-extrabold p-20 pb-36 text-center text-slate-50 bg-gray-700 "
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {t("quoting.details.title")}
      </h1>
      <div className="relative z-20 top-[-5rem] flex flex-col mx-16 p-32 border-2 shadow-2xl bg-[#f5f5f5]">
        <div className="p-10">
          <div className="flex flex-wrap justify-center">
            {quoteProducts.length > 0 ? (
              quoteProducts.map((quoteProduct: QuoteProduct) => (
                <QuoteCard
                  selectedQuote={selectedQuote}
                  key={quoteProduct.product_code}
                  quoteProduct={quoteProduct}
                  setSelectedQuote={setSelectedQuote}
                ></QuoteCard>
              ))
            ) : (
              <p>No existen quotes</p>
            )}
          </div>
        </div>
        <div className="mx-10 mb-10 p-3 flex justify-between">
          <Link to={"/"}>
            <Button color="bg-red-500  hover:bg-red-700">ATRAS</Button>
          </Link>
          <div className="place-self-end flex-col">
            <Button
              onClick={handleClick}
              disabled={selectedQuote ? false : true}
            >
              CONTINUAR <GrFormNextLink className="text-2xl" />
            </Button>
            {selectedQuote ? null : (
              <p className="mt-5 font-bold text-gray-900">
                No hay seguro seleccionado
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
