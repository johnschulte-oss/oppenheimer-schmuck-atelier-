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
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
        <div>
          <p className="eyebrow">Über uns</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
            Ein Haus mit Geschichte.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Unser kleines Schmuck-Atelier befindet sich im Zentrum von
            Friedberg, im historischen Geburtshaus des Diamantenkönigs Sir
            Ernest Oppenheimer.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src="/images/laden-heute.jpg"
            alt="Das Oppenheimer Schmuck-Atelier in der Kaiserstraße 65 am Abend"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <p className="eyebrow !text-gold">Sir Ernest Oppenheimer</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {timeline.map((t) => (
              <div key={t.year} className="border-t border-gold/60 pt-6">
                <p className="font-serif text-5xl text-gold">{t.year}</p>
                <p className="mt-4 leading-relaxed text-cream/80">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 md:pt-28">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Unser Atelier
          </h2>
          <p className="max-w-sm text-stone">
            Originales Fachwerk trifft auf helle, moderne Vitrinen.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
              className="relative aspect-[4/5] overflow-hidden bg-sand"
            >
              <Image
                src={`/images/${img.src}`}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <h2 className="font-serif text-4xl text-ink sm:text-5xl">
          Früher und heute
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src="/images/laden-frueher.jpg"
                alt="Das Geschäft früher als Trauringzentrum"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale-[35%]"
              />
            </div>
            <figcaption className="mt-4 font-serif text-2xl text-ink">
              Früher
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden bg-sand">
              <Image
                src="/images/laden-heute.jpg"
                alt="Das Oppenheimer Schmuck-Atelier heute"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 font-serif text-2xl text-ink">
              Heute
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16">
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
