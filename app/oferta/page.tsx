import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProvaSocial } from "./components/ProvaSocial";
import { Problem } from "./components/Problem";
import { Portfolio } from "./components/Portfolio";
import { SocialProof } from "./components/SocialProof";
import { Includes } from "./components/Includes";
import { HowItWorks } from "./components/HowItWorks";
import { Offer } from "./components/Offer";
import { Guarantee } from "./components/Guarantee";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function OfertaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProvaSocial />
        <Problem />
        <Portfolio />
        <SocialProof />
        <Includes />
        <HowItWorks />
        <Offer />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
