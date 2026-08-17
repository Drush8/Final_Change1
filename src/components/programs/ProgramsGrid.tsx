import { useSearchParams } from "react-router-dom";

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import ProgramCard from "./ProgramCard";

import { signaturePrograms } from "../../data/programs/programs";

const categoryMap: Record<string, string[]> = {
  executive: [
    "Navigator Compass",
    "Navigator Cruise",
    "Navigator Anchor",
  ],
  project: [
    "Navigator Landmark",
    "Forge",
    "Nexus",
  ],
  scientific: [
    "The Scientist's Edge",
  ],
  emotional: [
    "Compassion Code",
  ],
};

const categoryTitles: Record<string, string> = {
  executive: "Executive Leadership Programs",
  project: "Project Excellence Programs",
  scientific: "Scientific Intelligence Programs",
  emotional: "Emotional Intelligence Programs",
};

export default function ProgramsGrid() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  const allowedPrograms = categoryMap[category];

  const visiblePrograms = allowedPrograms
    ? signaturePrograms.filter((program) =>
        allowedPrograms.includes(program.title)
      )
    : signaturePrograms;

  return (
    <Section>
      <SectionTitle
        badge={category ? "Selected Programs" : "Flagship Programs"}
        title={
          category
            ? categoryTitles[category]
            : "Learning Experiences That Create Lasting Change"
        }
        description={
          category
            ? "Explore the programs aligned with this leadership and transformation area."
            : "Every program is built around practical leadership challenges, executive experience and measurable outcomes."
        }
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {visiblePrograms.map((program) => (
          <ProgramCard
            key={program.title}
            {...program}
          />
        ))}
      </div>
    </Section>
  );
}
