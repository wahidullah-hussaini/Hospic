import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/siteData";

export default function Services() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle tag="Our Services" title="Excellence in every medical service" />
          <div className="mt-6"><Button text="Book an Appointment" /></div>
        </div>
        <div className="space-y-4 ">
          {services.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
