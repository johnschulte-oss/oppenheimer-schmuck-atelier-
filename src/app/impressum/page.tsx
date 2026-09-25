import type { Metadata } from "next";
import DraftNotice from "@/components/DraftNotice";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <h1 className="font-serif text-4xl text-ink [hyphens:auto] sm:text-5xl">
        Impressum
      </h1>
      <div className="mt-10 space-y-8 leading-relaxed text-stone">
        <DraftNotice />

        <div>
          <h2 className="font-serif text-2xl text-ink">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-3">
            {company.name}
            <br />
            Inhaber: [Name des Inhabers]
            <br />
            {company.street}
            <br />
            {company.zip} {company.city}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Kontakt</h2>
          <p className="mt-3">
            Telefon: {company.phone}
            <br />
            E-Mail: {company.email}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            <br />
            [USt-IdNr. ergänzen]
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-3">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Bildnachweise</h2>
          <p className="mt-3">
            Produktbilder Trauringe, Verlobungsringe und Schmuck: Rubin
            Trauringe. Produktbilder Uhren: Seiko.
          </p>
        </div>
      </div>
    </section>
  );
}
