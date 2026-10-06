import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import DepartmentCard from "../cards/DepartmentCard";
import { departments } from "../../data/siteData";

export default function Departments() {
  return (
    <Section>
      <SectionTitle tag="Departments" title="Specialized departments for complete healthcare" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {departments.map((item) => (
          <DepartmentCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}
