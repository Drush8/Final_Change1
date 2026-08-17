import ProgramsHero from "../programs/ProgramsHero";
import ProgramsGrid from "../programs/ProgramsGrid";
import DeliveryModel from "../programs/DeliveryModel";
import Audience from "../programs/Audience";
import Outcomes from "../programs/Outcomes";
import ProgramsCTA from "../programs/ProgramsCTA";

export default function Programs() {
  return (
    <>
      <ProgramsHero />

      <ProgramsGrid />

      <DeliveryModel />

      <Audience />

      <Outcomes />

      <ProgramsCTA />
    </>
  );
}