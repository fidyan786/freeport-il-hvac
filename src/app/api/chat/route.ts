import { generateText, gateway, Output } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { processTurn, stripInventedPrices } from "@/lib/chat/engine";
import { cleanText, serializeLead } from "@/lib/chat/serialize";
import type { Lead } from "@/lib/chat/types";
import { allowRequest, clientKey } from "@/lib/rate-limit";
import { site } from "@/lib/site";

export const maxDuration = 20;
export const runtime = "nodejs";

const RewriteSchema = z.object({
  reply: z.string().max(600),
});

function aiConfigured() {
  return Boolean(
    process.env.AI_GATEWAY_API_KEY?.trim() ||
      process.env.VERCEL_OIDC_TOKEN?.trim(),
  );
}

function asLead(value: unknown, sessionId: string, pagePath: string): Lead {
  const raw = value && typeof value === "object" ? (value as Partial<Lead>) : {};
  return {
    sessionId: cleanText(raw.sessionId, 80) || sessionId,
    timestamp: cleanText(raw.timestamp, 40) || new Date().toISOString(),
    sourcePage: cleanText(raw.sourcePage, 200) || pagePath,
    serviceType: raw.serviceType ?? null,
    intent: raw.intent ?? null,
    issue: raw.issue ?? null,
    systemStatus: raw.systemStatus ?? null,
    propertyType: raw.propertyType ?? null,
    zip: raw.zip ?? null,
    urgency: raw.urgency ?? null,
    name: raw.name ?? null,
    phone: raw.phone ?? null,
    qualificationStatus: raw.qualificationStatus ?? "started",
    summary: raw.summary ?? "",
    highIntent: Boolean(raw.highIntent),
    safety: Boolean(raw.safety),
    asked: Array.isArray(raw.asked)
      ? raw.asked.filter((item): item is string => typeof item === "string").slice(0, 20)
      : [],
    provided: Array.isArray(raw.provided)
      ? raw.provided.filter((item): item is Lead["provided"][number] => typeof item === "string").slice(0, 20)
      : [],
  };
}

async function polishReply(draft: string, userText: string, lead: Lead) {
  if (!aiConfigured()) return null;

  const { output } = await generateText({
    model: gateway("google/gemini-3.8-flash"),
    output: Output.object({ schema: RewriteSchema }),
    timeout: 8000,
    maxOutputTokens: 250,
    temperature: 0.2,
    providerOptions: {
      gateway: {
        models: ["google/gemini-3.5-flash", "openai/gpt-5.4-mini"],
        tags: ["feature:hvac-chat"],
      },
    },
    system: `You rewrite replies for a Freeport, Illinois HVAC lead-conversion chatbot.
Rules:
- Keep 1-3 short sentences.
- Sound human, calm, local, and direct.
- Do not add facts that are not in the draft.
- Do not invent company name, phone, hours, prices, licenses, ratings, or guarantees.
- Do not diagnose equipment with certainty.
- Do not ask for ZIP, property type, or urgency if the known lead already has that field.
- Never include dollar amounts.
- If the draft includes a safety warning, keep 911 and Nicor Gas.
- Current public phone display: ${site.phoneDisplay}
- Known lead JSON: ${JSON.stringify(serializeLead(lead))}`,
    prompt: `Visitor said: ${userText}\n\nDraft reply:\n${draft}\n\nRewrite the draft. Keep the same question, if any.`,
  });

  return output?.reply?.trim() || null;
}

export async function POST(request: Request) {
  if (!allowRequest(`chat:${clientKey(request)}`, 40, 60_000)) {
    return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 });
  }

  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (cleanText(body.companyWebsite)) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const pagePath = cleanText(body.pagePath, 200) || "/";
  const sessionId = cleanText(body.sessionId, 80) || "session";
  const text = cleanText(body.text, 1000);
  const quickReplyId = cleanText(body.quickReplyId, 40) || null;
  const lead = asLead(body.lead, sessionId, pagePath);

  const engine = processTurn({
    text,
    lead,
    pagePath,
    quickReplyId,
  });

  let reply = engine.reply;
  let usedAi = false;

  try {
    const polished = await polishReply(engine.reply, text, engine.lead);
    if (polished) {
      const safe = stripInventedPrices(polished);
      const asksZip = /\bwhat zip\b/i.test(safe);
      const alreadyHasZip = Boolean(engine.lead.zip);
      if (!(asksZip && alreadyHasZip)) {
        reply = safe;
        usedAi = true;
      }
    }
  } catch {
    usedAi = false;
  }

  return NextResponse.json({
    ok: true,
    usedAi,
    reply,
    lead: engine.lead,
    quickReplies: engine.quickReplies,
    showCall: engine.showCall,
    safety: engine.safety,
    serviceHref: engine.serviceHref,
    serviceLabel: engine.serviceLabel,
    fallbackChoices: engine.fallbackChoices,
  });
}
