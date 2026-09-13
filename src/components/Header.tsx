"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { PhoneCta } from "@/components/PhoneCta";
import { megaGroups, primaryNav } from "@/lib/nav";
import { BRAND, isPhoneConfigured, primaryCtaLabel } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const menuId = useId();
  const drawerId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const phoneReady = isPhoneConfigured();

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- close menus on route change */
    setOpen(false);
    setServicesOpen(false);
    setExpandedGroup(null);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname]);

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  function closeAfterNavigate() {
    window.setTimeout(closeAll, 0);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        event.preventDefault();
        setServicesOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (open) setOpen(false);
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
  }, [servicesOpen, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-spruce text-white">
      <div
        ref={wrapRef}
        className="relative mx-auto flex min-w-0 max-w-6xl items-center gap-3 px-4 py-3 sm:px-6"
      >
        <Link
          href="/"
          className="min-w-0 shrink-0"
          aria-label={`${BRAND.name} home`}
          onClick={closeAfterNavigate}
        >
          <Logo invert compact decorative />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm text-white/90 hover:text-white"
            aria-expanded={servicesOpen}
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={() => setServicesOpen((value) => !value)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setServicesOpen(true);
                window.requestAnimationFrame(() => {
                  wrapRef.current
                    ?.querySelector<HTMLElement>("[data-mega-menu] a")
                    ?.focus();
                });
              }
            }}
          >
            Services
            <span aria-hidden="true" className="text-[0.65rem]">
              {servicesOpen ? "▴" : "▾"}
            </span>
          </button>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-white/90 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            {phoneReady ? (
              <>
                <PhoneCta
                  context="header-call"
                  className="min-h-10 px-4 py-2"
                >
                  {primaryCtaLabel()}
                </PhoneCta>
                <Link
                  href="/contact/"
                  className="inline-flex min-h-10 items-center justify-center border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Request Service
                </Link>
              </>
            ) : (
              <PhoneCta
                context="header-request"
                className="min-h-10 px-4 py-2"
              >
                Request Service
              </PhoneCta>
            )}
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls={drawerId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Hamburger open={open} />
          </button>
        </div>

        {servicesOpen ? (
          <div
            id={menuId}
            role="navigation"
            aria-label="Services"
            data-mega-menu="true"
            className="mega-panel absolute top-full right-0 left-0 z-50 hidden border border-t-0 border-line text-ink shadow-[0_20px_40px_rgba(17,18,17,0.2)] lg:block"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="grid max-h-[min(70vh,36rem)] grid-cols-3 gap-x-8 gap-y-6 overflow-y-auto p-6">
              {megaGroups.map((group) => (
                <div key={group.id} className="min-w-0">
                  <h3 className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                    <Link
                      href={group.href}
                      className="hover:text-spruce"
                      onClick={closeAfterNavigate}
                    >
                      {group.title}
                    </Link>
                  </h3>
                  <ul className="mt-3 grid gap-1.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-0.5 text-sm text-spruce hover:text-copper"
                          onClick={closeAfterNavigate}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-line px-6 py-3">
              <p className="text-xs text-muted">Freeport, Illinois 61032</p>
              <Link
                href="/services/"
                className="shrink-0 text-sm font-semibold text-spruce"
                onClick={closeAfterNavigate}
              >
                View all services
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>

      {open ? (
        <div
          id={drawerId}
          className="drawer-in fixed inset-0 z-[60] bg-spruce-deep lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-[100dvh] flex-col overflow-y-auto px-4 pb-[max(5rem,env(safe-area-inset-bottom))] pt-4">
            <div className="mb-6 flex items-center justify-between">
              <Link
                href="/"
                aria-label={`${BRAND.name} home`}
                onClick={closeAfterNavigate}
              >
                <Logo invert compact decorative />
              </Link>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-white/20"
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
                onClick={closeAfterNavigate}
              >
                Home
              </Link>
              <h2 className="pt-4 pb-1 text-xs tracking-[0.16em] text-white/45 uppercase">
                Services
              </h2>
              <Link
                href="/services/"
                className="block border-b border-white/10 py-3 text-lg"
                onClick={closeAfterNavigate}
              >
                All services
              </Link>
              {megaGroups.map((group) => {
                const expanded = expandedGroup === group.id;
                const panelId = `${drawerId}-${group.id}`;
                return (
                  <div key={group.id} className="border-b border-white/10">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-lg"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() =>
                        setExpandedGroup(expanded ? null : group.id)
                      }
                    >
                      {group.title}
                      <span aria-hidden="true">{expanded ? "–" : "+"}</span>
                    </button>
                    {expanded ? (
                      <ul id={panelId} className="pb-3">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className="block py-2 pl-3 text-white/80"
                              onClick={closeAfterNavigate}
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
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-white/10 py-3 text-lg"
                  onClick={closeAfterNavigate}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                className="block border-b border-white/10 py-3 text-lg"
                onClick={closeAfterNavigate}
              >
                Contact
              </Link>
            </nav>
            <PhoneCta context="mobile-menu" className="mt-6 min-h-12 w-full">
              {phoneReady ? primaryCtaLabel() : "Request Service"}
            </PhoneCta>
          </div>
        </div>
      ) : null}
    </>
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
