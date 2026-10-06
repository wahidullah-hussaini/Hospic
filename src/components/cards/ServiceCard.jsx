import Photo from "../ui/Photo";

// Props: title, text, image
export default function ServiceCard({ title, text, image }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-5">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{text}</p>
      </div>
      <Photo src={image} className="h-20 w-24 shrink-0 rounded-xl" />
    </div>
  );
}
