import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import ComparisonCard from "../shared/ComparisonCard";
import PillarCard from "../shared/PillarCard";
import Button from "../shared/Button";

import {
  comparisonData,
  pillars,
} from "../../data/whyChoose";

export default function WhyKompasion() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge="Why Kompasion"
        title="Leadership Isn't About Titles. It's About Influence."
        description="We don't just teach leadership frameworks. We transform how professionals think, behave and inspire others through practical, human-centred leadership."
      />

      {/* Comparison */}

      <div className="mt-20 grid gap-8 lg:grid-cols-2">

        <ComparisonCard
          title={comparisonData.traditional.title}
          items={comparisonData.traditional.items}
        />

        <ComparisonCard
          title={comparisonData.kompasion.title}
          items={comparisonData.kompasion.items}
          positive
        />

      </div>

      {/* Pillars */}

      <div className="mt-28 text-center">

        <span className="uppercase tracking-[4px] text-[#D4A63A] font-semibold">
          The Kompasion Framework
        </span>

        <h2 className="mt-4 text-3xl font-bold font-serif text-[#0B1F3A] sm:text-4xl lg:text-5xl">
          Three Pillars of Transformational Leadership
        </h2>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        {pillars.map((pillar) => (

          <PillarCard
            key={pillar.title}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
          />

        ))}

      </div>

      {/* CTA */}

      <div className="mt-28 rounded-[32px] bg-gradient-to-r from-[#0B1F3A] to-[#123A67] px-12 py-20 text-center">

        <h2 className="text-3xl font-bold font-serif text-white sm:text-4xl lg:text-5xl">
          Ready to Lead With Purpose?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">

          Discover leadership programs designed to elevate confidence,
          execution excellence and emotional intelligence.

        </p>

        <Button className="mt-10">
          Explore Our Programs
        </Button>

      </div>

    </Section>
  );
}