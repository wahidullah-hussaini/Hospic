// Small tag + big title on top of every section. Props: tag, title, center
export default function SectionTitle({ tag, title, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>
      <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
    </div>
  );
}
