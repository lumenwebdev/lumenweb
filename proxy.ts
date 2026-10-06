import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, hasLocale } from "./app/[lang]/locales";

// Standalone routes that live outside the /[lang] locale tree and must
// never be redirected into it (campaign landing pages, etc).
const STANDALONE_ROUTES = ["oferta"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first] = pathname.split("/");

  if (hasLocale(first) || STANDALONE_ROUTES.includes(first)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/|api/|favicon.ico|icon.png|brand/|.*\\..*).*)",
  ],
};
