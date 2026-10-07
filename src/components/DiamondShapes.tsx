"use client";

import Image from "next/image";
import { useState } from "react";

const shapes: { key: string; name: string; text: string; stone?: string }[] = [
  {
    key: "round",
    name: "Brillant",
    text: "Der Klassiker. Maximales Funkeln durch 57 Facetten.",
  },
  {
    key: "oval",
    name: "Oval",
    text: "Elegant und gestreckt. Lässt den Finger schlanker wirken.",
  },
  {
    key: "emerald",
    name: "Smaragd",
    text: "Klare Linien, stufenförmig geschliffen. Zeitlos und edel.",
  },
  {
    key: "pear",
    name: "Tropfen",
    text: "Romantisch und außergewöhnlich zugleich.",
  },
  {
    key: "princess",
    name: "Princess",
    text: "Quadratisch, modern und mit viel Feuer.",
  },
  {
    key: "cushion",
    name: "Cushion",
    text: "Sanft abgerundete Ecken, weiches Licht.",
  },
  {
    key: "radiant",
    stone: "radiant.jpg",
    name: "Radiant",
    text: "Rechteckig mit abgeschrägten Ecken und viel Brillanz.",
  },
  {
    key: "marquise",
    stone: "marquise.jpg",
    name: "Marquise",
    text: "Schmal und spitz zulaufend. Wirkt besonders groß.",
  },
  {
    key: "heart",
    stone: "heart.jpg",
    name: "Herz",
    text: "Das Symbol der Liebe, in Stein geschliffen.",
  },
];

export default function DiamondShapes() {
  const [active, setActive] = useState(0);
  const shape = shapes[active];

  return (
    <div className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
      <div className="relative mx-auto aspect-square w-full max-w-[22rem] md:max-w-lg">
        {shapes.map((s, i) => (
          <Image
            key={s.key}
            src={`/images/verlobungsringe/formen/${s.key}.jpg`}
            alt={`Verlobungsring mit Diamant im Schliff ${s.name}`}
            fill
            sizes="(min-width: 768px) 512px, 352px"
            className={`object-contain transition-all duration-700 ${
              i === active ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          />
        ))}
      </div>

      <div>
        <p className="eyebrow">Finden Sie Ihre Form</p>
        <h2 className="mt-4 font-serif text-5xl text-ink">{shape.name}</h2>
        <p className="mt-4 min-h-[3.5rem] max-w-sm text-lg text-stone">
          {shape.text}
        </p>
        <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
          {shapes.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-pressed={i === active}
              className={`group flex flex-col items-center gap-2 border bg-white p-2 transition-colors ${
                i === active
                  ? "border-gold"
                  : "border-transparent hover:border-line"
              }`}
            >
              <span className="relative block aspect-square w-full">
                <Image
                  src={`/images/rubin/${s.stone ?? `${s.key}.webp`}`}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-contain transition-transform duration-500 group-hover:rotate-12"
                />
              </span>
              <span className="text-xs text-stone">{s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
