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
  { img: "klassisch.jpg", name: "Klassisch" },
  { img: "gelbgold.jpg", name: "Gelbgold" },
  { img: "platin.jpg", name: "Platin" },
  { img: "rosegold.jpg", name: "Roségold" },
  { img: "bicolor.jpg", name: "Bicolor" },
  { img: "diamanten.jpg", name: "Mit Diamanten" },
];

const engravings = [
  {
    title: "Innengravur",
    text: "Namen, Hochzeitsdatum oder ein eigener Satz auf der Innenseite.",
  },
  {
    title: "Außengravur",
    text: "Ornamente, Symbole oder Schriftzüge sichtbar auf dem Ring.",
  },
  {
    title: "Handschrift",
    text: "Ihre eigene Handschrift oder die eines geliebten Menschen.",
  },
  {
    title: "Fingerabdruck",
    text: "Der Fingerabdruck Ihres Partners, ganz persönlich im Ring.",
  },
];

export default function TrauringePage() {
  return (
    <>
      <PageHero
        eyebrow="Trauringe"
        title="Zwei Ringe. Ein Versprechen."
        text="Große Auswahl in Gold, Weißgold und Platin. Mit Gravur ganz nach Ihren Wünschen."
        image="/images/trauringe/trauringe-hero.png"
        imageAlt="Zwei goldene Trauringe auf Seide, einer mit Diamanten"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Finden Sie Ihren Stil
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 md:mt-12 md:grid-cols-3">
            {styles.map((s) => (
              <figure key={s.img}>
                <div className="relative aspect-square overflow-hidden border border-line bg-white">
                  <Image
                    src={`/images/trauringe/${s.img}`}
                    alt={`Trauringe ${s.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-contain transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 font-serif text-xl text-ink sm:text-2xl">
                  {s.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src="/images/rubin/rubin_engravings.webp"
            alt="Gravur „Love“ auf der Innenseite eines Goldrings"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Persönlich</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Ihre Gravur
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Eine Gravur macht Ihre Ringe unverwechselbar. Wir beraten Sie
            gern, welche Art am besten zu Ihnen passt.
          </p>
          <dl className="mt-8 max-w-md divide-y divide-line border-y border-line">
            {engravings.map((e) => (
              <div key={e.title} className="py-4">
                <dt className="font-serif text-xl text-ink">{e.title}</dt>
                <dd className="mt-1 text-stone">{e.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        title="Termin zur Trauring-Beratung"
        text="Nehmen Sie sich Zeit zum Anprobieren. Wir freuen uns auf Sie beide."
      />
    </>
  );
}
