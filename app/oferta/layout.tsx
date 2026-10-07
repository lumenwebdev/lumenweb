import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "../components/SmoothScroll";
import { OFERTA_META_PIXEL_ID, SITE_URL } from "../site-config";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

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
      <body className="oferta-theme min-h-full flex flex-col bg-background text-foreground">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${OFERTA_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${OFERTA_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <SmoothScroll>{children}</SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
