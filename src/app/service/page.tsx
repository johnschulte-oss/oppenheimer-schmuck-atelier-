import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Schmuckservice & Uhrenservice",
  description:
    "Schmuckreparaturen, Anfertigungen und Uhrenservice in Friedberg: Prüfung der Wasserdichtigkeit, Batteriewechsel, Revision, Lederbänder, Glaswechsel.",
  alternates: { canonical: "/service" },
};

const jewelry = [
  "Reparaturen aller Art",
  "Individuelle Anfertigungen",
  "Ringe weiten und enger machen",
  "Ketten und Verschlüsse reparieren",
  "Steine fassen und ersetzen",
  "Reinigen, Polieren, Rhodinieren",
  "Gravuren",
  "Diamanten graduieren",
];

const watch = [
  "Prüfung der Wasserdichtigkeit",
  "Wiederherstellen der Wasserdichtigkeit",
  "Batteriewechsel",
  "Uhrenreparaturen",
  "Werkrevisionen",
  "Werktausch",
  "Glaswechsel",
  "Uhrenlederbänder",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 divide-y divide-line border-y border-line">
      {items.map((i) => (
        <li key={i} className="flex items-center gap-4 py-3.5 text-ink">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function ServicePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-2 pt-6 sm:px-8 md:pb-6 md:pt-16">
        <p className="eyebrow">Service</p>
        <h1 className="mt-4 max-w-2xl font-serif text-[2.75rem] leading-[1.05] text-ink sm:mt-5 sm:text-6xl">
          Unsere Werkstatt ist für Sie da.
        </h1>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#schmuckservice" className="btn-line !px-5 !py-2.5">
            Schmuckservice
          </a>
          <a href="#uhrenservice" className="btn-line !px-5 !py-2.5">
            Uhrenservice
          </a>
        </div>
      </section>

      <section
        id="schmuckservice"
        className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-16 md:py-24"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src="/images/werkbank.jpg"
            alt="Goldschmiede-Werkbank mit Werkzeugen von oben"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Schmuckservice
          </h2>
          <p className="mt-3 text-lg text-stone">
            Von der kleinen Reparatur bis zum Unikat.
          </p>
          <List items={jewelry} />
        </div>
      </section>

      <section id="uhrenservice" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="md:order-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-cream">
              <Image
                src="/images/proofmaster-wasser.jpg"
                alt="Witschi Proofmaster zur Prüfung der Wasserdichtigkeit"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">
              Uhrenservice
            </h2>
            <p className="mt-3 max-w-md text-lg text-stone">
              Mit dem Witschi Proofmaster prüfen wir, ob Ihre Uhr wirklich dicht
              ist. Schnell und zuverlässig.
            </p>
            <List items={watch} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Etwas kaputt?"
        text="Bringen Sie Ihr Schmuckstück oder Ihre Uhr einfach vorbei. Wir schauen es uns gern an."
      />
    </>
  );
}
