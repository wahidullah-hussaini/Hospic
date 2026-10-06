import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Photo from "../ui/Photo";
import ReasonCard from "../cards/ReasonCard";
import { reasons, img7 } from "../../data/siteData";

export default function WhyChooseUs() {
  return (
    <Section bg="bg-slate-50">
      <SectionTitle center tag="Why Choose Us" title="Excellence in every medical service" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {reasons.map((item) => (
          <ReasonCard key={item.title} {...item} />
        ))}
      </div>
      <Photo src={img7} label="Doctor with patient" className="mt-6 h-150 w-full rounded-2xl" />
    </Section>
  );
}
