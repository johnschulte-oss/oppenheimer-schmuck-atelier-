import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import PhotoSlot from "@/components/PhotoSlot";

export const metadata: Metadata = {
  title: "Schmuck",
  description:
    "Diamantschmuck, Goldschmuck und Silberschmuck in Friedberg: Ketten, Ohrringe, Armbänder und Ringe.",
  alternates: { canonical: "/schmuck" },
};

const sections = [
  {
    id: "diamantschmuck",
    title: "Diamantschmuck",
    text: "Ketten, Ohrringe, Tennisarmbänder und Sets mit funkelnden Diamanten.",
    items: [
      { img: "rubin_teaser_necklaces.webp", name: "Anhänger & Ketten" },
      { img: "rubin_teaser_earrings.webp", name: "Ohrschmuck" },
      { img: "rubin_teaser_tennis.webp", name: "Tennis-Armbänder" },
      { img: "rubin_teaser_jewelry_sets.webp", name: "Schmuck-Sets" },
    ],
  },
  {
    id: "goldschmuck",
    title: "Goldschmuck",
    text: "Gelbgold, Weißgold und Roségold. Zeitlos und wertbeständig.",
    items: [
      { img: "rubin_teaser_alliances.webp", name: "Ringe in Gold" },
      { img: "rubin_teaser_ring_sets.webp", name: "Kombinationen" },
    ],
  },
  {
    id: "silberschmuck",
    title: "Silberschmuck",
    text: "Leichter Alltagsschmuck aus Sterlingsilber. Schön zum Verschenken.",
    items: [],
  },
];

export default function SchmuckPage() {
  return (
    <>
      <PageHero
        eyebrow="Schmuck"
        title="Kleine Dinge, große Freude."
        text="Diamant-, Gold- und Silberschmuck für jeden Anlass."
        image="/images/rubin/rubin_teaser_jewelry_sets.webp"
        imageAlt="Schmuck-Set mit Anhänger, Ring und Ohrsteckern"
      />

      <nav className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 sm:px-8">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="btn-line !px-5 !py-2.5">
            {s.title}
          </a>
        ))}
      </nav>

      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 ${i % 2 === 0 ? "bg-white" : ""} mt-16`}
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl text-ink sm:text-5xl">
                {s.title}
              </h2>
              <p className="mt-3 text-lg text-stone">{s.text}</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
              {s.items.map((it) => (
                <figure key={it.img}>
                  <div className="relative aspect-square overflow-hidden bg-sand">
                    <Image
                      src={`/images/rubin/${it.img}`}
                      alt={it.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-4 font-serif text-2xl text-ink">
                    {it.name}
                  </figcaption>
                </figure>
              ))}
              {s.items.length === 0 && (
                <PhotoSlot
                  label="Silberschmuck"
                  className="col-span-2 !aspect-[2/1]"
                />
              )}
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
