"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    if (!nodes.length) {
      root.classList.add("js-reveal");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-shown");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    for (const node of nodes) {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        node.classList.add("is-shown");
      }
      observer.observe(node);
    }

    root.classList.add("js-reveal");
    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, [pathname]);

  return null;
}
