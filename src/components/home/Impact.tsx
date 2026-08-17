import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import StatCard from "../shared/StatCard";

import { impactData } from "../../data/home";

export default function Impact() {
  return (
    <Section className="bg-[#F8FAFC]">
      <SectionTitle
        badge="Our Impact"
        title="Leadership Measured by Outcomes"
        description="Our journey reflects decades of executive leadership, strategic program delivery and people transformation."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {impactData.map((item) => (
          <StatCard
            key={item.label}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
    </Section>
  );
}