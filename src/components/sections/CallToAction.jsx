import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { images } from "../../assets/images/image";

export default function CallToAction() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-2xl h-120 bg-[#0f2133] p-12 text-white flex flex-col justify-center items-start">
        
        <img 
          src={images.bg} 
          alt="Doctors background" 
          className="absolute inset-y-0 right-0 w-full md:w-[70%] h-full object-cover object-right mix-blend-luminosity opacity-60"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2133] via-[#0f2133]/90 to-transparent w-full md:w-[60%] z-10" />

        {/* This wrapper forces any h1, h2, or p tags inside SectionTitle to render as white */}
        <div className="relative z-20 max-w-lg [&_h1]:text-white! [&_h2]:text-white! [&_p]:text-white!">
          <SectionTitle tag="Our Doctors" title="Meet our experienced doctors for care" />
          <div className="mt-8">
            <Button text="Book an Appointment" />
          </div>
        </div>

      </div>
    </Section>
  );
}
