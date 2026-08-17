import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../shared/Button";
import Section from "../shared/Section";

import { programsCTA } from "../../data/programs/cta";

export default function ProgramsCTA() {
  const navigate = useNavigate();

  return (
    <Section className="bg-gradient-to-br from-[#081D3A] via-[#103A67] to-[#081D3A]">

      <div className="mx-auto max-w-4xl text-center">

        <span className="inline-block rounded-full bg-[#D4A63A]/15 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
          {programsCTA.badge}
        </span>

        <h2 className="mt-6 font-serif text-4xl font-bold text-white">
          {programsCTA.title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {programsCTA.description}
        </p>

        <Button
          className="mt-8"
          onClick={() => navigate("/contact")}
        >
          <span className="flex items-center gap-2">
            {programsCTA.button}
            <ArrowRight size={18} />
          </span>
        </Button>

      </div>

    </Section>
  );
}