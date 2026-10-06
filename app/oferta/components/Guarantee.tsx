import { ShieldCheck } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

export function Guarantee() {
  return (
    <section className="border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <Reveal>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-[20px] border border-border bg-background-elevated/50 p-10 text-center sm:p-12">
            <ShieldCheck className="h-8 w-8 text-accent-text" strokeWidth={1.75} />
            <h2 className="font-display text-display-3 font-medium text-balance">
              Compromisso com prazo e qualidade.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Recebemos os seus materiais hoje. Entregamos o seu site em até
              7 dias úteis.
            </p>
            <p className="text-sm font-medium text-muted-2">
              Sem atrasos. Sem complicações. Sem surpresas.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
