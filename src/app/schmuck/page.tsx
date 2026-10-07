import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Schmuck",
  description:
    "Diamantschmuck, Goldschmuck und Silberschmuck in Friedberg: Ketten, Ohrringe, Armbänder und Ringe.",
  alternates: { canonical: "/schmuck" },
};

type Item = { img: string; name: string; product?: boolean };

const sections: { id: string; title: string; text: string; items: Item[] }[] = [
  {
    id: "diamantschmuck",
    title: "Diamantschmuck",
    text: "Ketten, Ohrringe, Tennisarmbänder und Sets mit funkelnden Diamanten.",
    items: [
      { img: "kette-gold.jpg", name: "Anhänger & Ketten", product: true },
      { img: "ohrstecker-gold.jpg", name: "Ohrstecker", product: true },
      { img: "tennisarmband-seide.jpg", name: "Tennis-Armbänder" },
      { img: "schmuckset.jpg", name: "Schmuck-Sets", product: true },
    ],
  },
  {
    id: "goldschmuck",
    title: "Goldschmuck",
    text: "Gelbgold, Weißgold und Roségold. Zeitlos und wertbeständig.",
    items: [
      { img: "ring-gold-seide.jpg", name: "Ringe in Gelbgold" },
      { img: "ring-gold-zarge.jpg", name: "Solitär mit Zarge" },
    ],
  },
  {
    id: "silberschmuck",
    title: "Silberschmuck",
    text: "Heller, leichter Schmuck für jeden Tag. Schön zum Verschenken.",
    items: [
      { img: "kette-weiss.jpg", name: "Ketten", product: true },
      { img: "ohrring-weiss-closeup.jpg", name: "Ohrschmuck" },
      { img: "ring-weiss-stein.jpg", name: "Ringe" },
    ],
  },
];

export default function SchmuckPage() {
  return (
    <>
      <PageHero
        eyebrow="Schmuck"
        title="Kleine Dinge, große Freude."
        text="Diamant-, Gold- und Silberschmuck für jeden Anlass."
        image="/images/schmuck/tennisarmband-seide.jpg"
        imageAlt="Tennisarmband in Gelbgold mit Diamanten auf Seide"
      />

      <nav className="mx-auto no-scrollbar flex max-w-7xl gap-2 overflow-x-auto px-5 pb-2 sm:gap-3 sm:px-8">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="btn-line shrink-0 !px-4 !py-2.5 sm:!px-5"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`mt-10 scroll-mt-20 md:mt-16 ${i % 2 === 0 ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">
                {s.title}
              </h2>
              <p className="mt-3 text-lg text-stone">{s.text}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 md:mt-10 lg:grid-cols-4">
              {s.items.map((it) => (
                <figure key={it.img}>
                  <div
                    className={`relative aspect-square overflow-hidden ${
                      it.product ? "border border-line bg-white" : "bg-sand"
                    }`}
                  >
                    <Image
                      src={`/images/schmuck/${it.img}`}
                      alt={`${s.title}: ${it.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className={`transition-transform duration-700 hover:scale-105 ${
                        it.product ? "object-contain p-3" : "object-cover"
                      }`}
                    />
                  </div>
                  <figcaption className="mt-3 font-serif text-xl text-ink sm:text-2xl">
                    {it.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Noch mehr Auswahl im Geschäft"
        text="Kommen Sie vorbei und lassen Sie sich inspirieren."
      />
    </>
  );
}
