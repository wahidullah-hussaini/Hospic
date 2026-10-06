import Photo from "../ui/Photo";
import { images } from "../../assets/images/image";

// Props: tag, date, title, image
export default function BlogCard({ tag, date, title, image }) {
  return (
    <div>
      <Photo src={images.Latest1} className="h-56 w-full rounded-2xl" />
      <p className="mt-3 text-xs text-slate-500">{tag} / {date}</p>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
    </div>
  );
}
