"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const FALLBACK_MS = 1200;

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const height = window.innerHeight || document.documentElement.clientHeight;
  // content-visibility can report a 0 box. Do not hide what cannot be measured.
  if (rect.width === 0 && rect.height === 0) return true;
  return rect.bottom > 0 && rect.top < height;
}

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const showAll = () => {
      for (const node of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
        node.classList.add("is-shown");
      }
    };

    const revealInView = () => {
      for (const node of document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-shown)")) {
        if (isInViewport(node)) node.classList.add("is-shown");
      }
    };

    if (reduce) {
      showAll();
      return;
    }

    revealInView();
    root.classList.add("js-reveal");
    revealInView();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-shown");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 15% 0px" },
    );

    for (const node of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      observer.observe(node);
    }

    const motionObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.toggleAttribute("data-paused", !entry.isIntersecting);
      }
    });
    for (const node of document.querySelectorAll("[data-motion-root]")) {
      motionObserver.observe(node);
    }

    const frame = window.requestAnimationFrame(revealInView);
    const fallback = window.setTimeout(showAll, FALLBACK_MS);
    window.addEventListener("load", revealInView);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
      window.removeEventListener("load", revealInView);
      observer.disconnect();
      motionObserver.disconnect();
      root.classList.remove("js-reveal");
    };
  }, [pathname]);

  return null;
}
