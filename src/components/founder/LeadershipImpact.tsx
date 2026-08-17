import { motion } from "framer-motion";

const stats = [
  {
    value: "22+",
    label: "Years of Leadership Experience",
  },
  {
    value: "150+",
    label: "Professionals Mentored",
  },
  {
    value: "$120M+",
    label: "Portfolio Managed",
  },
  {
    value: "3",
    label: "PMOs Established",
  },
];

function LeadershipImpact() {
  return (
    <section className="bg-[#081D3A] py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              className="rounded-3xl bg-white/5 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-[#D4A63A] sm:text-5xl">
                {item.value}
              </h3>

              <p className="mt-4 text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipImpact;