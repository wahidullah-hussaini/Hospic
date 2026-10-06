// Props: name, price, text, items, featured
export default function PackageCard({ name, price, text, items, featured }) {
  // the featured card is dark, the others are white
  const boxStyle = featured ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-900";
  const mutedStyle = featured ? "text-slate-300" : "text-slate-500";
  const buttonStyle = featured ? "bg-blue-600 text-white" : "bg-slate-100";

  return (
    <div className={`rounded-2xl p-6 ${boxStyle}`}>
      <p className="text-sm">{name}</p>
      <p className="mt-2 text-4xl font-semibold">${price}</p>
      <p className={`mt-2 text-sm ${mutedStyle}`}>{text}</p>
      <ul className={`mt-5 space-y-2 text-sm ${mutedStyle}`}>
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
      <a href="#" className={`mt-6 block rounded-full py-2 text-center text-sm font-medium ${buttonStyle}`}>
        Choose Plan
      </a>
    </div>
  );
}
