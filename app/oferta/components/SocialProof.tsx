import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { getRealOfertaTestimonials } from "../testimonials";

export function SocialProof() {
  const items = getRealOfertaTestimonials();

  if (items.length === 0) {
    if (process.env.NODE_ENV === "production") return null;

    return (
      <section className="border-t border-dashed border-border-strong py-16">
        <Container>
          <p className="rounded-2xl border border-dashed border-border-strong bg-background-elevated/40 p-6 text-sm text-muted-2">
            [dev only] Prova social oculta em produção: adicione depoimentos
            reais em <code>app/oferta/testimonials.ts</code> para exibir esta
            secção.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Prova social</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Quem já trabalhou connosco, recomenda.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-elevated/50 p-6">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`Depoimento de ${item.name}`}
                    width={400}
                    height={400}
                    className="rounded-xl border border-border"
                  />
                ) : (
                  <>
                    <Quote className="h-6 w-6 text-accent-text" strokeWidth={1.5} />
                    <p className="text-sm italic leading-relaxed text-muted">
                      {item.quote}
                    </p>
                  </>
                )}
                <p className="mt-auto text-xs font-medium uppercase tracking-wide text-muted-2">
                  {item.name} · {item.company}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
