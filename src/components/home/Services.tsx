import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  HeartHandshake,
  LineChart,
  Users2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const services = [
  {
    title: "Executive Leadership",
    description:
      "Develop confident leaders who inspire teams, drive innovation, and create lasting organisational impact.",
    icon: Users2,
  },
  {
    title: "Project Excellence",
    description:
      "Strengthen project governance, delivery capability, and PMO maturity through proven frameworks.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI Transformation",
    description:
      "Enable responsible AI adoption that improves decision-making, productivity, and business outcomes.",
    icon: BrainCircuit,
  },
  {
    title: "Emotional Intelligence",
    description:
      "Build resilient teams through empathy, collaboration, communication, and people-first leadership.",
    icon: HeartHandshake,
  },
  {
    title: "Organizational Output & Delivery Solutions",
    description:
      "Improve organizational performance by identifying root causes and delivering tailored solutions across PMO, business consultancy, customer relationships, feedback and execution.",
    icon: LineChart,
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-slate-50 py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            Our Expertise
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Solutions That Create
            <br />
            Sustainable Impact
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We partner with organisations to strengthen leadership,
            improve execution and prepare for the future through
            practical consulting, coaching and transformation.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A63A]/10">
                  <Icon
                    size={30}
                    className="text-[#D4A63A]"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button
                  onClick={() => navigate("/services")}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#123E6E] transition group-hover:gap-4"
                >
                  Learn More

                  <ArrowRight size={18} />
                </button>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => navigate("/services")}
            className="rounded-xl bg-[#081D3A] px-8 py-4 font-semibold text-white transition hover:bg-[#123E6E]"
          >
            Explore All Services
          </button>
        </motion.div>

      </div>
      </section>

    </>
  );
}