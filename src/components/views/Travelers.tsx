import { useAppSelector } from "../../store/typedHooks";
import TravelersForm from "../organisms/TravelersForm";

export default function Travelers() {
  const quoteCriteria = useAppSelector((state) => state.quoteCriteria);
  console.log("@Redux Quote Criterie", quoteCriteria);
  const travelers = quoteCriteria.travelers;
  console.log("@Redux Travelers", travelers);

  return <>{travelers ? <TravelersForm travelers={travelers}/> : null}</>;
}