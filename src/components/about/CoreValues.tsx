import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { coreValues } from "../../data/about";

export default function CoreValues() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge="Core Values"
        title="The Principles That Guide Every Engagement"
        description="Our values shape every coaching conversation, every leadership program and every organisational transformation we deliver."
      />

      <div className="mt-16 space-y-8">

        {coreValues.map((value) => (

          <div
            key={value.number}
            className="flex flex-col gap-6 rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-start"
          >

            {/* Number */}

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A63A] text-2xl font-bold text-white">
              {value.number}
            </div>

            {/* Content */}

            <div className="flex-1">

              <h3 className="font-serif text-2xl font-bold text-[#081D3A]">
                {value.title}
              </h3>

              <p className="mt-3 leading-8 text-gray-600">
                {value.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </Section>
  );
}