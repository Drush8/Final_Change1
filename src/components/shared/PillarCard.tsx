import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PillarCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A63A] hover:shadow-xl">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF7E6]">

        <Icon
          size={36}
          className="text-[#D4A63A]"
        />

      </div>

      <h3 className="mb-4 font-serif text-3xl font-bold text-[#0B1F3A]">
        {title}
      </h3>

      <p className="leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
}