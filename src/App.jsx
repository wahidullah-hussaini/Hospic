// App only puts the sections in order. Each section lives in its own file.
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Departments from "./components/sections/Departments";
import AppointmentForm from "./components/sections/AppointmentForm";
import Packages from "./components/sections/Packages";
import Testimonials from "./components/sections/Testimonials";
import Doctors from "./components/sections/Doctors";
import Faq from "./components/sections/Faq";
import Blog from "./components/sections/Blog";
import CallToAction from "./components/sections/CallToAction";
import { navLinks, footerInfo } from "./data/siteData";

export default function App() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar links={navLinks} />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Departments />
      <AppointmentForm />
      <Packages />
      <Testimonials />
      <Doctors />
      <Faq />
      <Blog />
      <CallToAction />
      <Footer info={footerInfo} />
    </div>
  );
}
