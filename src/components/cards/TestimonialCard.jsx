// Props: name, place, text
export default function TestimonialCard({ name, place, text }) {
  return (
    <div className="rounded-2xl bg-slate-200 p-6">
      <p className="text-sm text-slate-700">“{text}”</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-blue-200" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-slate-500">{place}</p>
        </div>
      </div>
    </div>
  );
}
