# Lumen Web — Site institucional

Site institucional da Lumen Web, construído com Next.js (App Router) e Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** com tokens de marca em `app/globals.css`
- **Framer Motion** para as animações de entrada e contadores
- **Lucide** para os ícones

## Identidade visual

- Logo em `public/brand/` (ícone extraído da pasta "Logo + Id Visual" do Drive)
- Cores de marca extraídas do logo: fundo `#04141C` (navy escuro) e acento `#00D1F7` (ciano). Tokens em `app/globals.css`.
- Tipografia: **Sora** (títulos/display) + **Inter** (corpo), carregadas via `next/font`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Estrutura

Cada seção da página vive em `app/components/` (`Hero`, `Problem`, `Positioning`,
`Services`, `HowWeWork`, `Proof`, `Testimonials`, `About`, `FinalCTA`, `Footer`),
montada em `app/page.tsx`.

> **Pendências antes de publicar:** a seção `Testimonials` está com 3 espaços
> reservados — substituir por depoimentos reais (citação, nome e empresa).
> O CTA final aponta para `mailto:contato@lumenweb.site`; trocar pelo canal de
> contato real (WhatsApp, formulário, etc.) quando definido.
