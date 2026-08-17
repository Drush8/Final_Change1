import { Link } from "react-router-dom";
import { ArrowRight, Target, Brain, Settings2 } from "lucide-react";

import CoFacilitators from "../founder/CoFacilitators";

export default function CoFacilitatorsPage() {
  return (
    <main className="overflow-hidden">

      <CoFacilitators />

      {/* HOW THEY COMPLEMENT THE PRACTICE */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A63A]">
              What they bring
            </span>

            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#081D3A] md:text-5xl">
              Experience that connects strategy with execution.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The value of experienced facilitation is not only knowledge. It
              is the ability to turn complex challenges into practical action,
              build capability and keep transformation focused on outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Target size={25} className="text-[#D4A63A]" />
              <h3 className="mt-6 font-serif text-2xl font-bold text-[#081D3A]">
                Transformation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Practical experience in enterprise change, operational
                improvement and transformation programmes.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Settings2 size={25} className="text-[#D4A63A]" />
              <h3 className="mt-6 font-serif text-2xl font-bold text-[#081D3A]">
                Operational Excellence
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Structured approaches to process excellence, analytics,
                capability building and measurable performance.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Brain size={25} className="text-[#D4A63A]" />
              <h3 className="mt-6 font-serif text-2xl font-bold text-[#081D3A]">
                AI & Innovation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Connecting emerging technology with real business problems,
                people and practical implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#081D3A] py-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A63A]">
              Start a conversation
            </p>

            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Bring experienced practitioners into your next transformation.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Tell us about your leadership, operational, customer or
              technology challenge and we can explore the right expertise for
              your organisation.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#D4A63A] px-7 py-4 font-semibold text-[#081D3A] transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

