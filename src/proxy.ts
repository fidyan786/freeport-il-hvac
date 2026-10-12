import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { legacyDestination } from "@/lib/legacy-redirects";

const APEX_HOST = "freeporthvacil.com";

function canonicalPath(pathname: string) {
  const lower = pathname.toLowerCase();
  const legacy = legacyDestination(lower);
  if (legacy) return legacy;
  if (lower === "/" || lower.startsWith("/.well-known/")) return lower;
  if (/\.[a-z0-9]{1,8}$/i.test(lower)) return lower;
  if (/\/(icon|apple-icon|opengraph-image)\/?$/i.test(lower)) {
    return lower.replace(/\/$/, "");
  }
  return lower.endsWith("/") ? lower : `${lower}/`;
}

export function proxy(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const forwarded =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim().toLowerCase() ?? "";
  const productionHost = host === APEX_HOST || host === `www.${APEX_HOST}`;
  // Redirect plain http only when the proxy says so. A missing header is left
  // alone so Hostinger's internal http hop cannot loop.
  const needsHttpsApex = host === `www.${APEX_HOST}` || (productionHost && forwarded === "http");
  const path = canonicalPath(request.nextUrl.pathname);
  const pathChanged = path !== request.nextUrl.pathname;

  if (!needsHttpsApex && !pathChanged) {
    return NextResponse.next();
  }

  const origin = needsHttpsApex || productionHost ? `https://${APEX_HOST}` : request.nextUrl.origin;
  return NextResponse.redirect(`${origin}${path}${request.nextUrl.search}`, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
