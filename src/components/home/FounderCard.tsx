import founder from "../../assets/images/founder.jpeg";

import {
  Award,
  GraduationCap,
  Quote,
} from "lucide-react";

export default function FounderCard() {
  return (
    <div className="relative w-full max-w-[500px] overflow-hidden rounded-[34px] border border-white/10 bg-white/10 p-7 shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-xl">

      {/* Decorative Glow */}

      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#D4A63A]/20 blur-3xl" />

      {/* Founder Image */}

      <div className="relative">

        <img
          src={founder}
          alt="Founder"
          className="mx-auto h-[240px] w-full rounded-[26px] border-[5px] border-[#D4A63A] object-cover sm:h-[300px] lg:h-[360px]"
        />

        {/* Badge */}

        <div className="absolute bottom-5 left-5 rounded-full bg-[#081D3A] px-4 py-2 shadow-xl">

          <span className="text-sm font-semibold tracking-wider text-[#D4A63A]">
            22+ YEARS EXPERIENCE
          </span>

        </div>

      </div>

      {/* Name */}

      <div className="mt-7 text-center">

        <h3 className="font-serif text-[40px] font-bold leading-tight text-white">
          Dr. K. V. Nageshwar Rao
        </h3>

        <p className="mt-2 text-lg font-medium tracking-wide text-[#D4A63A]">
          Founder • PhD • PMP
        </p>

      </div>

      {/* Divider */}

      <div className="mx-auto my-6 h-[2px] w-20 rounded bg-[#D4A63A]" />

      {/* Highlights */}

      <div className="space-y-5">

        <div className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4">

          <Award
            className="text-[#D4A63A]"
            size={24}
          />

          <span className="text-lg text-white">
            Executive Leadership Experience
          </span>

        </div>

        <div className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4">

          <GraduationCap
            className="text-[#D4A63A]"
            size={24}
          />

          <span className="text-lg text-white">
            AI Leadership • NLP Practitioner
          </span>

        </div>

      </div>

      {/* Quote */}

      <div className="mt-8 rounded-2xl border border-white/10 bg-[#081D3A]/70 p-5">

        <Quote
          size={20}
          className="mb-3 text-[#D4A63A]"
        />

        <p className="italic leading-7 text-slate-300">
          Leadership is not about authority. It is about inspiring
          people to discover their own greatness.
        </p>

      </div>

    </div>
  );
}