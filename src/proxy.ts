import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { legacyDestination } from "@/lib/legacy-redirects";

const APEX_HOST = "freeporthvacil.com";
const REDIRECT_HOSTS = new Set([
  "www.freeporthvacil.com",
  "freeport-il-hvac.vercel.app",
]);

function withSlash(pathname: string) {
  if (pathname === "/") return "/";
  if (/\.[a-z0-9]+$/i.test(pathname)) return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function proxy(request: NextRequest) {
  const requestHost = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const url = request.nextUrl.clone();
  const pathname = url.pathname;
  const lowercasePath = pathname.toLowerCase();
  const hostRedirect = REDIRECT_HOSTS.has(requestHost);
  const caseRedirect = pathname !== lowercasePath;
  const legacyPath = legacyDestination(lowercasePath);
  const slashPath = withSlash(lowercasePath);
  const needsSlash = slashPath !== pathname;

  if (!hostRedirect && !caseRedirect && !legacyPath && !needsSlash) {
    return NextResponse.next();
  }

  if (hostRedirect) {
    url.protocol = "https:";
    url.hostname = APEX_HOST;
    url.port = "";
    // Drop query strings when leaving the old host so they are not a second URL.
    url.search = "";
  }
  const desired = `${legacyPath ?? slashPath}${url.search}`;
  // NextResponse.redirect rejects a pathname that already ends in a slash
  // when skipTrailingSlashRedirect is on, so set an absolute Location after.
  url.pathname = desired === "/" ? "/" : desired.replace(/\/$/, "").split("?")[0];
  const response = NextResponse.redirect(url, 301);
  response.headers.set("location", `${request.nextUrl.origin}${desired}`);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
