import { useAppSelector } from "../../store/typedHooks";
import Traveler from "./Traveler";

export default function SummaryTravelers() {
  const travelers = useAppSelector((state) => state.travelers);
  if (Object.values(travelers).length === 0) {
    return <p>No hay travelers guardados</p>;
  }

  return (
    <div className="flex-col">
      {travelers.policyHolder && (
        <Traveler traveler={travelers.policyHolder} title="travelers.policyHolder.title" />
      )}
      {travelers.adults &&
        travelers.adults.map((adult, index) => (
          <Traveler key={`travelers.adult.title+${index}`} traveler={adult} title="travelers.adult.title" />
        ))}
      {travelers.children &&
        travelers.children.map((children,index) => (
          <Traveler key={`travelers.child.title+${index}`} traveler={children} title="travelers.child.title" />
        ))}
      {travelers.seniors &&
        travelers.seniors.map((seniors,index) => (
          <Traveler key={`travelers.senior.title+${index}`} traveler={seniors} title="travelers.senior.title" />
        ))}
    </div>
  );
}
