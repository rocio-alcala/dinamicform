import { useAppSelector } from "../../store/typedHooks";
import TravelersForm from "../organisms/TravelersForm";

export default function Travelers() {
  const quoteCriteria = useAppSelector((state) => state.quoteCriteria);
  const storeTravelersCount = quoteCriteria.travelers;

  return (
    <>
      {storeTravelersCount ? (
        <TravelersForm travelersCount={storeTravelersCount as Record<string, number>} />
      ) : (
        <p>No existen travelers</p>
      )}
    </>
  );
}
