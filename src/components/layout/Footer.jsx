import FooterColumn from "./FooterColumn";

// Props: info (opening hours, contact, pages, departments)
export default function Footer({ info }) {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-4">
        <div className="text-sm text-slate-400">
          <p className="text-xl font-bold text-white">Hospic</p>
          {info.hours.map((line) => (
            <p key={line} className="mt-2">{line}</p>
          ))}
        </div>
        <FooterColumn title="Contact Info" links={info.contact} />
        <FooterColumn title="Essential Pages" links={info.pages} />
        <FooterColumn title="Departments" links={info.departments} />
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">© 2026 All Rights Reserved by Hospic</p>
    </footer>
  );
}
