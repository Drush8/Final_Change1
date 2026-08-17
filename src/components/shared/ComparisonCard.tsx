import { CheckCircle2, XCircle } from "lucide-react";

interface Props {
  title: string;
  items: string[];
  positive?: boolean;
}

export default function ComparisonCard({
  title,
  items,
  positive = false,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <h3 className="mb-8 text-3xl font-serif font-bold text-[#0B1F3A]">
        {title}
      </h3>

      <div className="space-y-5">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">

            {positive ? (
              <CheckCircle2
                size={22}
                className="mt-1 text-[#D4A63A]"
              />
            ) : (
              <XCircle
                size={22}
                className="mt-1 text-gray-400"
              />
            )}

            <span className="text-lg text-gray-700">
              {item}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}