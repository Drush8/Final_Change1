import type { LucideIcon } from "lucide-react";
import Card from "./Card";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <Card>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A63A]/10">
        <Icon size={30} className="text-[#D4A63A]" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#081D3A]">
        {title}
      </h3>

      <p className="mt-5 text-base leading-8 text-gray-600">
        {description}
      </p>
    </Card>
  );
}