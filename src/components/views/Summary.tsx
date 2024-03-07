import { GrFormNextLink } from "react-icons/gr";
import Button from "../bits/Button";
import SummaryQuoteCriteria from "../organisms/SummaryQuoteCriteria";
import SummaryTravelers from "../organisms/SummaryTravelers";
import SummarySelectedQuote from "../organisms/SummarySelectedQuote";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Summary() {
  const { t } = useTranslation("global");

  return (
    <div className="font-AXA relative">
      <h1
        className="relative z-10 text-4xl w-full font-extrabold p-20 pb-36 text-center text-slate-50 bg-gray-700"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      >
        {t("travel.summary.tripSummaryTitle")}
      </h1>
      <div className="relative z-20 top-[-5rem] flex flex-col mx-16 p-24 border-2 shadow-2xl bg-[#f5f5f5]">
        <div className="p-10">
          <h1 className="text-gray-950 text-2xl font-bold">
            {t("travel.checkout.tripSummaryTitle")}
          </h1>
          <SummaryQuoteCriteria />
        </div>
        <div></div>
        <div className="p-10">
          <h1 className="text-gray-950 text-2xl font-bold">
            {t("travel.checkout.subscribersSummaryTitle")}
          </h1>
          <SummaryTravelers />
        </div>
        <div className="p-10">
          <h1 className="text-gray-950 text-2xl font-bold">
            {t("travel.checkout.formulaSummaryTitle")}
          </h1>
          <SummarySelectedQuote />
        </div>
        <div className="mx-10 mb-10 p-3 flex justify-between">
          <Link to={"/travelers"}>
            <Button color="bg-red-500  hover:bg-red-700">
              ATRAS
            </Button>
          </Link>
          <Button>
            CONTINUAR <GrFormNextLink className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}
