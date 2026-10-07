"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    img: "guide-1-goldfarbe.jpg",
    title: "Die Goldfarbe",
    alt: "Drei Solitärringe in Roségold, Gelbgold und Weißgold",
  },
  {
    img: "guide-2-ringschiene.jpg",
    title: "Die Ringschiene",
    alt: "Solitärring schlicht und mit Pavé-Besatz nebeneinander",
  },
  {
    img: "guide-3-steinform.jpg",
    title: "Die Steinform",
    alt: "Verlobungsringe mit verschiedenen Diamantformen auf Seide",
  },
  {
    img: "guide-4-traumring.jpg",
    title: "Ihr Traumring",
    alt: "Hand mit Verlobungsring im Kissenschliff",
  },
];

/** Bilderreihe „Guide zum Verlobungsring“: wechselt automatisch, Schritte anklickbar. */
export default function RingGuide() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % steps.length),
      5000,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="order-2 md:order-1">
        <p className="eyebrow">In vier Schritten</p>
        <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
          Dein Guide zum perfekten Verlobungsring
        </h2>
        <ol className="mt-8 max-w-md divide-y divide-line border-y border-line">
          {steps.map((s, i) => (
            <li key={s.img}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className="flex w-full items-baseline gap-4 py-4 text-left"
              >
                <span
                  className={`font-serif text-lg transition-colors ${
                    i === active ? "text-gold" : "text-stone"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`font-serif text-2xl transition-colors ${
                    i === active ? "text-ink" : "text-stone hover:text-ink"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <div className="order-1 mx-auto w-full max-w-[24rem] md:order-2 md:max-w-[30rem]">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          {steps.map((s, i) => (
            <Image
              key={s.img}
              src={`/images/verlobungsringe/${s.img}`}
              alt={s.alt}
              fill
              sizes="(min-width: 768px) 480px, 384px"
              className={`object-cover transition-opacity duration-1000 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.img}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Schritt ${i + 1}: ${s.title}`}
              className={`h-1.5 transition-all duration-300 ${
                i === active ? "w-8 bg-gold" : "w-4 bg-line"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
