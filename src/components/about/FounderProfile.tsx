import {
  Award,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

import Section from "../shared/Section";
import Badge from "../shared/Badge";

import founderImage from "../../assets/images/founder.jpeg";

import { founder } from "../../data/about/founder";

export default function FounderProfile() {
  return (
    <Section>

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <Badge>
            Meet the Founder
          </Badge>

          <h2 className="mt-5 font-serif text-3xl font-bold text-[#081D3A] sm:text-4xl lg:text-5xl">
            Leadership Built Through Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every framework taught at Kompasion Consultancy has been
            tested in boardrooms, project reviews and executive
            leadership meetings before reaching the classroom.
          </p>

        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <div>

            <img
              src={founderImage}
              alt={founder.name}
              className="mx-auto rounded-3xl shadow-2xl"
            />

          </div>

          {/* Content */}

          <div>

            <span className="rounded-full bg-[#D4A63A]/15 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
              {founder.experience} Executive Leadership
            </span>

            <h3 className="mt-6 font-serif text-4xl font-bold text-[#081D3A]">
              {founder.name}
            </h3>

            <p className="mt-2 text-xl text-[#123A67]">
              {founder.role}
            </p>

            <p className="mt-8 leading-8 text-gray-600">
              {founder.description}
            </p>

            <div className="mt-10 space-y-4">

              {founder.achievements.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    className="mt-1 text-[#D4A63A]"
                    size={22}
                  />

                  <p>{item}</p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Certifications */}

        <div className="mt-20 rounded-3xl border bg-[#F8FAFC] p-10">

          <h3 className="mb-8 text-2xl font-bold text-[#081D3A]">
            Certifications & Professional Credentials
          </h3>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {founder.certifications.map((cert) => (

              <div
                key={cert}
                className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm"
              >

                <BadgeCheck
                  className="text-[#D4A63A]"
                  size={22}
                />

                <span>{cert}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Award */}

        <div className="mt-12 rounded-3xl border border-[#D4A63A]/30 bg-[#FFF9EA] p-8">

          <div className="flex items-center gap-4">

            <Award
              className="text-[#D4A63A]"
              size={40}
            />

            <div>

              <h4 className="text-2xl font-bold text-[#081D3A]">
                {founder.award.title}
              </h4>

              <p className="text-gray-600">
                {founder.award.organisation} • {founder.award.year}
              </p>

            </div>

          </div>

        </div>

      </div>

    </Section>
  );
}