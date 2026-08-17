import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FounderHero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#081D3A] pb-16 pt-8 md:pb-24 md:pt-12">

      {/* Background glow */}

      <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-[#D4A63A]/10 blur-[140px] sm:h-[500px] sm:w-[500px]" />

      <div className="absolute bottom-0 left-0 h-[180px] w-[180px] rounded-full bg-cyan-400/5 blur-[120px] sm:h-[350px] sm:w-[350px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left side */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full border border-[#D4A63A] px-5 py-2 text-sm uppercase tracking-[4px] text-[#D4A63A]">
            Meet Dr. Nagesh
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Building Leaders.
            <br />
            Creating Impact.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            More than two decades of leadership experience across
            project management, business transformation, operational
            excellence, consulting, mentoring and executive coaching.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#D4A63A] px-8 py-4 font-semibold text-[#081D3A] transition hover:scale-105"
          >
            Connect With Us

            <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Right side */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="overflow-hidden rounded-[32px] bg-white p-6 shadow-2xl">

            <img
              src="/images/founder.jpeg"
              alt="Dr. K. V. Nageshwar Rao"
              className="h-[280px] w-full rounded-3xl object-cover sm:h-[400px] lg:h-[500px]"
            />

            <div className="mt-8">

              <h3 className="text-3xl font-bold text-slate-900">
                Dr. K. V. Nageshwar Rao
              </h3>

              <p className="mt-2 text-slate-500">
                Founder & Principal Consultant
              </p>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5 italic text-slate-600">
                "Leadership is not about authority. It is about
                inspiring people to create meaningful change."
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}