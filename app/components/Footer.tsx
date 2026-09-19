import { Logo } from "./Logo";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Logo />
          <p className="text-sm text-muted">Sites e Automações</p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-muted sm:items-end">
          <div className="flex items-center gap-4">
            <a
              href="https://lumenweb.site"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              lumenweb.site
            </a>
            <span className="text-border-strong">·</span>
            <a
              href="https://instagram.com/lumenwebco"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              @lumenwebco
            </a>
          </div>
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Lumen Web. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
