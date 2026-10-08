import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Ankauf von Gold, Silber, Platin & Luxusuhren",
  description:
    "Goldankauf in Friedberg: Gold, Silber, Platin, Palladium, Zahngold und Luxusuhren. Präzise Prüfung mit Röntgenfluoreszenz (RFA), faire Preise.",
  alternates: { canonical: "/ankauf" },
};

const metals = [
  "Gold",
  "Silber",
  "Platin",
  "Palladium",
  "Zahngold",
  "Altschmuck",
  "Münzen",
  "Barren",
];

const watches = ["Rolex", "Cartier", "Patek Philippe", "Audemars Piguet"];

const elements = [
  {
    symbol: "Au",
    name: "Gold",
    number: 79,
    mass: "196,97",
    bg: "linear-gradient(135deg, #e9d18f 0%, #c9a04e 55%, #a5844b 100%)",
    fg: "#2a2114",
  },
  {
    symbol: "Ag",
    name: "Silber",
    number: 47,
    mass: "107,87",
    bg: "linear-gradient(135deg, #f4f4f2 0%, #d5d6d4 55%, #b5b7b6 100%)",
    fg: "#232323",
  },
  {
    symbol: "Pt",
    name: "Platin",
    number: 78,
    mass: "195,08",
    bg: "linear-gradient(135deg, #e6e4df 0%, #bdbab3 55%, #97948d 100%)",
    fg: "#1f1e1c",
  },
  {
    symbol: "Pd",
    name: "Palladium",
    number: 46,
    mass: "106,42",
    bg: "linear-gradient(135deg, #3a3835 0%, #262523 60%, #171615 100%)",
    fg: "#f1ece2",
  },
];

const steps = [
  {
    title: "Vorbeikommen",
    text: "Ohne Termin, während unserer Öffnungszeiten.",
  },
  {
    title: "Prüfen",
    text: "Wir analysieren Ihr Edelmetall vor Ihren Augen.",
  },
  {
    title: "Entscheiden",
    text: "Sofort auszahlen lassen oder gegen neuen Schmuck tauschen.",
  },
];

export default function AnkaufPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-6 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        <div>
          <p className="eyebrow">Ankauf</p>
          <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-ink sm:mt-5 sm:text-6xl">
            Fair bewertet. Sofort ausgezahlt.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Wir kaufen Edelmetalle und Luxusuhren zu fairen, tagesaktuellen
            Preisen.
          </p>
          <ul className="mt-8 flex max-w-md flex-wrap gap-2">
            {metals.map((m) => (
              <li
                key={m}
                className="border border-line bg-white px-4 py-2 text-sm text-ink"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:gap-4 md:max-w-lg">
          {elements.map((e) => (
            <div
              key={e.symbol}
              className="relative flex aspect-square flex-col justify-between p-4 shadow-[0_18px_40px_-24px_rgba(23,22,21,0.55)] transition-transform duration-500 hover:-translate-y-1 sm:p-5"
              style={{ background: e.bg, color: e.fg }}
            >
              <div className="flex items-start justify-between text-xs tracking-wide opacity-80 sm:text-sm">
                <span>{e.number}</span>
                <span>{e.mass}</span>
              </div>
              <span className="font-serif text-6xl leading-none sm:text-7xl">
                {e.symbol}
              </span>
              <span className="text-xs uppercase tracking-[0.22em] sm:text-sm">
                {e.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-3 md:py-20">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t border-gold pt-6">
              <p className="font-serif text-lg text-gold">0{i + 1}</p>
              <h2 className="mt-2 font-serif text-3xl text-ink">{s.title}</h2>
              <p className="mt-2 text-stone">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="relative aspect-[4/3] overflow-hidden border border-line bg-white">
          <Image
            src="/images/rfa-geraet.jpg"
            alt="Röntgenfluoreszenz-Gerät zur Edelmetallprüfung"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-4"
          />
        </div>
        <div>
          <p className="eyebrow">Modernste Messtechnik</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Röntgenfluoreszenz statt Schätzung
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone">
            Mit unserem RFA-Gerät bestimmen wir den genauen
            Edelmetallgehalt in Sekunden. Zerstörungsfrei, ohne Säuretest und
            direkt vor Ihren Augen.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">
            So wissen Sie genau, was Ihr Schmuck wert ist.
          </p>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24">
          <p className="eyebrow !text-gold">Luxusuhren</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
            Wir kaufen auch hochwertige Uhren an.
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 font-serif text-xl sm:grid-cols-4 sm:text-2xl md:mt-10">
            {watches.map((w) => (
              <li key={w} className="border-b border-cream/15 pb-3">
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-cream/70">
            Weitere Luxusmarken auf Anfrage. Bitte bringen Sie, wenn vorhanden,
            Box und Papiere mit.
          </p>
        </div>
      </section>

      <CtaBand
        title="Fragen zum Ankauf?"
        text="Rufen Sie uns an oder kommen Sie einfach vorbei. Die Prüfung ist unverbindlich."
      />
    </>
  );
}
