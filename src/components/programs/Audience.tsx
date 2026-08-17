import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { audience } from "../../data/programs/audience";

export default function Audience() {
  return (
    <Section>

      <SectionTitle
        badge="Who Should Attend"
        title="Designed for Leaders at Every Stage"
        description="Our programs are suitable for professionals across leadership levels and industries."
      />

      <div className="flex flex-wrap justify-center gap-4">

        {audience.map((item) => (

          <span
            key={item}
            className="rounded-full bg-[#081D3A] px-6 py-3 text-sm font-medium text-white"
          >
            {item}
          </span>

        ))}

      </div>

    </Section>
  );
}