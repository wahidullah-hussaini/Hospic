import Photo from "../ui/Photo";

// Props: name, role, image
export default function DoctorCard({ name, role, image }) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Photo src={image} className="h-64 w-full bg-slate-400" />
      <div className="absolute inset-x-0 bottom-0 bg-slate-900/70 p-3 text-center text-white">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-slate-300">{role}</p>
      </div>
    </div>
  );
}
