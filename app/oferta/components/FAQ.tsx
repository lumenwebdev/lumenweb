"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { cn } from "../../components/ui/cn";

const ITEMS = [
  {
    question: "Quanto tempo demora a criação do site?",
    answer:
      "O prazo habitual é de até 7 dias, dependendo do envio das informações necessárias e do processo de aprovação.",
  },
  {
    question: "O preço de 249 € inclui tudo?",
    answer:
      "Inclui design, textos, site responsivo, botão de WhatsApp, formulário de contacto, Google Maps e SEO inicial. Não inclui domínio nem alojamento, que são contratados à parte.",
  },
  {
    question: "Preciso de já ter domínio?",
    answer:
      "Não é obrigatório. Se já tiver um domínio, publicamos o site nele. Caso ainda não tenha, ajudamos a registar um, mas o custo do domínio e do alojamento não está incluído no valor de 249 €.",
  },
  {
    question: "Vocês tratam dos textos?",
    answer: "Sim, os textos fazem parte da criação do site.",
  },
  {
    question: "O site funciona no telemóvel?",
    answer:
      "Sim. Todos os sites são desenvolvidos para funcionar em telemóveis, tablets e computadores.",
  },
  {
    question: "Posso falar convosco pelo WhatsApp?",
    answer: "Sim. O contacto é feito diretamente através do WhatsApp.",
  },
  {
    question: "Vocês trabalham com empresas em Portugal?",
    answer: "Sim. Todo o processo pode ser realizado remotamente.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-border py-20 lg:py-[120px]">
      <Container maxW="max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Perguntas frequentes</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display text-display-2 font-medium text-balance">
              Ainda tem dúvidas?
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-2xl border-t border-border">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.04}>
                <div className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-sm py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <span className="font-display text-base font-medium text-foreground sm:text-lg">
                      {item.question}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-accent-text transition-transform duration-300",
                        isOpen ? "rotate-45" : "rotate-0",
                      )}
                      strokeWidth={2}
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-6 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
