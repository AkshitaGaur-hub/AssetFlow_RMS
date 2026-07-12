import "../CSS/Landing.css";

import LandingNavbar from "../Components/LandingNavbar";
import LandingFooter from "../Components/LandingFooter";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Features from "./Features";
import Modules from "./Modules";
import Testimonials from "./Testimonials";


export default function Landing() {
  return (
    <div class="landing-pagefixed inset-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#0B0B0F_1px)] bg-[size:20px_20px]">
    <div className="landing-page">
      <LandingNavbar />
      <Hero />
      <Features />
      <Benefits/>
      <Modules/>
      <Testimonials/>
      <LandingFooter />
    </div>
    </div>
  );
}