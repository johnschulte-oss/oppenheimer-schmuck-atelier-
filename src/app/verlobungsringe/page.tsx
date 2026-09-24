import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import DiamondShapes from "@/components/DiamondShapes";
import RingScrub from "@/components/RingScrub";

export const metadata: Metadata = {
  title: "Verlobungsringe",
  description:
    "Verlobungsringe mit Diamant in Friedberg. Solitär, Memoire oder Vorsteckring, in allen Diamantformen, persönlich beraten.",
  alternates: { canonical: "/verlobungsringe" },
};

const gallery = [
  { img: "config_oval.webp", name: "Solitär mit Oval", contain: true },
  { img: "rubin_teaser_ring_sets.webp", name: "Ring-Sets" },
  { img: "rubin_teaser_eternity_rings.webp", name: "Memoire-Ringe" },
  {
    img: "rubin_aboutRubin_manufacture_ring.webp",
    name: "Klassischer Solitär",
    contain: true,
  },
];

export default function VerlobungsringePage() {
  return (
    <>
      <RingScrub />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <DiamondShapes />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-20 sm:px-8 md:grid-cols-2 md:gap-16 md:pt-28">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-sand">
          <Image
            src="/images/steinformen.jpg"
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <h2 className="font-serif text-4xl text-ink sm:text-5xl">
          Beliebte Modelle
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {gallery.map((g) => (
            <figure key={g.img}>
              <div
                className={`relative aspect-square overflow-hidden ${
                  g.contain ? "bg-white" : "bg-sand"
                }`}
              >
                <Image
                  src={`/images/rubin/${g.img}`}
                  alt={g.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={g.contain ? "object-contain p-4" : "object-cover"}
                />
              </div>
              <figcaption className="mt-4 font-serif text-2xl text-ink">
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
