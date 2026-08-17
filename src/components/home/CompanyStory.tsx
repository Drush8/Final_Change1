import {
  Eye,
  Target,
  MapPin,
  CalendarDays,
} from "lucide-react";

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import Card from "../shared/Card";

import { companyData } from "../../data/home";

const cards = [
  {
    icon: CalendarDays,
    title: "Established",
    text: companyData.founded,
  },
  {
    icon: Eye,
    title: "Vision",
    text: companyData.vision,
  },
  {
    icon: Target,
    title: "Mission",
    text: companyData.mission,
  },
  {
    icon: MapPin,
    title: "Location",
    text: companyData.location,
  },
];

export default function CompanyStory() {
  return (
    <Section className="bg-white">
      <SectionTitle
        badge="Company Overview"
        title="Building Leaders for Tomorrow"
        description={companyData.introduction}
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A63A]/10">
                <Icon
                  size={30}
                  className="text-[#D4A63A]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#081D3A]">
                {item.title}
              </h3>

              <div className="mx-auto mt-4 h-[2px] w-12 bg-[#D4A63A]" />

              <p className="mt-6 text-base leading-8 text-gray-600">
                {item.text}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}