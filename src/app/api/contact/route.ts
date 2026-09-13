import { NextResponse } from "next/server";

const MAX = 2000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX) : "";
}

function isValidZip(value: string) {
  return /^\d{5}(?:-\d{4})?$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const message = clean(body.message) || clean(body.problem);
  const payload = {
    name: clean(body.name),
    phone: clean(body.phone),
    service: clean(body.service),
    problem: message,
    zip: clean(body.zip).slice(0, 10),
    contactMethod: clean(body.contactMethod) || "phone",
    message,
    submittedAt: new Date().toISOString(),
  };

  if (
    !payload.name ||
    payload.phone.replace(/\D/g, "").length < 10 ||
    !payload.service ||
    !payload.message ||
    !isValidZip(payload.zip)
  ) {
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
