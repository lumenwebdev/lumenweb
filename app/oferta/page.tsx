import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Portfolio } from "./components/Portfolio";
import { SocialProof } from "./components/SocialProof";
import { HowItWorks } from "./components/HowItWorks";
import { Offer } from "./components/Offer";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function OfertaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Portfolio />
        <SocialProof />
        <HowItWorks />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
