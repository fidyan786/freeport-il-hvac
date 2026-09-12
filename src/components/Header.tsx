"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PhoneCta } from "@/components/PhoneCta";
import { primaryNav, serviceLinks } from "@/lib/nav";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0">
          <span className="block truncate font-serif text-lg leading-tight sm:text-xl">
            {site.businessName}
          </span>
          <span className="block text-[11px] tracking-[0.14em] text-white/70 uppercase">
            HVAC · {site.city}, {site.stateCode} {site.zip}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {primaryNav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          <div className="relative">
            <button
              type="button"
              className="text-sm text-white/80 hover:text-white"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
            </button>
            {servicesOpen ? (
              <div className="absolute right-0 mt-3 w-72 rounded-sm border border-line bg-white p-3 text-ink shadow-lg">
                <ul className="grid gap-1">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-sm px-2 py-2 text-sm hover:bg-paper"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <PhoneCta
            context="header"
            className="hidden min-h-11 px-4 py-2 sm:inline-flex"
          >
            Call {site.phoneDisplay}
          </PhoneCta>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-navy-deep px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="grid gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs tracking-[0.16em] text-white/50 uppercase">
              Services
            </p>
            <ul className="mt-1 grid gap-1">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-sm text-white/85"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <PhoneCta context="mobile-menu" className="mt-5 w-full min-h-12">
              Call {site.phoneDisplay}
            </PhoneCta>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
