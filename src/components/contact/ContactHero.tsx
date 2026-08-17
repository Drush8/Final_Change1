import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { contactHero } from "../../data/contact/hero";

export default function ContactHero() {
  return (
    <Section className="bg-[#F8FAFC]">
      <SectionTitle
        badge={contactHero.badge}
        title={contactHero.title}
        description={contactHero.description}
      />
    </Section>
  );
}