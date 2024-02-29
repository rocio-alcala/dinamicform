
interface SummaryItemPropsType {
  label: string;
  info: string;
}

export default function SummaryItem({ label, info }: SummaryItemPropsType) {
  return (
    <div className="flex p-2">
      <p className="text-start text-gray-500 font-medium min-w-[40%]">
        {label}
      </p>
      <p className="text-start text-gray-950 font-bold min-w-[40%]">{info}</p>
    </div>
  );
}
