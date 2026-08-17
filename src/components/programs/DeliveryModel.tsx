import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { deliveryModel } from "../../data/programs/delivery";

export default function DeliveryModel() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge="Delivery"
        title="Flexible Learning Experiences"
        description="Programs are designed to fit your organisation's learning strategy and operational needs."
      />

      <div className="grid gap-8 md:grid-cols-3">

        {deliveryModel.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A63A]/10">

                <Icon
                  size={28}
                  className="text-[#D4A63A]"
                />

              </div>

              <h3 className="font-serif text-xl font-bold text-[#081D3A]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

            </div>

          );

        })}

      </div>

    </Section>
  );
}