import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "freeporthvacil.com";
const REDIRECT_HOSTS = new Set([
  "www.freeporthvacil.com",
  "freeport-il-hvac.vercel.app",
]);

export function proxy(request: NextRequest) {
  const requestHost = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const lowercasePath = pathname.toLowerCase();
  const hostRedirect = REDIRECT_HOSTS.has(requestHost);
  const caseRedirect = pathname !== lowercasePath;

  if (!hostRedirect && !caseRedirect) {
    return NextResponse.next();
  }

  if (hostRedirect) {
    url.protocol = "https:";
    url.hostname = APEX_HOST;
    url.port = "";
    // Drop query strings when leaving the old host so they are not a second URL.
    url.search = "";
  }
  if (caseRedirect) {
    url.pathname = lowercasePath;
  }

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
