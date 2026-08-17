import { motion } from "framer-motion";
import { ArrowRight, Target, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
              About Kompasion
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Building Leaders.
              <br />
              Delivering Excellence.
              <br />
              Inspiring Transformation.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Kompasion Consultancy partners with organisations and
              professionals to strengthen leadership capability,
              improve project execution and accelerate business
              transformation through practical consulting,
              coaching and AI-enabled solutions.
            </p>

            <div className="mt-10">
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#081D3A] px-7 py-4 font-semibold text-white transition hover:bg-[#123E6E]"
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* MISSION & VISION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >

            {/* OUR MISSION */}
            <div className="relative overflow-hidden rounded-3xl bg-[#081D3A] p-7 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#D4A63A]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A63A]/10">
                  <Target
                    size={22}
                    className="text-[#D4A63A]"
                  />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold">
                  Our Mission
                </h3>

                <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-300">
                  To empower professionals and organisations through
                  leadership coaching, project excellence, AI-enabled
                  transformation and emotional intelligence.
                </p>
              </div>
            </div>

            {/* OUR VISION */}
            <div className="relative overflow-hidden rounded-3xl bg-[#123E6E] p-7 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#D4A63A]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D4A63A]/10">
                  <Sparkles
                    size={22}
                    className="text-[#D4A63A]"
                  />
                </div>

                <h3 className="mt-5 font-serif text-2xl font-bold">
                  Our Vision
                </h3>

                <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-300">
                  To become the most trusted executive leadership consultancy
                  that develops leaders with purpose, compassion and measurable
                  business impact.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
