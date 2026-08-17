import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import {
  industries,
  clientStrip,
} from "../../data/about";

export default function IndustryExpertise() {
  return (
    <Section>

      <SectionTitle
        badge="Industry Expertise"
        title="Leadership Across Diverse Industries"
        description="Our experience spans highly regulated industries, research-driven organisations and corporate enterprises, enabling us to deliver practical leadership solutions tailored to real business challenges."
      />

      {/* Industry Cards */}

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {industries.map((industry) => (

          <div
            key={industry.title}
            className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="mb-5 text-4xl sm:text-5xl">
              {industry.icon}
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#081D3A]">
              {industry.title}
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              {industry.description}
            </p>

          </div>

        ))}

      </div>

      {/* Client Strip */}

      <div className="mt-24">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            Trusted Experience Across
          </span>

        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          {clientStrip.map((client) => (

            <div
              key={client}
              className="rounded-full border border-[#D4A63A]/20 bg-[#FFF9EA] px-6 py-3 text-sm font-semibold text-[#081D3A] shadow-sm transition hover:shadow-md"
            >
              {client}
            </div>

          ))}

        </div>

      </div>

    </Section>
  );
}