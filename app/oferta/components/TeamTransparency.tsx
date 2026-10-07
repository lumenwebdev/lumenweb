import { Globe } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

export function TeamTransparency() {
  return (
    <section className="border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-[20px] border border-border bg-background-elevated/50 p-10 text-center sm:p-12">
            <Globe className="h-8 w-8 text-accent-text" strokeWidth={1.75} />
            <h2 className="font-display text-display-3 font-medium text-balance">
              Atendimento para empresas em Portugal.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              A nossa equipa trabalha remotamente a partir do Brasil, mas
              atendemos empresas em Portugal de forma totalmente online.
              Todo o processo é feito em português de Portugal, através de
              WhatsApp e videochamada.
            </p>
            <p className="text-sm font-medium text-muted-2">
              Trabalhamos remotamente, sem complicações e sem necessidade
              de deslocações.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
