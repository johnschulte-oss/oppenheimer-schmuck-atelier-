"use client";

import { useEffect, useRef } from "react";

const lines = ["Ein Moment.", "Ein Versprechen.", "Für immer."];

/** Einstieg Verlobungsringe: Ring-Video in Dauerschleife, Zeilen blenden nacheinander ein. */
export default function RingHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, []);

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-14 pt-6 sm:px-8 md:grid-cols-[1fr_1.1fr] md:gap-16 md:pb-24 md:pt-14">
      <div className="order-2 md:order-1">
        <p className="eyebrow">Verlobungsringe</p>
        <h1 className="mt-5 space-y-1">
          {lines.map((line, i) => (
            <span
              key={line}
              className="ring-line block font-serif text-[2.6rem] leading-[1.1] text-ink sm:text-6xl lg:text-7xl"
              style={{ animationDelay: `${0.25 + i * 0.7}s` }}
            >
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone md:mt-8">
          Wir helfen Ihnen, den Ring zu finden, der zu ihr passt.
        </p>
      </div>

      <div className="order-1 mx-auto w-full max-w-[26rem] md:order-2 md:max-w-[34rem]">
        <div className="relative aspect-square overflow-hidden rounded-t-full bg-sand">
          <video
            ref={videoRef}
            src="/video/verlobungsring.mp4"
            poster="/images/verlobungsring-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Verlobungsring mit Diamant im Smaragdschliff an einer Hand"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
