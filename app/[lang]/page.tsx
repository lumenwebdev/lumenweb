import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Problem } from "../components/Problem";
import { Positioning } from "../components/Positioning";
import { Services } from "../components/Services";
import { HowWeWork } from "../components/HowWeWork";
import { Proof } from "../components/Proof";
import { Testimonials } from "../components/Testimonials";
import { About } from "../components/About";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export default async function Home({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="flex-1">
        <Hero dict={dict} lang={lang} />
        <Problem dict={dict} />
        <Positioning dict={dict} />
        <Services dict={dict} />
        <HowWeWork dict={dict} />
        <Proof dict={dict} lang={lang} />
        <Testimonials dict={dict} />
        <About dict={dict} />
        <FinalCTA dict={dict} />
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
