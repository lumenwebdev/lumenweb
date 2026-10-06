import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_PRICE_EUR } from "../../site-config";

const BENEFITS = [
  "Entrega em 7 dias",
  "Pagamento único",
  "WhatsApp integrado",
  "SEO inicial incluído",
];

const INCLUDES = [
  "Site completo",
  "Textos persuasivos",
  "WhatsApp integrado",
  "SEO inicial",
];

export function Hero() {
  return (
    <section className="relative overflow-x-clip pt-32 pb-20 lg:flex lg:min-h-[90vh] lg:items-center lg:pt-28 lg:pb-16">
      <div className="grid-noise pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <Container maxW="max-w-7xl" className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <Reveal>
            <Eyebrow icon={<span aria-hidden>🇵🇹</span>}>
              Para negócios em Portugal que querem faturar mais
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-xl text-[42px] font-bold leading-[1.05] text-balance lg:text-[64px]">
              Transformamos pesquisas no Google em{" "}
              <span className="text-accent-text">clientes</span> para o seu
              negócio.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted">
              Criamos o seu site completo em apenas 7 dias, com textos de
              venda, WhatsApp integrado e estrutura pensada para gerar mais
              contactos e pedidos de orçamento.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-2">
              {BENEFITS.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={2.25} />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="#oferta">Quero o meu site por {OFERTA_PRICE_EUR}</Button>
              <Button href="#trabalhos" variant="secondary">
                Ver trabalhos
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="relative mx-auto max-w-md pb-12 lg:max-w-none lg:pb-16">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[110px]"
              style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[20px] border border-border bg-background-elevated p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
              <div className="overflow-hidden rounded-[14px] border border-border bg-background-elevated-2">
                <div className="flex items-center gap-3 border-b border-border bg-background-elevated px-4 py-2.5">
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="h-2 w-2 rounded-full bg-muted-2/40" />
                    <span className="h-2 w-2 rounded-full bg-muted-2/40" />
                    <span className="h-2 w-2 rounded-full bg-muted-2/40" />
                  </span>
                  <span className="mx-auto rounded-full bg-background-elevated-2 px-4 py-0.5 text-xs text-muted-2">
                    osite.pt
                  </span>
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/portfolio/nexora.webp"
                    alt="Exemplo de site entregue pela Lumen Web"
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-4 w-[34%] overflow-hidden rounded-[22px] border-4 border-background-elevated-2 bg-background-elevated shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] sm:-left-8 lg:-left-10">
              <div className="relative aspect-[9/18]">
                <Image
                  src="/portfolio/leandro-gregorio.webp"
                  alt="Exemplo de site entregue pela Lumen Web, versão telemóvel"
                  fill
                  sizes="(min-width: 1024px) 16vw, 32vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-2 w-[58%] rounded-[20px] border border-white/15 bg-white/8 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:-right-4 sm:w-[52%] sm:p-5">
              <p className="text-sm font-semibold text-foreground">
                +5 Projetos Entregues
              </p>
              <ul className="mt-3 flex flex-col gap-1.5">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                    <Check className="h-3.5 w-3.5 shrink-0 text-accent-text" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-baseline justify-between border-t border-white/15 pt-3">
                <span className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                  {OFERTA_PRICE_EUR}
                </span>
                <span className="text-[11px] text-muted-2 sm:text-xs">Pagamento único</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
