import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Positioning } from "./components/Positioning";
import { Services } from "./components/Services";
import { HowWeWork } from "./components/HowWeWork";
import { Proof } from "./components/Proof";
import { Testimonials } from "./components/Testimonials";
import { About } from "./components/About";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Positioning />
        <Services />
        <HowWeWork />
        <Proof />
        <Testimonials />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
