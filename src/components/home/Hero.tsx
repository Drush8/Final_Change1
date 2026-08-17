import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import founder from "../../assets/images/founder.jpeg";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#081D3A] pt-0 pb-16 text-white md:pb-20">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#D4A63A]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-12">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >

            <span className="relative z-10 mb-6 inline-block rounded-full border border-[#D4A63A] px-4 py-2 text-xs uppercase tracking-[3px] text-[#D4A63A] sm:text-sm sm:tracking-[4px]">
              Lead • Perform • Care
            </span>

            <h1 className="relative z-10 mt-2 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Building Leaders
              <br />
              Creating Impact
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-slate-300">
              Kompasion Consultancy partners with organisations
              to develop exceptional leaders, strengthen project
              excellence and accelerate AI-enabled transformation.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                onClick={() => navigate("/contact")}
                className="rounded-xl bg-[#D4A63A] px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Book Discovery Call
              </button>

            </div>

            <div className="mt-14 grid grid-cols-3 gap-4 sm:gap-8">

              <div>
                <h2 className="text-3xl font-bold text-[#D4A63A]">
                  22+
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#D4A63A]">
                  150+
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Professionals Mentored
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#D4A63A]">
                  $120M+
                </h2>

                <p className="mt-2 text-sm text-slate-300">
                  Portfolio Managed
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >

            <div className="rounded-3xl bg-white p-8 shadow-2xl">

              <img
                src={founder}
                alt="Founder"
                className="h-[260px] w-full rounded-2xl object-cover sm:h-[360px] lg:h-[450px]"
              />

              <div className="mt-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  Dr. K. V. Nageshwar Rao
                </h3>

                <p className="mt-2 text-slate-600">
                  Founder & Principal Consultant
                </p>

                <div className="mt-6 rounded-xl bg-slate-100 p-5">

                  <p className="text-sm text-slate-700">
                    Helping organisations build leadership capability,
                    operational excellence and people-first cultures
                    through practical consulting and coaching.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}