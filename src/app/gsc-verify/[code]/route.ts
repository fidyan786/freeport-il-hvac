import { googleSiteVerification } from "@/lib/site";

export const runtime = "nodejs";

function tokenMatches(code: string, token: string) {
  const requested = code.replace(/\.html$/i, "");
  const normalizedToken = token.replace(/\.html$/i, "");
  return (
    requested === normalizedToken ||
    requested === normalizedToken.replace(/^google/i, "") ||
    `google${requested}` === normalizedToken ||
    requested === `google${normalizedToken}`
  );
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ code: string }> },
) {
  const token = googleSiteVerification();
  if (!token) {
    return new Response("Not found", { status: 404 });
  }

  const { code } = await context.params;
  if (!tokenMatches(code, token)) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(`google-site-verification: ${token}\n`, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
