import Section from "../shared/Section";
import Badge from "../shared/Badge";

import { leadershipTimeline } from "../../data/about/timeline";

export default function LeadershipTimeline() {
  return (
    <Section className="bg-[#F8FAFC]">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <Badge>
            Executive Journey
          </Badge>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#081D3A] sm:text-4xl lg:text-5xl">
            Leadership Built Over Two Decades
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every milestone reflects real leadership experience gained
            through scientific innovation, strategic program management
            and executive decision-making.
          </p>

        </div>

        <div className="mt-20">

          {leadershipTimeline.map((item, index) => (

            <div
              key={item.year}
              className="relative flex gap-8 pb-16"
            >

              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D4A63A] text-xl font-bold text-white shadow-lg">

                  {item.year}

                </div>

                {index !== leadershipTimeline.length - 1 && (

                  <div className="mt-3 h-full w-[3px] bg-[#D4A63A]/30" />

                )}

              </div>

              {/* Card */}

              <div className="flex-1 rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <h3 className="font-serif text-3xl font-bold text-[#081D3A]">

                  {item.company}

                </h3>

                <p className="mt-2 font-semibold text-[#D4A63A]">

                  {item.designation}

                </p>

                <p className="mt-5 leading-8 text-gray-600">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Section>
  );
}