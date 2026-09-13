"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { serviceLinks } from "@/lib/nav";
import { isPhoneConfigured, phoneDisplayLabel } from "@/lib/site";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function isValidZip(value: string) {
  return /^\d{5}(?:-\d{4})?$/.test(value.trim());
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "missing" | "error">(
    "idle",
  );
  const [fieldError, setFieldError] = useState<string | null>(null);
  const started = useRef(false);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    track("form_started");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldError(null);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const phone = String(data.phone ?? "");
    const zip = String(data.zip ?? "");

    if (digitsOnly(phone).length < 10) {
      setFieldError("Enter a 10-digit phone number.");
      return;
    }
    if (!isValidZip(zip)) {
      setFieldError("Enter a 5-digit ZIP code.");
      return;
    }

    setStatus("sending");
    track("form_submitted");

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
    "mt-1 w-full border border-line bg-white px-3 py-3 text-ink";

  return (
    <form
      onSubmit={onSubmit}
      onFocus={markStarted}
      className="grid gap-4 border border-line bg-white p-5 sm:p-6"
      noValidate
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
        <label htmlFor="message" className="block text-sm font-semibold text-spruce">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={field}
          placeholder="What stopped working?"
        />
      </div>
      {fieldError ? <p className="text-sm text-danger">{fieldError}</p> : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 bg-spruce px-5 py-3 text-sm font-semibold text-white hover:bg-spruce-mid disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Request a callback"}
      </button>
      {status === "ok" ? (
        <p className="text-sm text-ok">Request received. We will follow up.</p>
      ) : null}
      {status === "missing" ? (
        <p className="text-sm text-spruce">
          Online requests are not available right now.
          {isPhoneConfigured()
            ? ` Please call ${phoneDisplayLabel()} instead.`
            : " Please try again later."}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-danger">
          The form could not send.
          {isPhoneConfigured()
            ? ` Use ${phoneDisplayLabel()} instead.`
            : " Please try again in a few minutes."}
        </p>
      ) : null}
    </form>
  );
}
