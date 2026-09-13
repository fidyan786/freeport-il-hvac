"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { serviceLinks } from "@/lib/nav";
import { phoneDisplayLabel } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "missing" | "error">(
    "idle",
  );
  const started = useRef(false);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    track("form_started");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    track("form_submitted");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 503) {
        setStatus("missing");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-1 w-full rounded-xl border border-line bg-white px-3 py-3 text-ink";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={markStarted}
      className="grid gap-4 rounded-2xl border border-line bg-white p-5 sm:p-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-spruce">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-spruce">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-spruce">
          Service
        </label>
        <select id="service" name="service" required defaultValue="" className={field}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceLinks.map((item) => (
            <option key={item.href} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="problem" className="block text-sm font-semibold text-spruce">
          Problem
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={4}
          required
          className={field}
          placeholder="What stopped working?"
        />
      </div>
      <div>
        <label htmlFor="zip" className="block text-sm font-semibold text-spruce">
          ZIP
        </label>
        <input
          id="zip"
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          required
          className={field}
        />
      </div>
      <div>
        <label htmlFor="contactMethod" className="block text-sm font-semibold text-spruce">
          Preferred contact method
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          required
          defaultValue="phone"
          className={field}
        >
          <option value="phone">Phone</option>
          <option value="text">Text</option>
          <option value="either">Either</option>
        </select>
      </div>
      <p className="text-xs text-muted">
        This form is a backup if you cannot call. Delivery is connected only
        after a form endpoint is configured.
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 rounded-full bg-spruce px-5 py-3 text-sm font-semibold text-white hover:bg-spruce-mid disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-ok">Request received. We will follow up.</p>
      ) : null}
      {status === "missing" ? (
        <p className="text-sm text-spruce">
          Form delivery is not connected yet. Use the request button or call
          when a number is configured.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-danger">
          The form could not send. Use {phoneDisplayLabel()} instead.
        </p>
      ) : null}
    </form>
  );
}
