import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { services } from "../../data/services";
import ServiceDetail from "../services/ServiceDetail";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      {/* =====================================================
          SERVICES HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081D3A] via-[#103A67] to-[#081D3A] py-20 md:py-28">

        {/* Background glow */}

        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#D4A63A]/10 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#D4A63A]/5 blur-[120px]" />


        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

          {/* Small heading */}

          <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[5px] text-[#D4A63A]">
            Our Services
          </span>


          {/* Main heading */}

          <h1 className="mt-7 max-w-5xl text-center font-serif text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Leadership Solutions
            <br />
            That Deliver Results
          </h1>


          {/* Centered description */}

          <p
            className="mx-auto mt-8 w-full max-w-4xl text-center text-lg font-normal leading-8 text-slate-300 sm:text-xl sm:leading-9"
            style={{
              textWrap: "balance",
            }}
          >
            Every engagement is designed to build exceptional leaders,
            improve organisational performance and create measurable
            business impact.
          </p>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <main>

        {services.map((service, index) => (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            image={service.image}
            benefits={service.benefits}
            icon={service.icon}
            reverse={index % 2 !== 0}
          />
        ))}

      </main>

      {/* =====================================================
          ORGANIZATIONAL OUTPUT & DELIVERY SOLUTIONS
      ====================================================== */}


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#081D3A] py-16 md:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Build Extraordinary Leaders?
          </h2>


          <p
            className="mx-auto mt-6 w-full max-w-4xl text-center text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9"
          >
            Schedule a discovery conversation and explore how Kompasion
            Consultancy can transform leadership, project execution and
            organisational performance.
          </p>


          {/* CTA BUTTONS */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button
              onClick={() => navigate("/contact")}
              className="rounded-xl bg-[#D4A63A] px-10 py-4 text-lg font-semibold text-[#081D3A] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Book Discovery Call
            </button>


            <button
              onClick={() => navigate("/programs")}
              className="flex items-center gap-2 rounded-xl border border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#081D3A]"
            >
              Explore Programs

              <ArrowRight size={20} />

            </button>

          </div>

        </div>

      </section>
    </>
  );
}
