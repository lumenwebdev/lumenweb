import { Logo } from "./Logo";
import { Container } from "./ui/Container";
import { SITE_INSTAGRAM_HANDLE, SITE_INSTAGRAM_URL, SITE_URL } from "../site-config";
import type { Locale } from "../[lang]/locales";
import type { Dictionary } from "../[lang]/dictionaries";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const t = dict.footer;

  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo lang={lang} />
          <p className="text-sm text-muted">{t.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted sm:items-end">
          <div className="flex items-center gap-4">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-text"
            >
              lumenweb.site
            </a>
            <span className="text-border-strong">·</span>
            <a
              href={SITE_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-text"
            >
              {SITE_INSTAGRAM_HANDLE}
            </a>
          </div>
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Lumen Web. {t.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
