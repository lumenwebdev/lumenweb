import type { Metadata } from "next";
import { ObrigadoRedirect } from "../components/ObrigadoRedirect";

export const metadata: Metadata = {
  title: "Obrigado | Lumen Web",
  robots: { index: false, follow: false },
};

export default async function ObrigadoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const message = typeof params.msg === "string" ? params.msg : undefined;
  const src = typeof params.src === "string" ? params.src : undefined;

  return <ObrigadoRedirect message={message} src={src} />;
}
