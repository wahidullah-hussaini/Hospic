// Props: icon, title, text
export default function ReasonCard({ icon, title, text }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-5">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{text}</p>
      </div>
      <span className="text-2xl">{icon}</span>
    </div>
  );
}
