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
  const [headerH, setHeaderH] = useState(72);
  const menuId = useId();
  const drawerId = useId();
  const wrapRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (route !== pathname) {
    setRoute(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const sync = () => setHeaderH(Math.round(el.getBoundingClientRect().height));
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAll();
        buttonRef.current?.focus();
      }
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
    <header
      ref={wrapRef}
      className="sticky top-0 z-[80] border-b border-white/10 bg-spruce text-white"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0" onClick={closeAll}>
          <Logo invert compact />
          <span className="sr-only">Millrace Heating & Air home</span>
        </Link>

        <nav className="hidden min-w-0 items-center gap-1 xl:flex" aria-label="Primary">
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
            aria-expanded={servicesOpen}
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={() => setServicesOpen(true)}
            onMouseEnter={() => setServicesOpen(true)}
            onFocus={() => setServicesOpen(true)}
          >
            Services
            <span aria-hidden="true" className="text-[0.65rem]">
              {servicesOpen ? "▴" : "▾"}
            </span>
          </button>
          {desktopLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
              onMouseEnter={
                item.label === "Heating" || item.label === "Cooling"
                  ? () => setServicesOpen(true)
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PhoneCta context="header" className="hidden min-h-11 px-4 py-2 sm:inline-flex">
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

      {servicesOpen ? (
        <div
          id={menuId}
          role="navigation"
          aria-label="Services"
          className="fixed inset-x-0 z-[90] hidden xl:block"
          style={{ top: headerH, backgroundColor: "#f7f3ec" }}
        >
          <div
            className="border-t border-[#d5cfc4] shadow-[0_24px_50px_rgba(12,34,28,0.28)]"
            style={{ backgroundColor: "#f7f3ec", color: "#1a1c19" }}
          >
            <div className="mx-auto grid max-h-[min(70vh,32rem)] max-w-6xl grid-cols-2 gap-x-6 gap-y-5 overflow-y-auto px-4 py-5 sm:px-6 md:grid-cols-3 xl:grid-cols-6">
              {megaGroups.map((group) => (
                <div key={group.id} className="min-w-0">
                  <Link
                    href={group.href}
                    className="text-[11px] font-semibold tracking-[0.14em] text-[#c45c26] uppercase"
                    onClick={closeAll}
                  >
                    {group.title}
                  </Link>
                  <ul className="mt-3 grid gap-1.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-0.5 text-sm font-medium text-[#14352c] hover:text-[#c45c26]"
                          onClick={closeAll}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 border-t border-[#d5cfc4] px-4 py-3 sm:px-6">
              <p className="text-xs text-[#5a615c]">
                Heating and cooling for Freeport, Illinois 61032.
              </p>
              <Link
                href="/services/"
                className="shrink-0 text-sm font-semibold text-[#14352c]"
                onClick={closeAll}
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {open ? (
        <div
          id={drawerId}
          className="drawer-in fixed inset-0 z-[100] bg-spruce-deep xl:hidden"
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
              {desktopLinks.map((item) => (
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
            <PhoneCta context="mobile-menu" className="mt-6 min-h-12 w-full">
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
