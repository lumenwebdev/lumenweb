# Lumen Web — Site institucional

Site institucional da Lumen Web, construído com Next.js (App Router) e Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** com tokens de marca em `app/globals.css`
- **Framer Motion** para as animações de entrada e contadores
- **Lucide** para os ícones
- i18n nativo do Next.js (`app/[lang]`, dicionários + `proxy.ts`), sem libs externas

## Identidade visual

- Logo em `public/brand/` (ícone extraído da pasta "Logo + Id Visual" do Drive)
- Tema **claro**. Cores de marca extraídas do logo: acento ciano (`#00C2EC` em fundos,
  `#0092B3` em texto/ícones para contraste em fundo branco) e fundo branco/neutro claro.
  Tokens em `app/globals.css`.
- Tipografia: **Geist** (títulos e corpo), carregada via `next/font/google`.

## Idiomas

Site disponível em 4 idiomas, com rotas prefixadas e redirecionamento automático de `/`
para o idioma padrão:

- `/pt-BR` — Português (Brasil), padrão
- `/pt-PT` — Português (Portugal)
- `/en` — English
- `/es` — Español

Dicionários em `app/[lang]/dictionaries/*.ts`. Trocar/editar copy de um idioma = editar
o arquivo correspondente (tipagem `Dictionary` garante que todos os idiomas fiquem com a
mesma estrutura). O seletor de idioma fica no header (`LanguageSwitcher.tsx`).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) (redireciona para `/pt-BR`).

## Build

```bash
npm run build
npm run start
```

## Estrutura

- `app/[lang]/layout.tsx` — layout raiz (fontes, metadata por idioma, `generateStaticParams`)
- `app/[lang]/page.tsx` — monta a página com o dicionário do idioma atual
- `app/[lang]/dictionaries.ts` + `dictionaries/*.ts` — conteúdo traduzido, tipado
- `app/[lang]/locales.ts` — lista de idiomas suportados
- `proxy.ts` — redireciona `/` (e rotas sem prefixo de idioma) para o idioma padrão
- `app/components/` — seções da página (`Hero`, `Problem`, `Positioning`, `Services`,
  `HowWeWork`, `Proof`, `Testimonials`, `About`, `FinalCTA`, `Header`, `Footer`), todas
  recebem o dicionário do idioma atual via props

> **Pendências antes de publicar:** a seção `Testimonials` está com 3 espaços
> reservados em todos os idiomas — substituir por depoimentos reais (citação, nome e
> empresa). O CTA final aponta para `mailto:contato@lumenweb.site`; trocar pelo canal de
> contato real (WhatsApp, formulário, etc.) quando definido.
