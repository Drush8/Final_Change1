import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Section from "../shared/Section";
import Button from "../shared/Button";

import { aboutCTA } from "../../data/about";

export default function AboutCTA() {
  const navigate = useNavigate();

  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#081D3A] via-[#0D2D57] to-[#123A67]">

      {/* Decorative Background */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span className="inline-block rounded-full bg-[#D4A63A]/15 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
          {aboutCTA.badge}
        </span>

        <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-white lg:text-5xl">
          {aboutCTA.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {aboutCTA.description}
        </p>

        <Button
          className="mt-10"
          onClick={() => navigate("/contact")}
        >
          <span className="flex items-center gap-2">
            {aboutCTA.button}
            <ArrowRight size={18} />
          </span>
        </Button>

      </div>

    </Section>
  );
}