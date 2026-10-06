// Shows a picture. If there is no picture yet, shows a grey box instead.
// Props: src (the image), label (text), className (size, rounded corners...)
export default function Photo({ src, label = "", className = "" }) {
  if (src) {
    return <img src={src} alt={label} className={`object-cover ${className}`} />;
  }
  return (
    <div className={`flex items-center justify-center bg-slate-200 text-sm text-slate-500 ${className}`}>
      {label}
    </div>
  );
}
