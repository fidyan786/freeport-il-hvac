import { NextResponse } from "next/server";

const MAX = 2000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payload = {
    name: clean(body.name),
    phone: clean(body.phone),
    service: clean(body.service),
    message: clean(body.message),
    submittedAt: new Date().toISOString(),
  };

  if (!payload.name || !payload.phone || !payload.service) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const webhook = process.env.FORM_WEBHOOK?.trim();
  if (!webhook) {
    return NextResponse.json(
      { ok: false, reason: "not_configured" },
      { status: 503 },
    );
  }

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
