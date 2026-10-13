"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { HERO_SLIDES } from "@/lib/hero-slides";

const INTERVAL_MS = 4000;
const SWIPE_PX = 48;

export function HeroSlider() {
  const slides = HERO_SLIDES;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [loaded, setLoaded] = useState<number[]>([0, 1]);
  const startX = useRef<number | null>(null);

  const keepLoaded = useCallback((next: number) => {
    const upcoming = (next + 1) % slides.length;
    setLoaded((current) => {
      if (current.includes(next) && current.includes(upcoming)) return current;
      return [...current, next, upcoming];
    });
  }, [slides.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => {
      const next = (index + 1) % slides.length;
      setIndex(next);
      keepLoaded(next);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, index, slides.length, keepLoaded]);

  function go(delta: number) {
    const next = (index + delta + slides.length) % slides.length;
    setIndex(next);
    keepLoaded(next);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (startX.current == null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (delta >= SWIPE_PX) go(-1);
    else if (delta <= -SWIPE_PX) go(1);
  }

  return (
    <div
      className="hero-slider equip-frame relative aspect-[4/3] overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Heating and cooling equipment photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        startX.current = null;
      }}
    >
      {slides.map((slide, slideIndex) =>
        loaded.includes(slideIndex) ? (
          <div
            key={slide.src}
            className={slideIndex === index ? "hero-slider-slide is-on" : "hero-slider-slide"}
            aria-hidden={slideIndex !== index}
          >
            {/* Already-sized WebP. next/image would look for missing sized variants. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slideIndex === index ? slide.alt : ""}
              width={slide.width}
              height={slide.height}
              sizes="(min-width: 1024px) 36vw, 100vw"
              decoding={slideIndex === 0 ? "sync" : "async"}
              fetchPriority={slideIndex === 0 ? "high" : "auto"}
              loading={slideIndex === 0 ? "eager" : "lazy"}
              draggable={false}
              style={{ objectPosition: slide.focal }}
            />
          </div>
        ) : null,
      )}
      <button
        type="button"
        className="hero-slider-arrow is-prev"
        aria-label="Previous photo"
        onClick={() => go(-1)}
      >
        <span aria-hidden="true">‹</span>
      </button>
      <button
        type="button"
        className="hero-slider-arrow is-next"
        aria-label="Next photo"
        onClick={() => go(1)}
      >
        <span aria-hidden="true">›</span>
      </button>
      <div className="hero-slider-dots">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${slideIndex + 1} of ${slides.length}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => {
              setIndex(slideIndex);
              keepLoaded(slideIndex);
            }}
          />
        ))}
      </div>
    </div>
  );
}
