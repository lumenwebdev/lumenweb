import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_PRICE_EUR, OFERTA_WHATSAPP_URL } from "../../site-config";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-background-elevated/60 py-20 lg:py-[120px]">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[140px]"
          style={{ background: "radial-gradient(circle, #00d1f7 0%, transparent 70%)" }}
        />

        <Container maxW="max-w-7xl" className="relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-display-1 font-medium text-balance">
              Daqui a 7 dias, o seu negócio pode começar a receber mais
              pedidos.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mx-auto mt-6 max-w-lg text-balance text-lg leading-relaxed text-muted">
              Aceitamos apenas 15 novos projetos por mês, para garantir
              qualidade e prazo.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10">
              <Button
                href={OFERTA_WHATSAPP_URL(
                  `Olá! Quero reservar o meu site por ${OFERTA_PRICE_EUR}.`,
                )}
              >
                Reservar o meu site por {OFERTA_PRICE_EUR}
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
