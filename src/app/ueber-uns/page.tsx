import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Unser Schmuck-Atelier in Friedberg befindet sich im historischen Geburtshaus des Diamantenkönigs Sir Ernest Oppenheimer.",
  alternates: { canonical: "/ueber-uns" },
};

const timeline = [
  {
    year: "1880",
    text: "Ernest Oppenheimer wird in diesem Haus in der Kaiserstraße geboren.",
  },
  {
    year: "1929",
    text: "Er übernimmt die Leitung von De Beers und wird zum „Diamantenkönig“.",
  },
  {
    year: "Heute",
    text: "An seinem Geburtsort sind Diamanten wieder zu Hause, im Oppenheimer Schmuck-Atelier.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-6 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        <div>
          <p className="eyebrow">Über uns</p>
          <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-ink sm:mt-5 sm:text-6xl">
            Ein Haus mit Geschichte.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Unser kleines Schmuck-Atelier befindet sich im Zentrum von
            Friedberg, im historischen Geburtshaus des Diamantenkönigs Sir
            Ernest Oppenheimer.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[19rem] pb-4 pr-4 sm:max-w-[22rem] md:max-w-[26rem]">
          <div
            aria-hidden
            className="absolute inset-0 left-4 top-4 border border-gold/50"
          />
          <div className="relative aspect-[2/3] overflow-hidden shadow-[0_30px_60px_-35px_rgba(23,22,21,0.55)]">
            <Image
              src="/images/haus-skizze.png"
              alt="Zeichnung des Hauses Kaiserstraße 65, Geburtshaus von Sir Ernest Oppenheimer"
              fill
              priority
              sizes="(min-width: 768px) 416px, 352px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-28">
          <p className="eyebrow !text-gold">Sir Ernest Oppenheimer</p>
          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-10">
            {timeline.map((t) => (
              <div key={t.year} className="border-t border-gold/60 pt-6">
                <p className="font-serif text-5xl text-gold">{t.year}</p>
                <p className="mt-4 leading-relaxed text-cream/80">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 md:pt-28">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Unser Atelier
          </h2>
          <p className="max-w-sm text-stone">
            Originales Fachwerk trifft auf helle, moderne Vitrinen.
          </p>
        </div>
        <div className="-mx-5 mt-8 no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0">
          {[
            {
              src: "atelier-innen-1.jpg",
              alt: "Verkaufsraum mit Trauring-Vitrinen und Holzbalken",
            },
            {
              src: "atelier-vitrine.jpg",
              alt: "Schmuckvitrine vor historischem Fachwerk",
            },
            {
              src: "atelier-innen-2.jpg",
              alt: "Blick durch das Atelier mit Uhren- und Schmuckvitrinen",
            },
          ].map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden bg-sand sm:w-[45%] md:w-auto"
            >
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 80vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Was uns ausmacht
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-stone">
            <p>
              Wir zeigen Ihnen eine große Auswahl an Trauringen,
              Verlobungsringen, Schmuck und Uhren.
            </p>
            <p>
              Wir fertigen individuellen Schmuck an und graduieren Diamanten.
              Reparaturen erledigen wir direkt vor Ort.
            </p>
            <p>
              Ihr Altgold tauschen wir gegen neuen Schmuck oder zahlen es Ihnen
              aus. Wir beraten Sie gern telefonisch, per E-Mail oder direkt im
              Geschäft.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
