import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

const METHODS = ["MB WAY", "Transferência bancária", "Cartão", "PayPal"];

export function PaymentMethods() {
  return (
    <section className="border-t border-border py-12 lg:py-16">
      <Container maxW="max-w-7xl">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-wide text-muted-2">
            Como pode pagar
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {METHODS.map((method) => (
              <span
                key={method}
                className="rounded-full border border-border bg-background-elevated/60 px-5 py-2 text-sm font-medium text-foreground"
              >
                {method}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
