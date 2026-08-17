import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramStage({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border border-[#E8EDF4] bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A63A]/10">
        <Icon size={26} className="text-[#D4A63A]" />
      </div>

      <h3 className="mt-5 text-xl font-bold text-[#081D3A]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}