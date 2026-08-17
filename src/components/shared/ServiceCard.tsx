import type { ElementType } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Card from "./Card";

interface Props {
  icon: ElementType;
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
    <Card className="group h-full">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A63A]/10 transition-all duration-300 group-hover:bg-[#D4A63A]/20">
        <Icon size={30} className="text-[#D4A63A]" />
      </div>

      <div className="mt-6 min-h-[72px]">
        <h3 className="text-2xl font-bold text-[#081D3A]">
          {title}
        </h3>
      </div>

      <div className="h-[2px] w-14 rounded bg-[#D4A63A]" />

      <div className="mt-5 flex-grow">
        <p className="text-base leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-6 space-y-3">
          {outcomes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-[#0D8B84]"
              />

              <span className="text-sm text-gray-700">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-8 flex items-center gap-3 font-semibold text-[#081D3A] transition hover:text-[#D4A63A]">
        Learn More

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </Card>
  );
}