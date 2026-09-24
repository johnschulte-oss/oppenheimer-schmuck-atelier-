"use client";

import { useEffect, useRef, useState } from "react";

const lines = ["Ein Moment.", "Ein Versprechen.", "Für immer."];

/**
 * Das Ring-Video läuft passend zum Scrollen vor und zurück,
 * dazu erscheinen nacheinander drei kurze Zeilen.
 */
export default function RingScrub() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / distance));
      setProgress(p);
      if (video.duration) video.currentTime = p * (video.duration - 0.05);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    video.load();
    video.addEventListener("loadedmetadata", update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener("loadedmetadata", update);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const lineOpacity = (i: number) =>
    reduced || i === 0
      ? 1
      : Math.min(1, Math.max(0.12, (progress - i * 0.3) / 0.12));

  return (
    <div ref={wrapRef} className={reduced ? "" : "h-[260vh]"}>
      <div
        className={`${
          reduced ? "" : "sticky top-0 h-[100svh]"
        } flex items-center overflow-hidden`}
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Verlobungsringe</p>
            <div className="mt-6 space-y-1">
              {lines.map((line, i) => (
                <p
                  key={line}
                  className="font-serif text-5xl leading-[1.1] text-ink transition-opacity duration-500 sm:text-6xl lg:text-7xl"
                  style={{ opacity: lineOpacity(i) }}
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-stone">
              Wir helfen Ihnen, den Ring zu finden, der zu ihr passt.
            </p>
            {!reduced && (
              <div className="mt-10 h-px w-40 bg-line">
                <div
                  className="h-px bg-gold"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            )}
          </div>

          <div className="order-1 mx-auto w-full max-w-[34rem] md:order-2">
            <div className="relative aspect-square overflow-hidden rounded-t-full bg-sand">
              <video
                ref={videoRef}
                src="/video/verlobungsring.mp4"
                poster="/images/verlobungsring-poster.jpg"
                muted
                playsInline
                preload="auto"
                autoPlay={reduced ? false : undefined}
                aria-label="Verlobungsring mit Diamant im Smaragdschliff an einer Hand"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
