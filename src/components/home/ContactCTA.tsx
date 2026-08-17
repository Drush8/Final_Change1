import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#081D3A] py-14 md:py-24">

      {/* Background Glow */}

      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-[#D4A63A]/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-white/10 bg-white/5 p-12 backdrop-blur-md md:p-16"
        >

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
              Let's Build Together
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              Ready to Build
              <br />
              Exceptional Leaders?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you're strengthening leadership capability,
              improving project delivery or preparing your organisation
              for AI-driven transformation, Kompasion Consultancy is
              ready to partner with you.
            </p>

            {/* Single centered button */}

            <div className="mt-12 flex justify-center">

              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#D4A63A] px-8 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:scale-105"
              >
                <CalendarDays size={20} />
                Book Discovery Call
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
