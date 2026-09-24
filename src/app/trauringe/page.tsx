import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Trauringe",
  description:
    "Trauringe in Gold, Weißgold und Platin in Friedberg. Klassisch, matt, mehrfarbig oder mit Diamanten, mit persönlicher Gravur.",
  alternates: { canonical: "/trauringe" },
};

const styles = [
  { img: "katalog_klassisch.jpg", name: "Klassisch" },
  { img: "katalog_gold.jpg", name: "Gelbgold" },
  { img: "katalog_matt.jpg", name: "Matt & Struktur" },
  { img: "katalog_mehrfarbig.jpg", name: "Mehrfarbig" },
  { img: "katalog_memoire.jpg", name: "Mit Diamanten" },
  { img: "katalog_ausgefallen.jpg", name: "Ausgefallen" },
];

export default function TrauringePage() {
  return (
    <>
      <PageHero
        eyebrow="Trauringe"
        title="Zwei Ringe. Ein Versprechen."
        text="Große Auswahl in Gold, Weißgold und Platin. Mit Gravur ganz nach Ihren Wünschen."
        image="/images/rubin/rubin_engravings.webp"
        imageAlt="Gravur „Love“ auf der Innenseite eines Goldrings"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Finden Sie Ihren Stil
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3">
            {styles.map((s) => (
              <figure key={s.img}>
                <div className="relative aspect-square overflow-hidden bg-[#f2f0ec]">
                  <Image
                    src={`/images/rubin/${s.img}`}
                    alt={`Trauringe ${s.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 font-serif text-2xl text-ink">
                  {s.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-square w-full max-w-md bg-white">
          <Image
            src="/images/rubin/aboutRubin_engraving.webp"
            alt="Trauringe mit persönlicher Gravur"
            fill
            sizes="448px"
            className="object-contain"
          />
        </div>
        <div>
          <p className="eyebrow">Persönlich</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Ihre Gravur
          </h2>
          <ul className="mt-6 space-y-3 text-lg text-stone">
            <li>Namen, Datum oder ein eigener Satz</li>
            <li>Fingerabdruck oder Symbol</li>
            <li>Individuelle Ringgröße und Breite</li>
          </ul>
        </div>
      </section>

      <CtaBand
        title="Termin zur Trauring-Beratung"
        text="Nehmen Sie sich Zeit zum Anprobieren. Wir freuen uns auf Sie beide."
      />
    </>
  );
}
