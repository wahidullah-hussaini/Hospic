import Button from "../ui/Button";

// Props: links (list of menu names)
export default function Navbar({ links }) {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-white">
        <span className="text-xl font-bold">Hospic</span>
        <nav className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <a key={link} href="#">{link}</a>
          ))}
        </nav>
        <Button text="Find Doctors" />
      </div>
    </header>
  );
}
