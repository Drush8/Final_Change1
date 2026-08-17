import Section from "../shared/Section";

import { companyIntro } from "../../data/about";

export default function CompanyIntro() {
  return (
    <Section>

      <div className="mx-auto max-w-4xl">

        <h2 className="font-serif text-4xl font-bold text-[#081D3A]">
          {companyIntro.title}
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

          {companyIntro.description
            .trim()
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

        </div>

      </div>

    </Section>
  );
}