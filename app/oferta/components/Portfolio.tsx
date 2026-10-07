import Image from "next/image";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { OFERTA_WHATSAPP_URL } from "../../site-config";

const WORK = [
  {
    name: "Nexora",
    tags: "SaaS · Página de vendas",
    description:
      "Página de vendas para um SaaS, com prova social de marcas, secção de benefícios e processo em etapas claras.",
    image: "/portfolio/nexora.webp",
  },
  {
    name: "Como Cuidar do Seu Pet",
    tags: "Infoproduto · Página de vendas",
    description:
      "Página de vendas de um e-book para tutores de pets, com quiz de identificação do problema, prova social e oferta com urgência.",
    image: "/portfolio/cuidar-do-pet.webp",
  },
  {
    name: "Petry",
    tags: "Arquitetura e indústria · Site institucional",
    description:
      "Site técnico para um sistema de esquadrias de alto padrão, com especificações de produto e benefícios por aplicação.",
    image: "/portfolio/petry.webp",
  },
  {
    name: "Impregraf",
    tags: "Gráfica · Site institucional",
    description:
      "Site para uma gráfica com mais de 26 anos, com catálogo de produtos, portefólio de trabalhos e formulário de orçamento.",
    image: "/portfolio/impregraf.webp",
  },
  {
    name: "Dr. Leandro Gregório",
    tags: "Saúde · Página de captação",
    description:
      "Página para um cirurgião plástico, com depoimentos reais, procedimentos detalhados e agendamento direto pelo WhatsApp.",
    image: "/portfolio/leandro-gregorio.webp",
  },
];

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
              Alguns dos projetos desenvolvidos pela nossa equipa.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 0.06}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-background-elevated/50 transition-colors hover:border-border-strong">
                <div className="relative h-44 overflow-hidden bg-background-elevated-2">
                  <Image
                    src={item.image}
                    alt={`Site de ${item.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
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
