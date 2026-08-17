import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import Timeline from "../shared/Timeline";

import { timelineData } from "../../data/home";

export default function ExecutiveJourney() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge="Executive Journey"
        title="22+ Years of Leadership Excellence"
        description="A career built on transforming teams, delivering complex programs and shaping organizational success across leading life sciences companies."
      />

      <div className="mx-auto max-w-5xl">

        {timelineData.map((item, index) => (

          <Timeline
            key={item.year}
            year={item.year}
            duration={item.duration}
            company={item.company}
            designation={item.designation}
            description={item.description}
            isLast={index === timelineData.length - 1}
          />

        ))}

      </div>

    </Section>
  );
}