import { useAppSelector } from "../../store/typedHooks";

export default function TravelersForm() {
  const quoteCriteria = useAppSelector((state) => state.quoteCriteria);
  const travelers = quoteCriteria.travelers;
  console.log("travelers",travelers);

  return <h1>Travelers form</h1>;
}
