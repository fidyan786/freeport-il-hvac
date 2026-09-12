"use client";

import { useState } from "react";
import { serviceLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "missing" | "error">(
    "idle",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
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

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-sm border border-line bg-white p-5 sm:p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-sm border border-line px-3 py-3"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-sm border border-line px-3 py-3"
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-navy">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-1 w-full rounded-sm border border-line px-3 py-3"
        >
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
        <label htmlFor="message" className="block text-sm font-semibold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-sm border border-line px-3 py-3"
          placeholder="What stopped working, and which ZIP?"
        />
      </div>
      <p className="text-xs text-muted">
        This form is secondary to calling {site.phoneDisplay}. Delivery is
        connected only after a form endpoint is configured.
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-mid disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-ok">Request received. We will follow up.</p>
      ) : null}
      {status === "missing" ? (
        <p className="text-sm text-navy">
          Form delivery is not connected yet. Please call {site.phoneDisplay}.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-danger">
          The form could not send. Call {site.phoneDisplay} instead.
        </p>
      ) : null}
    </form>
  );
}
