import { Container } from "../../components/ui/Container";
import { Reveal } from "../../components/ui/Reveal";

const PROJECTS = ["Nexora", "Petry", "Impregraf", "Cuidar do Seu Pet", "Dr. Leandro Gregório"];

export function ProvaSocial() {
  return (
    <section className="border-t border-border py-12 lg:py-16">
      <Container maxW="max-w-7xl">
        <Reveal>
          <p className="text-center text-sm text-muted-2">
            +400 projetos entregues para negócios de diferentes setores.
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {PROJECTS.map((name) => (
              <span
                key={name}
                className="font-display text-sm font-medium tracking-wide text-muted-2 transition-colors hover:text-foreground sm:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
