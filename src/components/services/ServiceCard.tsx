import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  outcomes,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A63A]/10">
        <Icon size={28} className="text-[#D4A63A]" />
      </div>

      <h3 className="font-serif text-xl font-bold text-[#081D3A]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {outcomes.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

    </div>
  );
}