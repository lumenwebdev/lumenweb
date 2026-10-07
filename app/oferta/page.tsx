import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BenefitsBar } from "./components/BenefitsBar";
import { Problem } from "./components/Problem";
import { Portfolio } from "./components/Portfolio";
import { SocialProof } from "./components/SocialProof";
import { Includes } from "./components/Includes";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { HowItWorks } from "./components/HowItWorks";
import { TeamTransparency } from "./components/TeamTransparency";
import { PaymentMethods } from "./components/PaymentMethods";
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
        <BenefitsBar />
        <Problem />
        <Portfolio />
        <SocialProof />
        <Includes />
        <WhyChooseUs />
        <HowItWorks />
        <TeamTransparency />
        <PaymentMethods />
        <Offer />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
