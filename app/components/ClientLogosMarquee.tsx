import Image from "next/image";
import { Container } from "./ui/Container";
import { SHOW_CLIENT_LOGOS } from "../site-config";

export type ClientLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

/**
 * "Marcas que confiam na Lumen Web" marquee.
 *
 * Off by default (SHOW_CLIENT_LOGOS in app/site-config.ts). Turn it on only
 * once real, authorized client logos are added to `logos` below and to
 * public/brand/clients/. Never use third-party logos as decoration.
 */
export function ClientLogosMarquee({
  eyebrow,
  logos,
}: {
  eyebrow: string;
  logos: ClientLogo[];
}) {
  if (!SHOW_CLIENT_LOGOS || logos.length === 0) return null;

  const track = [...logos, ...logos];

  return (
    <section className="border-t border-border py-16">
      <Container>
        <p className="text-center eyebrow-label text-muted-2">{eyebrow}</p>
      </Container>
      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16">
          {track.map((logo, i) => (
            <Image
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto shrink-0 opacity-60 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
