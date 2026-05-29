import { type NextRequest, NextResponse } from "next/server";

const STORAGE_KEY = "pms_lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const lang = request.cookies.get(STORAGE_KEY)?.value;

  if (lang !== "vi" && lang !== "en") {
    response.cookies.set(STORAGE_KEY, "vi", {
      path: "/",
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\..*).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
