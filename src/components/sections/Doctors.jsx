import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import DoctorCard from "../cards/DoctorCard";
import { doctors } from "../../data/siteData";

export default function Doctors() {
  return (
    <Section>
      <SectionTitle center tag="Our Doctors" title="Meet our experienced doctors for care" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((item, index) => (
          <DoctorCard key={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
