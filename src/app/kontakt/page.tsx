import type { Metadata } from "next";
import Image from "next/image";
import { company, hours } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt & Anfahrt",
  description:
    "Oppenheimer Schmuck-Atelier, Kaiserstraße 65, 61169 Friedberg (Hessen). Telefon 06031 92068. Öffnungszeiten und Anfahrt.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-6 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-20 md:pt-16">
        <div>
          <p className="eyebrow">Kontakt & Anfahrt</p>
          <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-ink sm:mt-5 sm:text-6xl">
            Wir freuen uns auf Sie.
          </h1>

          <div className="mt-10 space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone">
                Adresse
              </p>
              <p className="mt-2 font-serif text-3xl text-ink">
                {company.street}
              </p>
              <p className="text-lg text-stone">
                {company.zip} {company.city}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone">
                  Telefon
                </p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="mt-2 block font-serif text-3xl text-ink transition-colors hover:text-gold-dark"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone">
                  E-Mail
                </p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-2 block break-all text-lg text-ink transition-colors hover:text-gold-dark"
                >
                  {company.email}
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone">
                Öffnungszeiten
              </p>
              <dl className="mt-3 max-w-sm divide-y divide-line border-y border-line">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-3">
                    <dt className="text-stone">{h.day}</dt>
                    <dd className="text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`tel:${company.phoneHref}`} className="btn-dark">
                Jetzt anrufen
              </a>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
              >
                Route planen
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[4/3] overflow-hidden border border-line"
            aria-label="Standort in Google Maps öffnen"
          >
            <Image
              src="/images/karte.jpg"
              alt="Karte: Oppenheimer Schmuck-Atelier in der Kaiserstraße, Friedberg"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute bottom-4 left-4 bg-ink px-4 py-2 text-sm text-cream">
              In Google Maps öffnen →
            </span>
          </a>
          <div className="relative aspect-[4/3] overflow-hidden bg-sand">
            <Image
              src="/images/laden-heute.jpg"
              alt="Eingang des Oppenheimer Schmuck-Ateliers"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="text-stone">
            Direkt an der Kaiserstraße in der Friedberger Innenstadt, schräg
            gegenüber von dm.
          </p>
        </div>
      </section>
    </>
  );
}
