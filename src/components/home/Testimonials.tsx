import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const stats = [
  {
    value: "22+",
    label: "Years Leadership Experience",
  },
  {
    value: "150+",
    label: "Professionals Mentored",
  },
  {
    value: "$120M+",
    label: "Portfolio Managed",
  },
];

const testimonials = [
  {
    name: "Corporate Leadership Program",
    company: "Manufacturing Sector",
    feedback:
      "The leadership coaching transformed the way our managers think, collaborate and deliver results. The impact was visible across teams within a few months.",
  },
  {
    name: "Project Excellence Initiative",
    company: "Technology Services",
    feedback:
      "Kompasion brought practical strategies that improved governance, execution and stakeholder confidence. The sessions were engaging and immediately applicable.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-14 md:py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            Client Success
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Delivering Measurable
            <br />
            Leadership Impact
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our experience spans leadership development,
            project excellence and organisational transformation
            across diverse industries.
          </p>

        </motion.div>

        {/* Statistics */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {stats.map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-10 text-center shadow-sm"
            >

              <h3 className="text-4xl font-bold text-[#D4A63A] sm:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-4 text-slate-600">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Testimonials */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >

              <Quote
                size={42}
                className="text-[#D4A63A]"
              />

              <p className="mt-6 leading-8 text-slate-600 italic">
                "{item.feedback}"
              </p>

              <div className="mt-8 flex">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    fill="#D4A63A"
                    color="#D4A63A"
                  />

                ))}

              </div>

              <div className="mt-8">

                <h4 className="font-bold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-slate-500">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}