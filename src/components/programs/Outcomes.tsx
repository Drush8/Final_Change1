import { CheckCircle2 } from "lucide-react";

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { outcomes } from "../../data/programs/outcomes";

export default function Outcomes() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge="Program Outcomes"
        title="What Participants Will Gain"
        description="Every engagement is designed to create measurable growth in leadership capability and business performance."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {outcomes.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border bg-white p-5 shadow-sm"
          >

            <CheckCircle2
              size={20}
              className="text-[#D4A63A]"
            />

            <span>{item}</span>

          </div>

        ))}

      </div>

    </Section>
  );
}