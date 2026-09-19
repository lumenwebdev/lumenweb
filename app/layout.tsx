import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://lumenweb.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumen Web — Sistemas, automações e sites de alta conversão",
    template: "%s · Lumen Web",
  },
  description:
    "A Lumen Web transforma processos manuais em um ecossistema de crescimento, com sistemas de atendimento, automação comercial e estratégia digital que trabalham por você, todos os dias.",
  keywords: [
    "Lumen Web",
    "automação comercial",
    "sites de alta conversão",
    "ecossistema de crescimento",
    "tráfego pago",
    "agência full-stack",
  ],
  openGraph: {
    title: "Lumen Web — Já geramos mais de R$10 milhões em resultado para nossos clientes",
    description:
      "Sistemas de atendimento, automação comercial e estratégia digital que trabalham por você, todos os dias.",
    url: siteUrl,
    siteName: "Lumen Web",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/brand/logo-icon-square-bg.png", width: 896, height: 896 }],
  },
  twitter: {
    card: "summary",
    title: "Lumen Web — Sites e Automações",
    description:
      "Já geramos mais de R$10 milhões em resultado para nossos clientes.",
    images: ["/brand/logo-icon-square-bg.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
