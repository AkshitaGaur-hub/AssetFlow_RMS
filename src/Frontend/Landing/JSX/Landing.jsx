import "../CSS/Landing.css";


import Hero from "./Hero";
import Benefits from "./Benefits";
import Contacts from "./Contact";
import Features from "./Features";
import Modules from "./Modules";
import Testimonials from "./Testimonials";


export default function Landing() {
  return (
    <div className="landing-page">
      <LandingNavbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <DashboardPreview />
      <CTA />
      <LandingFooter />
    </div>
  );
}