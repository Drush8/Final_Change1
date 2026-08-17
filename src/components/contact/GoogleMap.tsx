import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";

export default function GoogleMap() {
  return (
    <Section className="bg-[#F8FAFC]">

      <SectionTitle
        badge="Visit Us"
        title="Our Location"
        description="We're based in Hyderabad and work with organisations across India and globally."
      />

      <div className="overflow-hidden rounded-3xl shadow-lg">

        <iframe
          title="Kompasion Consultancy"
          src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed"
          width="100%"
          loading="lazy"
          className="h-[280px] w-full border-0 sm:h-[380px] lg:h-[500px]"
        />

      </div>

    </Section>
  );
}