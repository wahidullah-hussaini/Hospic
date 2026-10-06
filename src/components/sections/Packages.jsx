import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Photo from "../ui/Photo";
import PackageCard from "../cards/PackageCard";
import { packages, video } from "../../data/siteData";

export default function Packages() {
  return (
    <Section>
      <SectionTitle center tag="Health Packages" title="Affordable health packages for every need" />
      <div className="mt-10 grid  gap-5 md:grid-cols-3">
        {packages.map((item) => (
          <PackageCard key={item.name} {...item} />
        ))}
      </div>
      <Photo src={video} label="Surgery team photo" className="mt-10 h-150 w-full rounded-2xl" />
    </Section>
  );
}
