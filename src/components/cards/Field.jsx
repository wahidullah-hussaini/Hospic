// Label + input box for the appointment form. Props: label, placeholder
export default function Field({ label, placeholder }) {
  return (
    <label className="block flex-1 text-xs text-slate-300">
      {label}
      <input placeholder={placeholder} className="mt-1 w-full rounded-lg bg-slate-800 px-3 py-2 text-sm text-white outline-none" />
    </label>
  );
}
