// Blue round button. Props: text, href
export default function Button({ text, href = "#" }) {
  return (
    <a href={href} className="inline-flex items-center gap-3 rounded-full bg-blue-600 py-2 pl-5 pr-2 text-sm font-medium text-white hover:bg-blue-700">
      {text}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-blue-600">→</span>
    </a>
  );
}
