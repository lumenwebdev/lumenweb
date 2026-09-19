import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { getDictionary, hasLocale, locales, type Locale } from "./dictionaries";
import { notFound } from "next/navigation";
import { SmoothScroll } from "../components/SmoothScroll";
import { SITE_INSTAGRAM_URL, SITE_URL } from "../site-config";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}/${locale}`]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s · Lumen Web`,
    },
    description: dict.meta.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages,
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: "Lumen Web",
      locale: lang,
      type: "website",
      images: [{ url: "/brand/logo-icon-square-bg.png", width: 896, height: 896 }],
    },
    twitter: {
      card: "summary",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/brand/logo-icon-square-bg.png"],
    },
  };
}

const htmlLang: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
  es: "es",
  "pt-PT": "pt-PT",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lumen Web",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-icon-square-bg.png`,
  sameAs: [SITE_INSTAGRAM_URL],
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={htmlLang[lang]} className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
