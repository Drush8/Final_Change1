import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { programsHero } from "../../data/programs/hero";

export default function ProgramsHero() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge={programsHero.badge}
        title={programsHero.title}
        description={programsHero.description}
      />

    </Section>
  );
}