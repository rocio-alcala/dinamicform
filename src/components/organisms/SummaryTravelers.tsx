import { useAppSelector } from "../../store/typedHooks";
import Traveler from "./Traveler";

export default function SummaryTravelers() {
  const travelers = useAppSelector((state) => state.travelers);
  console.log("travelers redux", travelers);
  if (Object.values(travelers).length === 0) {
    return <p>No hay travelers guardados</p>;
  }

  return (
    <div className="flex-col">
      {travelers.policyHolder && (
        <Traveler traveler={travelers.policyHolder} title="travelers.policyHolder.title" />
      )}
      {travelers.adults &&
        travelers.adults.map((adult) => (
          <Traveler key={adult.passport_number} traveler={adult} title="travelers.adult.title" />
        ))}
      {travelers.children &&
        travelers.children.map((children) => (
          <Traveler key={children.passport_number} traveler={children} title="travelers.child.title" />
        ))}
      {travelers.seniors &&
        travelers.seniors.map((seniors) => (
          <Traveler key={seniors.passport_number} traveler={seniors} title="travelers.senior.title" />
        ))}
    </div>
  );
}
