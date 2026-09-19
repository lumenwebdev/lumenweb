# Lumen Web: site institucional

Site institucional da Lumen Web, construído com Next.js (App Router) e Tailwind CSS v4.
Redesign inspirado na sensação de agência premium de dexa.ag: tipografia grande,
seções altas, ritmo claro/escuro e movimento com propósito.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** com tokens de marca em `app/globals.css`
- **Framer Motion** para revelações, contadores e o diagrama animado
- **Lenis** (`app/components/SmoothScroll.tsx`) para rolagem suave, desligada quando o
  usuário prefere movimento reduzido
- **Lucide** para os ícones
- i18n nativo do Next.js (`app/[lang]`, dicionários + `proxy.ts`), sem libs externas

## Identidade visual

- Logo em `public/brand/` (ícone extraído da pasta "Logo + Id Visual" do Drive)
- Tema **claro**. Cores de marca extraídas do logo: acento ciano (`#00C2EC` em fundos,
  `#0092B3` em texto/ícones para contraste em fundo branco) e fundo branco/neutro claro.
  Seções escuras (Prova, CTA final) usam o mesmo token set invertido via `.section-dark`
  em `app/globals.css`, sem duplicar componentes.
- Tipografia: **Geist** (títulos e corpo), carregada via `next/font/google`, com escala
  fluida (`text-display-1/2/3`, `clamp()`) para os títulos grandes.

## Idiomas

Site disponível em 4 idiomas, com rotas prefixadas e redirecionamento automático de `/`
para o idioma padrão:

- `/pt-BR`: Português (Brasil), padrão
- `/pt-PT`: Português (Portugal)
- `/en`: English
- `/es`: Español

Dicionários em `app/[lang]/dictionaries/*.ts`. Trocar ou editar a copy de um idioma
significa editar o arquivo correspondente (a tipagem `Dictionary` garante que todos os
idiomas fiquem com a mesma estrutura). O seletor de idioma fica no header
(`LanguageSwitcher.tsx`).

## Vocabulário da marca

Regra de conteúdo válida para textos visíveis, metadados, `alt`, `aria-label` e nomes de
arquivo públicos: nada de "previsível", "inteligência artificial", a sigla "IA" ou o
travessão (—). Vocabulário oficial: "ecossistema" e "sistemas".

## Depoimentos

`app/[lang]/testimonials.ts` guarda os depoimentos reais por idioma. Com o array vazio
(ou só com itens `placeholder: true`), a seção inteira não renderiza em produção; em
desenvolvimento aparece um aviso discreto lembrando de preencher o arquivo.

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

- `app/[lang]/layout.tsx`: layout raiz (fontes, metadata por idioma, JSON-LD de
  Organization, `generateStaticParams`)
- `app/[lang]/page.tsx`: monta a página com o dicionário do idioma atual
- `app/[lang]/dictionaries.ts` + `dictionaries/*.ts`: conteúdo traduzido, tipado
- `app/[lang]/locales.ts`: lista de idiomas suportados
- `app/[lang]/testimonials.ts`: depoimentos reais por idioma (veja acima)
- `app/sitemap.ts` / `app/robots.ts`: SEO técnico
- `proxy.ts`: redireciona `/` (e rotas sem prefixo de idioma) para o idioma padrão
- `app/components/`: seções da página (`Hero`, `Problem`, `Positioning`, `Services`,
  `HowWeWork`, `Proof`, `Testimonials`, `About`, `FinalCTA`, `Header`, `Footer`), todas
  recebem o dicionário do idioma atual via props
- `app/components/ClientLogosMarquee.tsx`: faixa de logos de clientes, desligada por
  padrão via `SHOW_CLIENT_LOGOS` em `app/site-config.ts`. Só ativar com logos reais e
  autorizados.

> **Pendências antes de publicar:** nenhum depoimento real cadastrado ainda (seção
> oculta em produção até que `app/[lang]/testimonials.ts` seja preenchido); nenhuma logo
> de cliente cadastrada (faixa de logos desligada); o CTA final aponta para
> `mailto:contato@lumenweb.site` e `@lumenwebco`, confirmar se são os canais definitivos;
> as métricas (R$10M+ e 250+) não têm período definido, confirmar a janela de tempo a
> que se referem antes de publicar.
