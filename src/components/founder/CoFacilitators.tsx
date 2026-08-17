import { motion } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Brain,
  GraduationCap,
} from "lucide-react";

import founderImage from "../../assets/images/nageshwar-new.jpeg";
import ramaImage from "../../assets/images/rama-mohan-kv.jpeg";
import kamleshImage from "../../assets/images/kamlesh-sinha.jpeg";
import kamleshNewImage from "../../assets/images/kamlesh-sinha-new.png";

const linkedinIcon = (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 fill-white"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 20.45h3.57V9H3.54v11.45z" />
  </svg>
);

const founder = {
  name: "Dr. K. V. Nageshwar Rao",
  role: "Founder & Chief Consultant | Executive Leadership Coach",
  experience: "22+ Years",
  description:
    "Senior management and enterprise-transformation leader with over two decades of experience across pharmaceutical CRO/CDMO and R&D-led organisations. He advises pharma and life-sciences organisations on programme excellence, leadership capability and strategic collaboration.",
  history:
    "Most recently Vice President and Head of Program Management at PI Health Sciences and Aragen Life Sciences. He has also held Executive Committee roles at Aragen, Neuland, Dr. Reddy's and Sai Life Sciences, leading enterprise-wide transformation and portfolios exceeding $120 million with teams of 80+.",
  companies: [
    "PI Health Sciences",
    "Aragen Life Sciences",
    "Neuland",
    "Dr. Reddy's",
    "Sai Life Sciences",
  ],
  highlights: [
    "PhD in Organic Chemistry",
    "PMP | NLP Practitioner | ISB Hyderabad alumnus",
    "Best Use of Data Analytics in Pharma – Pharma Tech Summit 2024",
    "Member/Fellow of PMI Pearl City Chapter, HMA and BNI Amrutha Chapter",
  ],
  image: founderImage,
  linkedin: "https://in.linkedin.com/in/nageshwar-rao-kompalli-phd-pmp",
};

const facilitators = [
  {
    name: "Rama Mohan KV (Ram)",
    role: "Director — Strategic Transformation, Operational Excellence & Applied AI | Vice President at Infosys and EdgeVerve",
    experience: "33+ Years",
    description:
      "Three decades of experience across manufacturing, IT, services, start-ups and consulting, with deep expertise in transformation, operational excellence and applied AI.",
    history:
      "Leadership and consulting experience across Infosys BPM, EdgeVerve, Accenture, ICICI Bank and AT&S, along with start-up and consulting roles. He has also worked with clients including Aragen, Coforge and Magnasoft and served as an advisor/consultant to OLA.",
    companies: [
      "Infosys BPM",
      "EdgeVerve",
      "Accenture",
      "ICICI Bank",
      "AT&S",
      "Indal",
      "Aragen",
      "Coforge",
      "Magnasoft",
      "OLA",
    ],
    highlights: [
      "Lean Six Sigma Master Black Belt (ASQ)",
      "Applied AI & ML — IITM Pravartak",
      "M.Tech — Quality, Reliability & Operations Research, ISI Kolkata",
      "Guest Faculty — BITS Pilani, IISc, ISI Kolkata & ICFAI Business School",
    ],
    image: kamleshImage,
    linkedin: "https://www.linkedin.com/in/ramkada",
    icon: Brain,
  },
  {
    name: "Kamlesh Sinha",
    role: "Transformation, Operational Excellence & Customer Experience",
    experience: "32+ Years",
    description:
      "Transformation and turnaround leader helping organisations achieve business objectives through complex transformation, cost optimisation, excellence strategies, customer experience and digital transformation.",
    history:
      "He has held leadership positions with Xerox, EXL, Sutherland, Patni Computers and Bharti Airtel. In his last stint, he was Vice President of Xerox, driving Transformation & Excellence globally.",
    companies: [
      "Xerox",
      "EXL",
      "Sutherland",
      "Patni Computers",
      "Bharti Airtel",
    ],
    highlights: [
      "Mechanical Engineering — NIT Rourkela",
      "Masters in Quality Engineering & Operations Research — ISI Kolkata",
      "Operational & Functional Analytics, Critical & Systems Thinking",
      "Lean & Six Sigma, Change Management and Customer Experience",
      "Trained 2500+ professionals in management concepts",
    ],
    image: kamleshNewImage,
    linkedin: "https://www.linkedin.com/in/kamlesh-sinha",
    icon: BriefcaseBusiness,
  },
];

function LinkedInButton({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] shadow-md transition-transform duration-300 hover:scale-110 hover:bg-[#004182]"
    >
      {linkedinIcon}
    </a>
  );
}

function CompanyHistory({ companies }: { companies: string[] }) {
  return (
    <div className="mt-5 border-t border-slate-200 pt-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
        Industry Experience & Connections
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {companies.map((company) => (
          <span
            key={company}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-[#123E6E]"
          >
            {company}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CoFacilitators() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4A63A]">
            Meet The Team
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#081D3A] md:text-4xl">
            People Behind the Transformation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-7 text-slate-600">
            Experienced leaders and practitioners bringing together leadership,
            transformation, operational excellence, consulting, customer
            experience and applied AI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="mb-4 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4A63A]">
              Founder
            </span>
          </div>

          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-1.5 bg-[#D4A63A]" />
            <div className="grid md:grid-cols-[250px_1fr]">
              <div className="relative flex h-[245px] items-start justify-center overflow-hidden bg-white">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-contain object-top"
                />
                <LinkedInButton href={founder.linkedin} />
              </div>

              <div className="p-6 md:p-7">
                <h2 className="font-serif text-2xl font-bold text-[#081D3A]">
                  {founder.name}
                </h2>
                <p className="mt-2 text-sm font-semibold leading-5 text-[#D4A63A]">
                  {founder.role}
                </p>

                <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                  <Award size={18} className="shrink-0 text-[#D4A63A]" />
                  <span className="text-sm font-semibold text-[#081D3A]">
                    {founder.experience} of professional experience
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {founder.description}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {founder.history}
                </p>

                <CompanyHistory companies={founder.companies} />

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                    Leadership & Expertise
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {founder.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <GraduationCap
                          size={15}
                          className="mt-0.5 shrink-0 text-[#123E6E]"
                        />
                        <span className="text-xs leading-5 text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D4A63A]">
            Co-Facilitators
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#081D3A] md:text-4xl">
            Experienced Leaders Driving Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Experienced practitioners bringing specialised knowledge, practical
            experience and transformation expertise to the organisations we work with.
          </p>
        </motion.div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
          {facilitators.map((person, index) => {
            return (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-1.5 bg-[#D4A63A]" />
                <div className="relative flex h-[245px] items-start justify-center overflow-hidden bg-white">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-contain object-top transition duration-500 group-hover:scale-[1.01]"
                  />
                  <LinkedInButton href={person.linkedin} />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold leading-tight text-[#081D3A]">
                    {person.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-5 text-[#D4A63A]">
                    {person.role}
                  </p>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3">
                    <Award size={17} className="shrink-0 text-[#D4A63A]" />
                    <span className="text-sm font-semibold text-[#081D3A]">
                      {person.experience} of professional experience
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {person.description}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {person.history}
                  </p>

                  <CompanyHistory companies={person.companies} />

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                      Expertise & Recognition
                    </p>
                    <div className="mt-3 space-y-2">
                      {person.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <GraduationCap
                            size={15}
                            className="mt-0.5 shrink-0 text-[#123E6E]"
                          />
                          <span className="text-xs leading-5 text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
