import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  icon: React.ElementType;
  reverse?: boolean;
}

export default function ServiceDetail({
  id,
  title,
  subtitle,
  description,
  image,
  benefits,
  icon: Icon,
  reverse = false,
}: Props) {
  const navigate = useNavigate();

  const programCategory =
    id === "executive-leadership"
      ? "executive"
      : id === "project-excellence"
        ? "project"
        : id === "scientific-intelligence"
          ? "scientific"
          : id === "emotional-intelligence"
            ? "emotional"
            : "";

  return (
    <section
      id={id}
      className="scroll-mt-28 py-20"
    >
      <div
        className={`mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-2 lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}

        <div className="relative">

          <img
            src={image}
            alt={title}
            className="h-[300px] w-full rounded-[28px] object-cover shadow-xl sm:h-[400px] lg:h-[480px]"
          />

          <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#081D3A] shadow-lg">

            <Icon
              size={34}
              className="text-[#D4A63A]"
            />

          </div>

        </div>

        {/* CONTENT */}

        <div>

          <span className="rounded-full bg-[#FFF7E5] px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4A63A]">
            {subtitle}
          </span>

          <h2 className="mt-6 font-serif text-3xl font-bold text-[#081D3A] sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>

          {/* BENEFITS */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {benefits.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >

                <CheckCircle2
                  size={20}
                  className="text-[#D4A63A]"
                />

                <span className="font-medium text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap items-center gap-5">

            <button
              onClick={() => navigate("/contact")}
              className="rounded-xl bg-[#081D3A] px-8 py-4 font-semibold text-white transition hover:bg-[#103A67]"
            >
              Book Consultation
            </button>

            <button
              onClick={() => navigate(programCategory ? `/programs?category=${programCategory}` : "/programs")}
              className="flex items-center gap-2 rounded-xl border border-[#D4A63A] px-8 py-4 font-semibold text-[#D4A63A] transition hover:bg-[#D4A63A] hover:text-white"
            >
              View Programs

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}