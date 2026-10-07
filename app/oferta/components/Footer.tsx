import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/ui/Container";
import { WhatsAppLink } from "../../components/ui/WhatsAppLink";
import { OFERTA_EMAIL } from "../../site-config";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container maxW="max-w-7xl" className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Link href="/oferta" className="flex items-center gap-2.5 font-display" aria-label="Lumen Web">
            <Image
              src="/brand/logo-icon.png"
              alt="Lumen Web"
              width={28}
              height={31}
              className="h-7 w-auto"
            />
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Lumen<span className="text-accent-text">Web</span>
            </span>
          </Link>
          <p className="text-sm text-muted">Sites e Automações</p>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted">
          <a
            href={`mailto:${OFERTA_EMAIL}`}
            className="transition-colors hover:text-accent-text"
          >
            {OFERTA_EMAIL}
          </a>
          <span className="text-border-strong">·</span>
          <WhatsAppLink
            message="Olá! Vi o site e quero saber mais."
            trackingEvent="whatsapp_click_footer"
            className="transition-colors hover:text-accent-text"
          >
            WhatsApp
          </WhatsAppLink>
        </div>
      </Container>
    </footer>
  );
}
