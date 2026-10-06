"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal } from "../../components/ui/Reveal";
import { cn } from "../../components/ui/cn";

const ITEMS = [
  {
    question: "Porque é tão mais barato do que outras agências?",
    answer:
      "Trabalhamos com um processo fixo e focado em sites de uma página para pequenos negócios. Menos reuniões e menos voltas significam um preço justo, sem perder qualidade.",
  },
  {
    question: "A equipa está no Brasil. Isso complica?",
    answer:
      "Não. Todo o contacto é por WhatsApp e videochamada, os textos são escritos em português de Portugal e o fuso horário permite responder durante o seu dia de trabalho.",
  },
  {
    question: "O que preciso de enviar?",
    answer:
      "O logótipo, algumas fotografias do negócio e as respostas a um questionário curto. O resto fica connosco.",
  },
  {
    question: "E se eu precisar de mais páginas?",
    answer:
      "Fazemos sites maiores, lojas online e automações. Depois da conversa inicial enviamos uma proposta à medida.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "MB Way, transferência bancária, PayPal ou cartão. Pagamento único, sem mensalidades.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <Container>
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
