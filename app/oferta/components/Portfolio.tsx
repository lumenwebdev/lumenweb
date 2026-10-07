import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_WHATSAPP_URL } from "../../site-config";

const IMAGES = [
  { src: "/portfolio/nexora.webp", alt: "Site desenvolvido pela Lumen Web para um SaaS" },
  { src: "/portfolio/cuidar-do-pet.webp", alt: "Página de vendas desenvolvida pela Lumen Web para um infoproduto" },
  { src: "/portfolio/petry.webp", alt: "Site institucional desenvolvido pela Lumen Web para arquitetura e indústria" },
  { src: "/portfolio/impregraf.webp", alt: "Site institucional desenvolvido pela Lumen Web para uma gráfica" },
  { src: "/portfolio/leandro-gregorio.webp", alt: "Página de captação desenvolvida pela Lumen Web para a área da saúde" },
];

const TRACK = [...IMAGES, ...IMAGES];

export function Portfolio() {
  return (
    <section id="trabalhos" className="scroll-mt-24 border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Projetos Recentes</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Veja o que podemos criar para a sua empresa.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted">
              Mais de 400 projetos entregues. Aqui estão alguns exemplos.
            </p>
          </Reveal>
        </div>
      </Container>

      <Reveal delay={0.14}>
        <div className="mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div
            className="flex w-max animate-marquee items-stretch gap-6 hover:[animation-play-state:paused]"
            style={{ animationDuration: "40s" }}
          >
            {TRACK.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="relative h-[360px] w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-border bg-background-elevated-2 sm:h-[440px] sm:w-[320px]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Container maxW="max-w-7xl">
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Button
              href={OFERTA_WHATSAPP_URL(
                "Olá! Quero um site assim para a minha empresa.",
              )}
              trackingEvent="cta_click_portfolio"
            >
              Quero um site assim para a minha empresa
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
