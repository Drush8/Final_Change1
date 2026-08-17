import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-slate-50 p-10"
        >
          <Target
            size={40}
            className="text-[#D4A63A]"
          />

          <h3 className="mt-8 text-3xl font-bold">
            Mission
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            To cultivate compassionate, high-performing leaders
            capable of creating sustainable growth, innovation
            and meaningful transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-3xl bg-slate-50 p-10"
        >
          <Eye
            size={40}
            className="text-[#D4A63A]"
          />

          <h3 className="mt-8 text-3xl font-bold">
            Vision
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            To become a globally trusted partner in leadership,
            transformation, innovation and organisational excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}