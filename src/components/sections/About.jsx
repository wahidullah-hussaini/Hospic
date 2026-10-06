import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Photo from "../ui/Photo";
import StatCard from "../cards/StatCard";
import { stats } from "../../data/siteData";
import { images } from "../../assets/images/image";

export default function About() {
  return (
    <Section>
      <SectionTitle 
        tag="About Us" 
        title="We are committed to delivering exceptional medical care through skilled professionals, modern facilities." 
      />
      
      {/* Main Container: Splits Images (Left) and Stats (Right) */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Side: Images lined up horizontally side-by-side */}
        <div className="flex flex-col sm:flex-row gap-6 lg:col-span-2">
          <Photo src={images.img1} label="Doctors photo" className="w-full sm:w-1/2 h-72 object-cover rounded-2xl" />
          <Photo src={images.img2} label="Doctors photo" className="w-full sm:w-1/2 h-72 object-cover rounded-2xl" />
        </div>

        {/* Right Side: Stats Container */}
        <div className="space-y-6 lg:col-span-1 ">
          {stats.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>

      </div>
    </Section>
  );
}
