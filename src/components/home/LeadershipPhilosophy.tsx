import { Target, TrendingUp, HeartHandshake } from "lucide-react";

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import Card from "../shared/Card";
import { philosophyData } from "../../data/home";



const icons = [Target, TrendingUp, HeartHandshake];

export default function LeadershipPhilosophy() {
  return (
    <Section className="bg-white">

      <SectionTitle
        badge="Our Philosophy"
        title="Lead • Perform • Care"
        description="Leadership is not taught through presentations. It is cultivated through experience, purpose, accountability and continuous transformation."
      />

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">

        {philosophyData.map((item, index) => {

          const Icon = icons[index];

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

              <h3 className="mt-6 text-3xl font-bold text-[#081D3A]">

                {item.title}

              </h3>

              <div className="mx-auto mt-4 h-[2px] w-14 rounded bg-[#D4A63A]" />

              <p className="mt-6 text-base leading-8 text-gray-600">

                {item.description}

              </p>

            </Card>

          );

        })}

      </div>

    </Section>
  );
}