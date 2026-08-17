import Section from "../shared/Section";

import { visionMission } from "../../data/about";

export default function VisionMission() {
  return (
    <Section className="bg-[#F8FAFC]">

      <div className="grid gap-10 lg:grid-cols-2">

        <div className="rounded-3xl border bg-white p-10 shadow-sm">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            {visionMission.vision.title}
          </span>

          <h3 className="mt-5 font-serif text-3xl font-bold text-[#081D3A]">
            {visionMission.vision.subtitle}
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            {visionMission.vision.description}
          </p>

        </div>

        <div className="rounded-3xl border bg-white p-10 shadow-sm">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            {visionMission.mission.title}
          </span>

          <h3 className="mt-5 font-serif text-3xl font-bold text-[#081D3A]">
            {visionMission.mission.subtitle}
          </h3>

          <p className="mt-6 leading-8 text-gray-600">
            {visionMission.mission.description}
          </p>

        </div>

      </div>

    </Section>
  );
}