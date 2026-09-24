import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PhotoSlot from "@/components/PhotoSlot";

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
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        <div>
          <p className="eyebrow">Ankauf</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
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
        <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden bg-ink">
          <Image
            src="/images/goldankauf.jpg"
            alt="Gold- und Silberankauf im Oppenheimer Schmuck-Atelier"
            fill
            priority
            sizes="(min-width: 768px) 512px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t border-gold pt-6">
              <p className="font-serif text-lg text-gold">0{i + 1}</p>
              <h2 className="mt-2 font-serif text-3xl text-ink">{s.title}</h2>
              <p className="mt-2 text-stone">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28">
        <PhotoSlot label="RFA-Gerät Goldscope SD515" />
        <div>
          <p className="eyebrow">Modernste Messtechnik</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Röntgenfluoreszenz statt Schätzung
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone">
            Mit unserem RFA-Gerät Goldscope SD515 bestimmen wir den genauen
            Edelmetallgehalt in Sekunden. Zerstörungsfrei, ohne Säuretest und
            direkt vor Ihren Augen.
          </p>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-stone">
            So wissen Sie genau, was Ihr Schmuck wert ist.
          </p>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <p className="eyebrow !text-gold">Luxusuhren</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
            Wir kaufen auch hochwertige Uhren an.
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 font-serif text-2xl sm:grid-cols-4">
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
