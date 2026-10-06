"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { cn } from "../../components/ui/cn";
import { OFERTA_WHATSAPP_URL } from "../../site-config";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Projetos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container maxW="max-w-7xl" className="flex h-18 items-center justify-between py-4">
        <Link href="/oferta" className="flex items-center gap-2.5 font-display" aria-label="Lumen Web">
          <Image
            src="/brand/logo-icon.png"
            alt="Lumen Web"
            width={28}
            height={31}
            className="h-7 w-auto"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Lumen<span className="text-accent-text">Web</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href={OFERTA_WHATSAPP_URL("Olá! Vi a oferta de 249 € e quero saber mais.")}
          variant="secondary"
          className="!px-5 !py-2.5 text-sm"
        >
          Falar no WhatsApp
        </Button>
      </Container>
    </header>
  );
}
