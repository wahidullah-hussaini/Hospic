// Props: value, label
export default function StatCard({ value, label }) {
  return (
    <div className="border-b border-slate-200 pb-4">
      <p className="text-4xl font-semibold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  );
}
