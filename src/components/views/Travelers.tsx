import { useAppSelector } from "../../store/typedHooks";
import TravelersForm from "../organisms/TravelersForm";

export default function Travelers() {
  const quoteCriteria = useAppSelector((state) => state.quoteCriteria);
  const travelers = quoteCriteria.travelers;

  return <>{travelers ? <TravelersForm travelers={travelers as Record<string,number>} /> : null}</>;
}
