import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/siteData";

export default function Testimonials() {
  return (
    <Section>
      <SectionTitle tag="Testimonials" title="Trusted healthcare, trusted voices" />
      <div className="mt-10 h-60 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item) => (
          <TestimonialCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}
