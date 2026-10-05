import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import HomeFaq from "./components/HomeFaq";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonials />
      <About />
      <HomeFaq />
      <CTA />
    </main>
  );
}
