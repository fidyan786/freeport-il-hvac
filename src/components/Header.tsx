"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronIcon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { PhoneCta, PhonePlain } from "@/components/PhoneCta";
import { megaGroups, primaryNav } from "@/lib/nav";
import { BRAND, isPhoneConfigured, localLabel, primaryCtaLabel, site } from "@/lib/site";

const MOBILE_NAV_ID = "mobile-nav-panel";
const DESKTOP_SERVICES_ID = "desktop-services-menu";
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
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
    const root = document.documentElement;
    const onScroll = () => {
      root.toggleAttribute("data-header-compact", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      root.removeAttribute("data-header-compact");
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function onChange() {
      if (desktop.matches) setOpen(false);
    }
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (servicesOpen) {
        event.preventDefault();
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
        return;
      }
      if (open) {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
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
  }, [servicesOpen, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const selectors = [
      "#main",
      "footer",
      "[data-sticky-call]",
    ];
    const nodes = selectors
      .map((selector) => document.querySelector(selector))
      .filter((node): node is Element => Boolean(node));
    for (const node of nodes) {
      if (open) node.setAttribute("inert", "");
      else node.removeAttribute("inert");
    }
    return () => {
      for (const node of nodes) node.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const root = drawerRef.current;
    if (!root) return;
    const focusable = [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
      (node) =>
        !node.hasAttribute("disabled") &&
        node.getAttribute("aria-hidden") !== "true" &&
        !node.closest("[hidden]") &&
        node.getClientRects().length > 0,
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    window.requestAnimationFrame(() => first?.focus());

    function onKey(event: KeyboardEvent) {
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, expandedGroup]);

  return (
    <>
      <header className="site-header text-navy">
        <div className="site-header-utility border-b border-line/80">
          <div>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6">
            <p className="min-w-0">
              {localLabel} {site.zip} · {site.county}
            </p>
            <PhonePlain location="header" className="shrink-0 font-semibold text-navy underline-offset-4 hover:underline" />
          </div>
          </div>
        </div>
        <div
          ref={wrapRef}
          className="site-header-bar relative mx-auto flex min-w-0 max-w-6xl items-center gap-3 px-4 py-3 transition-[padding] duration-200 sm:px-6"
        >
          <Link
            href="/"
            className="min-w-0 shrink-0"
            aria-label={`${BRAND.name} home`}
            onClick={closeAfterNavigate}
          >
            <Logo decorative />
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="Primary"
          >
            <button
              ref={servicesButtonRef}
              type="button"
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-brand px-3 py-2 text-sm font-semibold ${
                servicesOpen || pathname.startsWith("/services")
                  ? "text-navy"
                  : "text-navy/75 hover:text-navy"
              }`}
              aria-expanded={servicesOpen}
              aria-controls={DESKTOP_SERVICES_ID}
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
              <ChevronIcon
                className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex min-h-11 items-center rounded-brand px-3 py-2 text-sm font-semibold ${
                    active ? "text-navy" : "text-navy/75 hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              {phoneReady ? (
                <>
                  <PhoneCta
                    location="header"
                    context="header-call"
                    className="px-4 py-2"
                  >
                    {primaryCtaLabel()}
                  </PhoneCta>
                </>
              ) : (
                <PhoneCta location="header" context="header-request" className="px-4 py-2">
                  Request Service
                </PhoneCta>
              )}
            </div>
            {phoneReady ? (
              <PhoneCta
                location="header"
                context="header-mobile-call"
                className="px-3 py-2 lg:hidden"
                iconOnly
              />
            ) : null}
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-brand border border-navy/20 text-navy lg:hidden"
              aria-expanded={open}
              aria-controls={MOBILE_NAV_ID}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <Hamburger open={open} />
            </button>
          </div>

          {servicesOpen ? (
            <div
              id={DESKTOP_SERVICES_ID}
              role="navigation"
              aria-label="Services"
              data-mega-menu="true"
              className="menu-fade absolute top-full right-4 left-4 z-50 hidden overflow-hidden rounded-b-3xl border border-line bg-white/95 text-ink shadow-[0_24px_50px_-28px_rgb(11,30,46,0.55)] backdrop-blur-md lg:block"
            >
              <div className="grid max-h-[min(70vh,36rem)] grid-cols-3 gap-x-8 gap-y-6 overflow-y-auto p-6">
                {megaGroups.map((group) => (
                  <div key={group.id} className="min-w-0">
                    <p className="font-semibold text-muted">
                      <Link
                        href={group.href}
                        className="hover:text-navy"
                        onClick={closeAfterNavigate}
                      >
                        {group.title}
                      </Link>
                    </p>
                    <ul className="mt-3 grid gap-1.5">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-brand py-1 text-navy hover:underline"
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
              <div className="flex items-center justify-between gap-3 border-t border-line bg-paper px-6 py-3">
                <p className="text-xs text-muted">
                  {localLabel} {site.zip}
                </p>
                <Link
                  href="/services/"
                  className="shrink-0 text-sm font-semibold text-navy"
                  onClick={closeAfterNavigate}
                >
                  View all services
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] lg:hidden ${open ? "" : "pointer-events-none"}`}
        inert={!open}
      >
        <button
          type="button"
          className={`drawer-scrim absolute inset-0 bg-navy-deep/50 ${open ? "opacity-100" : "opacity-0"}`}
          aria-label="Close navigation menu"
          tabIndex={open ? 0 : -1}
          onClick={() => {
            setOpen(false);
            menuButtonRef.current?.focus();
          }}
        />
        <div
          ref={drawerRef}
          id={MOBILE_NAV_ID}
          role="dialog"
          aria-modal={open}
          aria-hidden={!open}
          aria-label="Site menu"
          className={`drawer-panel absolute inset-y-0 right-0 flex h-[100dvh] w-[min(100%,24rem)] flex-col overflow-hidden bg-white text-navy shadow-2xl ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
        <div className="flex h-[100dvh] flex-col overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-4">
            <Link
              href="/"
              aria-label={`${BRAND.name} home`}
              onClick={closeAfterNavigate}
            >
              <Logo compact decorative />
            </Link>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-brand border border-line"
              aria-label="Close navigation menu"
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
            >
              <Hamburger open />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4"
          >
            <Link
              href="/"
              className="block border-b border-line py-3.5"
              onClick={closeAfterNavigate}
            >
              Home
            </Link>
            <p className="pt-5 pb-1 font-semibold text-muted">
              Services
            </p>
            <Link
              href="/services/"
              className="block border-b border-line py-3.5"
              onClick={closeAfterNavigate}
            >
              All services
            </Link>
            {megaGroups.map((group) => {
              const expanded = expandedGroup === group.id;
              const panelId = `${MOBILE_NAV_ID}-${group.id}`;
              return (
                <div key={group.id} className="border-b border-line">
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between py-3 text-left text-lg"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() =>
                      setExpandedGroup(expanded ? null : group.id)
                    }
                  >
                    {group.title}
                    <span aria-hidden="true" className="text-navy">
                      {expanded ? "–" : "+"}
                    </span>
                  </button>
                  <ul
                    id={panelId}
                    hidden={!expanded}
                    className={expanded ? "accordion-fade pb-3" : undefined}
                  >
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-2.5 pl-3 text-navy"
                          onClick={closeAfterNavigate}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block border-b border-line py-3.5"
                onClick={closeAfterNavigate}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="block border-b border-line py-3.5"
              onClick={closeAfterNavigate}
            >
              Contact
            </Link>
          </nav>
          <div className="border-t border-line px-4 py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <PhoneCta location="header" context="mobile-menu" className="w-full">
              {phoneReady ? primaryCtaLabel() : "Request Service"}
            </PhoneCta>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-4" aria-hidden="true">
      <span
        className={`absolute left-0 block h-0.5 w-4 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
      />
      <span
        className={`absolute top-1.5 left-0 block h-0.5 w-4 bg-current transition ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-4 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
      />
    </span>
  );
}
