import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "../components/SmoothScroll";
import { SITE_URL } from "../site-config";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const title = "Site profissional em 7 dias por 249 € | Lumen Web Portugal";
const description =
  "Site de uma página, textos de venda, botão de WhatsApp e configuração básica no Google. Pagamento único de 249 €, sem mensalidades.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/oferta`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/oferta`,
    siteName: "Lumen Web",
    locale: "pt_PT",
    type: "website",
    images: [{ url: "/brand/logo-icon-square-bg.png", width: 896, height: 896 }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/brand/logo-icon-square-bg.png"],
  },
  robots: { index: true, follow: true },
};

export default function OfertaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
