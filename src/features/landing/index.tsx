import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { CtaFinal } from "./components/CtaFinal";

export function LandingPage() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <CtaFinal />
    </main>
  );
}
