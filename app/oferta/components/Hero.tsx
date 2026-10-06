import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_PRICE_EUR } from "../../site-config";

const INCLUDES = [
  "Site completo, adaptado a telemóvel",
  "Textos de venda escritos por nós",
  "Botão de WhatsApp e formulário de contacto",
  "Configuração básica no Google",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="grid-noise pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
      />

      <Container className="relative grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow icon={<span aria-hidden>🇵🇹</span>}>
              Para negócios em Portugal que querem faturar mais
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-2xl font-display text-display-1 font-medium text-balance">
              Transformamos quem o procura no Google em{" "}
              <span className="text-gradient">clientes a pagar</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-muted">
              Não vendemos sites bonitos. Montamos uma máquina de captação:
              textos que convencem, um caminho direto para o seu WhatsApp e
              presença no Google. Mais pedidos de orçamento, mais vendas,
              mais faturação.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="#oferta">Ver a oferta de {OFERTA_PRICE_EUR}</Button>
              <Button href="#trabalhos" variant="secondary">
                Ver trabalhos feitos
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-2">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={2.25} />
                5 sites já no ar
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={2.25} />
                Entrega em 7 dias úteis
              </span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={2.25} />
                Pagamento único
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[2rem] border border-border-strong bg-background-elevated p-3 glow-ring">
            <div className="overflow-hidden rounded-[1.4rem] border border-border bg-background-elevated-2">
              <div className="flex items-center gap-3 border-b border-border bg-background-elevated px-4 py-3">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-2/40" />
                </span>
                <span className="mx-auto rounded-full bg-background-elevated-2 px-4 py-1 text-xs text-muted-2">
                  osite.pt
                </span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/portfolio/nexora.webp"
                  alt="Exemplo de site entregue pela Lumen Web"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <p className="px-2 pt-3 text-xs text-muted-2">
              Exemplo real de site entregue por nós
            </p>

            <ul className="mt-3 flex flex-col gap-3 px-2 pb-1">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-text" strokeWidth={2} />
                  <span className="text-sm text-foreground sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mx-2 mt-5 flex items-end justify-between border-t border-border pt-5 pb-2">
              <div>
                <p className="font-display text-4xl font-medium text-foreground">
                  {OFERTA_PRICE_EUR}
                </p>
                <p className="mt-1 text-sm text-muted">pagamento único</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
