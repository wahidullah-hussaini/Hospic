import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import BlogCard from "../cards/BlogCard";
import { posts } from "../../data/siteData";

export default function Blog() {
  return (
    <Section>
      <SectionTitle tag="Blog & News" title="Latest health insights and wellness tips" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((item) => (
          <BlogCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}
