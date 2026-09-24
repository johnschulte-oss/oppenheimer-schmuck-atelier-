import Image from "next/image";
import Link from "next/link";
import { categories, company, hours } from "@/lib/data";

const trust = [
  {
    title: "Autorisierter Seiko-Fachhändler",
    text: "Original-Uhren mit Herstellergarantie.",
  },
  {
    title: "Eigene Werkstatt",
    text: "Reparaturen, Anfertigungen und Uhrenservice im Haus.",
  },
  {
    title: "Goldankauf mit RFA-Prüfung",
    text: "Präzise und transparent, direkt vor Ihren Augen.",
  },
];

export default function Home() {
  return (
    <>
      {/* Einstieg */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-8 sm:px-8 md:grid-cols-[1fr_1.05fr] md:gap-16 md:pt-14">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Juwelier in Friedberg</p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            Schmuck,
            <br />
            der bleibt.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
            Trauringe, Verlobungsringe, Schmuck und Seiko-Uhren. Im Geburtshaus
            von Sir Ernest Oppenheimer.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#sortiment" className="btn-dark">
              Sortiment entdecken
            </Link>
            <a href={`tel:${company.phoneHref}`} className="btn-line">
              {company.phone}
            </a>
          </div>
        </div>
        <div className="relative order-1 aspect-square overflow-hidden bg-sand md:order-2">
          <Image
            src="/images/rubin/rubin_aboutRubin_manufacture_woman_with_ring.webp"
            alt="Frau mit Verlobungsring und Lilien"
            fill
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Rubriken */}
      <section id="sortiment" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">
              Was dürfen wir Ihnen zeigen?
            </h2>
            <p className="text-stone">Wählen Sie eine Rubrik.</p>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <Link key={c.href} href={c.href} className="group block">
                <div
                  className={`relative aspect-[4/3] overflow-hidden ${
                    c.contain ? "border border-line bg-white" : "bg-sand"
                  }`}
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`transition-transform duration-700 group-hover:scale-105 ${
                      c.contain ? "object-contain p-6" : "object-cover"
                    }`}
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-line pb-4">
                  <div>
                    <h3 className="font-serif text-3xl text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm text-stone">{c.text}</p>
                  </div>
                  <span
                    aria-hidden
                    className="text-xl text-gold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Oppenheimer */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="relative aspect-square overflow-hidden md:aspect-[4/3]">
            <Image
              src="/images/atelier-vitrine.jpg"
              alt="Vitrine vor historischem Fachwerk im Atelier"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow !text-gold">Ein besonderes Haus</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Hier wurde 1880 der „Diamantenkönig“ geboren.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-cream/75">
              Sir Ernest Oppenheimer kam in diesem Haus zur Welt und prägte
              später den weltweiten Diamanthandel. Heute sind hier Diamanten
              wieder zu Hause.
            </p>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm tracking-wide text-cream transition-colors hover:text-gold"
            >
              Unsere Geschichte →
            </Link>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-3">
        {trust.map((t, i) => (
          <div key={t.title} className="border-t border-gold pt-6">
            <p className="font-serif text-lg text-gold">0{i + 1}</p>
            <h3 className="mt-2 font-serif text-2xl text-ink">{t.title}</h3>
            <p className="mt-2 text-stone">{t.text}</p>
          </div>
        ))}
      </section>

      {/* Besuch */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/laden-heute.jpg"
              alt="Schaufenster des Oppenheimer Schmuck-Ateliers am Abend"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Besuchen Sie uns</p>
            <h2 className="mt-5 font-serif text-4xl text-ink sm:text-5xl">
              {company.street}
            </h2>
            <p className="mt-2 text-lg text-stone">
              {company.zip} {company.city}
            </p>
            <dl className="mt-8 max-w-sm divide-y divide-line border-y border-line">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between py-3">
                  <dt className="text-stone">{h.day}</dt>
                  <dd className="text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark"
              >
                Route planen
              </a>
              <a href={`tel:${company.phoneHref}`} className="btn-line">
                {company.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
