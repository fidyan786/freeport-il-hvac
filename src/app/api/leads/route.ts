import { NextResponse } from "next/server";
import { cleanText, serializeLead } from "@/lib/chat/serialize";
import type { Lead } from "@/lib/chat/types";
import { allowRequest, clientKey } from "@/lib/rate-limit";

export const maxDuration = 15;

function asLead(value: unknown): Lead | null {
  if (!value || typeof value !== "object") return null;
  const raw = value as Partial<Lead>;
  const sessionId = cleanText(raw.sessionId, 80);
  if (!sessionId) return null;
  return {
    sessionId,
    timestamp: cleanText(raw.timestamp, 40) || new Date().toISOString(),
    sourcePage: cleanText(raw.sourcePage, 200),
    serviceType: raw.serviceType ?? null,
    intent: raw.intent ?? null,
    issue: cleanText(raw.issue, 200) || null,
    systemStatus: raw.systemStatus ?? null,
    propertyType: raw.propertyType ?? null,
    zip: cleanText(raw.zip, 10) || null,
    urgency: raw.urgency ?? null,
    name: cleanText(raw.name, 80) || null,
    phone: cleanText(raw.phone, 20) || null,
    qualificationStatus: raw.qualificationStatus ?? "started",
    summary: cleanText(raw.summary, 500),
    highIntent: Boolean(raw.highIntent),
    safety: Boolean(raw.safety),
    asked: [],
    provided: Array.isArray(raw.provided)
      ? raw.provided.filter((item): item is Lead["provided"][number] => typeof item === "string")
      : [],
  };
}

export async function POST(request: Request) {
  if (!allowRequest(`lead:${clientKey(request)}`, 12, 60_000)) {
    return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (cleanText(body.companyWebsite)) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const lead = asLead(body.lead);
  if (!lead) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const webhook = process.env.FORM_WEBHOOK?.trim();
  if (!webhook) {
    return NextResponse.json({ ok: true, stored: false, reason: "not_configured" });
  }

  const payload = {
    source: "chatbot",
    ...serializeLead(lead),
    submittedAt: new Date().toISOString(),
  };

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, stored: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
