import Button from "../ui/Button";
import { images } from "../../assets/images/image";


export default function Hero() {
  return (
  <div className="relative bg-slate-800 h-200 bg-cover bg-center text-white" style={{ backgroundImage: `url(${images.bg})` }}>

      <div className="absolute inset-0 bg-slate-9000/60" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-36">
        <p className="text-sm text-slate-200">★ 4.9 Rating · Trusted by patients</p>
        <h1 className="mt-3 max-w-xl text-5xl font-semibold leading-tight">Exceptional care Better health</h1>
        <p className="mt-4 max-w-md text-sm text-slate-200">Trusted healthcare delivered by skilled professionals, advanced diagnostic technology.</p>
        <div className="mt-6"><Button text="Book an Appointment" /></div>
      </div>
    </div>
  );
}
