import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  audience: string[];
}

export default function ProgramCard({
  icon: Icon,
  title,
  subtitle,
  description,
  audience,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A63A]/10">
        <Icon
          size={30}
          className="text-[#D4A63A]"
        />
      </div>

      <h3 className="font-serif text-2xl font-bold text-[#081D3A]">
        {title}
      </h3>

      <p className="mt-2 font-medium text-[#D4A63A]">
        {subtitle}
      </p>

      <p className="mt-5 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {audience.map((item) => (

          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium"
          >
            {item}
          </span>

        ))}

      </div>

    </div>
  );
}