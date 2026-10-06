// Gives every section the same width and spacing. Props: bg, children
export default function Section({ bg = "bg-white", children }) {
  return (
    <section className={`${bg} py-16`}>
      <div className="mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}
