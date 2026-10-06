import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { HelixLoop } from "../../components/HelixLoop";

const WORK = [
  {
    name: "Camargo&Co.",
    tags: "Imobiliário de luxo · 3 idiomas",
    description:
      "Site institucional para um family office imobiliário, com quiz de entrada e versões em português, espanhol e inglês.",
  },
  {
    name: "MKSEG Seguros",
    tags: "Seguros · Site institucional",
    description:
      "Novo site para uma corretora de seguros, a apresentar todos os serviços com a identidade visual da marca.",
  },
  {
    name: "DOMUS PRIME",
    tags: "Imobiliário · Landing page",
    description:
      "Landing page de imóveis de alto padrão, com animações ao percorrer a página.",
  },
  {
    name: "TZ Viagens",
    tags: "Turismo · Marca e anúncios",
    description:
      "Agência de viagens com quem trabalhamos de forma contínua em conteúdos, anúncios e na app de roteiros.",
  },
  {
    name: "Doutor Ar",
    tags: "Serviços técnicos · Landing page",
    description:
      "Página de captação para uma empresa de ar condicionado, focada em pedidos de orçamento.",
  },
  {
    name: "G7 Fibra",
    tags: "Telecomunicações · Planos e preços",
    description:
      "Secções de planos com cartões de preço animados e apresentação dos serviços de internet e TV.",
  },
];

export function Portfolio() {
  return (
    <section id="trabalhos" className="scroll-mt-24 border-t border-border py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Trabalhos feitos</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Sites que já pusemos a trabalhar para negócios reais.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-muted">
              Imobiliário, seguros, turismo, serviços técnicos e
              telecomunicações.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background-elevated/50">
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-background-elevated-2">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #00d1f7 0%, transparent 60%)",
                    }}
                  />
                  <HelixLoop className="relative h-14 w-14 opacity-80" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <p className="eyebrow-label text-accent-text">{item.tags}</p>
                  <h3 className="font-display text-lg font-medium">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
