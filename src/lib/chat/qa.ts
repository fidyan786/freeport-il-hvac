import { createLead, openingTurn, processTurn } from "@/lib/chat/engine";
import { extractSignals } from "@/lib/chat/extract";

type Case = {
  name: string;
  page?: string;
  messages: string[];
  expect: (reply: string, extras: ReturnType<typeof processTurn>) => string | null;
};

function run(text: string, page = "/", prior?: ReturnType<typeof processTurn>) {
  const lead = prior?.lead ?? createLead("qa", page);
  return processTurn({ text, lead, pagePath: page });
}

const cases: Case[] = [
  {
    name: "AC not cooling",
    messages: ["My AC isn't cooling."],
    expect: (reply, result) => {
      if (result.lead.serviceType !== "ac_repair") return "expected AC repair intent";
      if (!result.showCall && !result.lead.serviceType) return "expected AC path";
      if (/\$\d/.test(reply)) return "invented price";
      return null;
    },
  },
  {
    name: "Furnace stopped working",
    messages: ["My furnace stopped working."],
    expect: (reply, result) => {
      if (result.lead.serviceType !== "furnace_repair") return "expected furnace repair";
      if (!result.lead.highIntent) return "expected high intent";
      if (!result.showCall) return "expected call path";
      if (/\$\d/.test(reply)) return "invented price";
      return null;
    },
  },
  {
    name: "New AC system",
    messages: ["I need a new AC system."],
    expect: (_reply, result) => {
      if (result.lead.serviceType !== "ac_install") return "expected AC install";
      if (result.lead.intent !== "replace") return "expected replace intent";
      return null;
    },
  },
  {
    name: "Heat pump noise",
    messages: ["My heat pump is making noise."],
    expect: (_reply, result) => {
      if (result.lead.serviceType !== "heat_pump") return "expected heat pump";
      if (result.lead.systemStatus !== "abnormal") return "expected abnormal status";
      return null;
    },
  },
  {
    name: "ZIP and today",
    messages: ["I'm in 61032 and need someone today."],
    expect: (reply, result) => {
      if (result.lead.zip !== "61032") return "expected ZIP 61032";
      if (result.lead.urgency !== "now") return "expected urgency now";
      if (/\bwhat zip\b/i.test(reply)) return "re-asked ZIP";
      if (/\bwhen do you need\b/i.test(reply)) return "re-asked urgency";
      if (!result.showCall) return "expected call CTA";
      return null;
    },
  },
  {
    name: "No fake price",
    messages: ["How much does HVAC repair cost?"],
    expect: (reply, result) => {
      if (/\$\d/.test(reply)) return "invented dollar amount";
      if (!/depend/i.test(reply)) return "expected cost-depends explanation";
      if (!result.showCall) return "expected Call Now";
      return null;
    },
  },
  {
    name: "Gas safety",
    messages: ["I smell gas."],
    expect: (reply, result) => {
      if (!result.safety) return "expected safety flag";
      if (!/911/.test(reply)) return "expected 911";
      if (!/Nicor/i.test(reply)) return "expected Nicor Gas";
      return null;
    },
  },
  {
    name: "Commercial HVAC",
    messages: ["I need HVAC for my business."],
    expect: (_reply, result) => {
      if (result.lead.serviceType !== "commercial") return "expected commercial";
      if (result.lead.propertyType !== "business") return "expected business property";
      return null;
    },
  },
  {
    name: "Need someone right now",
    messages: ["I need someone right now."],
    expect: (_reply, result) => {
      if (!result.lead.highIntent) return "expected high intent";
      if (!result.showCall) return "expected immediate Call Now";
      return null;
    },
  },
  {
    name: "All details in one message",
    messages: [
      "My AC stopped working in Freeport 61032. I'm the homeowner and need someone today.",
    ],
    expect: (reply, result) => {
      if (result.lead.serviceType !== "ac_repair") return "expected AC";
      if (result.lead.zip !== "61032") return "expected ZIP";
      if (result.lead.propertyType !== "home") return "expected home";
      if (result.lead.urgency !== "now") return "expected today";
      if (/\bwhat zip\b/i.test(reply)) return "re-asked ZIP";
      if (/\bhome or a business\b/i.test(reply)) return "re-asked property";
      if (/\bwhen do you need\b/i.test(reply)) return "re-asked urgency";
      if (!result.showCall) return "expected Call Now";
      return null;
    },
  },
];

export function runChatQa() {
  const opening = openingTurn("qa", "/");
  const results: { name: string; pass: boolean; detail: string }[] = [];

  if (!/heating or cooling/i.test(opening.reply)) {
    results.push({
      name: "Opening message",
      pass: false,
      detail: "homepage greeting missing",
    });
  } else {
    results.push({ name: "Opening message", pass: true, detail: "ok" });
  }

  const extracted = extractSignals("My AC isn't getting cold.");
  results.push({
    name: "NLU AC phrase",
    pass: extracted.serviceType === "ac_repair",
    detail: extracted.serviceType ?? "none",
  });

  for (const test of cases) {
    let current: ReturnType<typeof processTurn> | undefined;
    let lastReply = "";
    for (const message of test.messages) {
      current = run(message, test.page ?? "/", current);
      lastReply = current.reply;
    }
    if (!current) {
      results.push({ name: test.name, pass: false, detail: "no result" });
      continue;
    }
    const error = test.expect(lastReply, current);
    results.push({
      name: test.name,
      pass: !error,
      detail: error ?? lastReply.slice(0, 140),
    });
  }

  return results;
}

function isMain() {
  const argv1 = process.argv[1]?.replace(/\\/g, "/");
  return Boolean(argv1?.endsWith("/qa.ts") || argv1?.endsWith("/qa.js"));
}

if (isMain()) {
  const rows = runChatQa();
  let failed = 0;
  for (const row of rows) {
    console.log(`${row.pass ? "PASS" : "FAIL"}  ${row.name} — ${row.detail}`);
    if (!row.pass) failed += 1;
  }
  if (failed > 0) {
    process.exitCode = 1;
  }
}
