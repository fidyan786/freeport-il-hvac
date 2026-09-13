"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneCta } from "@/components/PhoneCta";
import { megaGroups, primaryNav } from "@/lib/nav";
import { primaryCtaLabel } from "@/lib/site";

const desktopLinks = primaryNav.filter((item) => item.label !== "Services");

export function Header() {
  const pathname = usePathname();
  const [route, setRoute] = useState(pathname);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>("heating");
  const menuId = useId();
  const drawerId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number>(0);

  if (route !== pathname) {
    setRoute(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  function openMega() {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function delayCloseMega() {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeAll();
    }
    function onPointer(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-spruce text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0" onClick={closeAll}>
          <Logo invert compact />
          <span className="sr-only">Millrace Heating & Air home</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          <div
            ref={wrapRef}
            className="relative"
            onMouseEnter={openMega}
            onMouseLeave={delayCloseMega}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="rounded-full px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
              aria-expanded={servicesOpen}
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={openMega}
              onFocus={openMega}
            >
              Services
            </button>
            {servicesOpen ? (
              <div
                id={menuId}
                className="mega-panel absolute top-full left-1/2 z-50 mt-3 max-h-[min(36rem,70vh)] w-[min(72rem,calc(100vw-2rem))] -translate-x-[42%] overflow-y-auto rounded-2xl border border-line bg-cream p-6 text-ink shadow-[0_24px_80px_-32px_rgba(12,34,28,0.55)]"
              >
                <div className="grid gap-6 lg:grid-cols-3">
                  {megaGroups.map((group) => (
                    <div key={group.id}>
                      <Link
                        href={group.href}
                        className="text-xs font-semibold tracking-[0.16em] text-copper uppercase"
                        onClick={closeAll}
                      >
                        {group.title}
                      </Link>
                      <ul className="mt-3 grid gap-1">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="group flex items-start gap-3 rounded-xl px-2 py-2 hover:bg-white"
                              onClick={closeAll}
                            >
                              <span className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-spruce/10 text-spruce">
                                <ServiceGlyph name={group.id} />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-spruce">
                                  {item.label}
                                </span>
                                {item.description ? (
                                  <span className="mt-0.5 block text-xs leading-snug text-muted">
                                    {item.description}
                                  </span>
                                ) : null}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                  <p className="text-sm text-muted">
                    Heating and cooling service for Freeport, Illinois 61032.
                  </p>
                  <Link
                    href="/services/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-spruce"
                    onClick={closeAll}
                  >
                    View all services
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
          {desktopLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PhoneCta
            context="header"
            className="hidden min-h-11 px-4 py-2 sm:inline-flex"
          >
            {primaryCtaLabel()}
          </PhoneCta>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20 xl:hidden"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Hamburger open={open} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={drawerId}
          className="drawer-in fixed inset-0 z-50 bg-spruce-deep xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-[100dvh] flex-col overflow-y-auto px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4">
            <div className="mb-6 flex items-center justify-between">
              <Logo invert compact />
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/20"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <Hamburger open />
              </button>
            </div>
            <nav aria-label="Mobile">
              <Link
                href="/"
                className="block border-b border-white/10 py-3 text-lg"
                onClick={closeAll}
              >
                Home
              </Link>
              {megaGroups.map((group) => {
                const expanded = expandedGroup === group.id;
                return (
                  <div key={group.id} className="border-b border-white/10">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-lg"
                      aria-expanded={expanded}
                      onClick={() =>
                        setExpandedGroup(expanded ? null : group.id)
                      }
                    >
                      {group.title}
                      <span aria-hidden="true">{expanded ? "–" : "+"}</span>
                    </button>
                    {expanded ? (
                      <ul className="pb-3">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block py-2 pl-3 text-white/80"
                              onClick={closeAll}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
              {primaryNav
                .filter((item) => item.label !== "Services")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block border-b border-white/10 py-3 text-lg"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>
            <PhoneCta context="mobile-menu" className="mt-6 w-full min-h-12">
              {primaryCtaLabel()}
            </PhoneCta>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-4" aria-hidden="true">
      <span
        className={`absolute left-0 block h-0.5 w-4 bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
      />
      <span
        className={`absolute top-1.5 left-0 block h-0.5 w-4 bg-white transition ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-4 bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
      />
    </span>
  );
}

function ServiceGlyph({ name }: { name: string }) {
  const common = "h-8 w-8 p-1.5";
  if (name === "cooling") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3v18M4.5 7.5l15 9M4.5 16.5l15-9" />
      </svg>
    );
  }
  if (name === "heating") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 21c4-3 6-6.2 6-9.4C18 7.5 15.3 5 12 5S6 7.5 6 11.6C6 14.8 8 18 12 21Z" />
      </svg>
    );
  }
  if (name === "iaq") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 12h16M6 8h12M8 16h8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "commercial") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 20V8l8-4 8 4v12H4Z" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="5" y="8" width="14" height="10" rx="1.5" />
      <path d="M9 8V6h6v2M8 13h.01M12 13h.01M16 13h.01" strokeLinecap="round" />
    </svg>
  );
}
