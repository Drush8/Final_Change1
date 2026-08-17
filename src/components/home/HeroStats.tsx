import {
  Trophy,
  Landmark,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "22+",
    title: "Years",
    subtitle: "Leadership",
  },
  {
    icon: Landmark,
    value: "$120M+",
    title: "Portfolio",
    subtitle: "Managed",
  },
  {
    icon: BriefcaseBusiness,
    value: "3",
    title: "PMOs",
    subtitle: "Built",
  },
  {
    icon: Users,
    value: "150+",
    title: "Professionals",
    subtitle: "Mentored",
  },
];

export default function HeroStats() {
  return (
    <section className="relative">

      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[30px] bg-white shadow-2xl">

          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="border-r border-slate-100 px-8 py-10 text-center last:border-r-0"
                >

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A63A]/10">

                    <Icon
                      size={26}
                      className="text-[#D4A63A]"
                    />

                  </div>

                  <h3 className="text-4xl font-bold text-[#081D3A] sm:text-5xl">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-lg text-slate-700">

                    {item.title}

                  </p>

                  <p className="text-lg text-slate-500">

                    {item.subtitle}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}