import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import FaqItem from "../cards/FaqItem";
import { faqs } from "../../data/siteData";

export default function Faq() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle tag="Faqs" title="Frequently asked questions" />
          <p className="mt-6 text-sm text-slate-500">Need help? Get in touch with us</p>
          <div className="mt-3"><Button text="Get in Touch" /></div>
        </div>
        <div>
          {faqs.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
