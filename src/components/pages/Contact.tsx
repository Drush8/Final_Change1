import ContactHero from "../contact/ContactHero";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";
import Section from "../shared/Section";
import GoogleMap from "../contact/GoogleMap";
import FAQ from "../contact/FAQ";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <Section>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          <ContactForm />

          <ContactInfo />

        </div>

      </Section>

      <GoogleMap />

      <FAQ />

    </>
  );
}