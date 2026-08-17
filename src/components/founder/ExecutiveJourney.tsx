import { motion } from "framer-motion";

const timeline = [
  {
    year: "2003",
    title: "Leadership Journey Begins",
    description:
      "Started a professional journey focused on leadership, quality, and operational excellence.",
  },

  {
    year: "2010",
    title: "Enterprise Transformation",
    description:
      "Led large-scale transformation initiatives across multiple industries and organisations.",
  },

  {
    year: "2018",
    title: "Executive Coaching",
    description:
      "Focused on leadership development, mentoring, and organisational transformation.",
  },

  {
    year: "2026",
    title: "Kompasion Consultancy",
    description:
      "Established Kompasion Consultancy to create leaders who inspire change and deliver impact.",
  },
];

export default function ExecutiveJourney() {
  return (
    <section className="bg-slate-50 py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            Executive Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            A Journey of Leadership,
            <br />
            Transformation and Impact
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            More than two decades of experience in mentoring,
            consulting, business transformation, project excellence,
            and organisational leadership.
          </p>

        </div>

        <div className="relative mt-20">

          <div className="absolute left-6 top-0 h-full w-[2px] bg-slate-200 lg:left-1/2" />

          <div className="space-y-12">

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 p-4">

                  <div className="rounded-3xl bg-white p-8 shadow-sm">

                    <span className="font-semibold text-[#D4A63A]">
                      {item.year}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                </div>

                <div className="hidden w-16 lg:block" />
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}