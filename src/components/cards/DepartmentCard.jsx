import Photo from "../ui/Photo";

// Props: icon, name, text, image
export default function DepartmentCard({ icon, name, text, image }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <Photo src={image} className="h-60 w-full rounded-xl" />
      <div className="mt-4 text-2xl">{icon}</div>
      <h3 className="mt-1 font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-slate-500">{text}</p>
      <a href="#" className="mt-3 inline-block text-sm font-medium text-blue-600">View Details ↗</a>
    </div>
  );
}
