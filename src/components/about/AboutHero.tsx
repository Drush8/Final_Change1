import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { aboutHero } from "../../data/about";

export default function AboutHero() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge={aboutHero.badge}
        title={aboutHero.title}
        description={aboutHero.description}
      />

    </Section>
  );
}