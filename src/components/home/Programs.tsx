import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Flame,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    title: "Navigator Series",
    description:
      "Executive leadership coaching designed to help professionals grow into confident, strategic leaders.",
    icon: Compass,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Forge",
    description:
      "A transformational program focused on project excellence, execution, and organisational leadership.",
    icon: Flame,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "The Compassion Code",
    description:
      "Develop emotional intelligence, resilience, empathy, and people-first leadership for modern workplaces.",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
];

export default function Programs() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            Featured Programs
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Learning Experiences
            <br />
            That Create Leaders
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Carefully designed programs that help individuals,
            teams and organisations unlock leadership potential
            and create lasting business impact.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Top Gradient */}

                <div
                  className={`h-2 bg-gradient-to-r ${program.color}`}
                />

                <div className="p-8">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                    <Icon
                      size={30}
                      className="text-[#123E6E]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {program.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">
                    {program.description}
                  </p>

                  <button
                    onClick={() => navigate("/programs")}
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#123E6E] transition group-hover:gap-4"
                  >
                    Discover Program

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-[#081D3A] px-10 py-14 text-center text-white"
        >

          <h3 className="text-3xl font-bold">
            Looking for a customised learning journey?
          </h3>

          <p className="mx-auto mt-5 w-full max-w-3xl text-center text-lg leading-8 text-slate-300">
            We work with organisations to design tailored leadership
            and transformation programs that align with business goals
            and team development needs.
          </p>

          <button
            onClick={() => navigate("/programs")}
            className="mt-10 rounded-xl bg-[#D4A63A] px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            View All Programs
          </button>

        </motion.div>

      </div>
    </section>
  );
}