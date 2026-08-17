import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

import { faqs } from "../../data/contact/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>

      <SectionTitle
        badge="FAQs"
        title="Frequently Asked Questions"
        description="Answers to some common questions about our services."
      />

      <div className="mx-auto max-w-4xl space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={faq.question}
            className="rounded-2xl border bg-white"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="flex w-full items-center justify-between p-6 text-left"
            >

              <span className="font-semibold text-[#081D3A]">
                {faq.question}
              </span>

              <ChevronDown
                className={`transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />

            </button>

            {open === index && (

              <div className="px-6 pb-6 text-gray-600 leading-7">

                {faq.answer}

              </div>

            )}

          </div>

        ))}

      </div>

    </Section>
  );
}