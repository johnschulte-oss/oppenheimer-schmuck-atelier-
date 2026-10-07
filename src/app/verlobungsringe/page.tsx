import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import DiamondShapes from "@/components/DiamondShapes";
import RingGuide from "@/components/RingGuide";
import RingHero from "@/components/RingHero";

export const metadata: Metadata = {
  title: "Verlobungsringe",
  description:
    "Verlobungsringe mit Diamant in Friedberg. Solitär, Memoire oder Vorsteckring, in allen Diamantformen, persönlich beraten.",
  alternates: { canonical: "/verlobungsringe" },
};

const gallery = [
  { img: "verlobungsringe/solitaer-oval.jpg", name: "Solitär mit Oval" },
  { img: "verlobungsringe/solitaer-halo.jpg", name: "Solitär mit Halo" },
  { img: "verlobungsringe/memoire.jpg", name: "Memoire-Ring" },
];

export default function VerlobungsringePage() {
  return (
    <>
      <RingHero />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-28">
          <DiamondShapes />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pt-14 sm:px-8 md:grid-cols-2 md:gap-16 md:pt-28">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-sand">
          <Image
            src="/images/verlobungsringe/steinformen-ringe.jpg"
            alt="Verlobungsringe in Gold mit verschiedenen Diamantformen"
            fill
            sizes="(min-width: 768px) 448px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Gelbgold, Weißgold, Roségold</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Jede Form hat ihren eigenen Charakter.
          </h2>
          <p className="mt-5 max-w-md text-lg text-stone">
            Legen Sie verschiedene Ringe bei uns in Ruhe nebeneinander und
            probieren Sie, was sich richtig anfühlt.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 md:pt-28">
        <RingGuide />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24">
        <h2 className="font-serif text-4xl text-ink sm:text-5xl">
          Beliebte Modelle
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 md:mt-12 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.img}>
              <div className="relative aspect-square overflow-hidden border border-line bg-white">
                <Image
                  src={`/images/${g.img}`}
                  alt={g.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 font-serif text-xl text-ink sm:text-2xl">
                {g.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-stone">
          Viele weitere Modelle zeigen wir Ihnen gern im Geschäft.
        </p>
      </section>

      <CtaBand
        title="Bereit für die große Frage?"
        text="Wir beraten Sie diskret und in Ruhe, auch zu Ringgröße und Budget."
      />
    </>
  );
}
