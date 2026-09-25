import type { Metadata } from "next";
import DraftNotice from "@/components/DraftNotice";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <h1 className="font-serif text-4xl text-ink [hyphens:auto] sm:text-5xl">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 space-y-8 leading-relaxed text-stone">
        <DraftNotice />

        <div>
          <h2 className="font-serif text-2xl text-ink">Verantwortlicher</h2>
          <p className="mt-3">
            {company.name}, [Name des Inhabers], {company.street}, {company.zip}{" "}
            {company.city}. Telefon {company.phone}, E-Mail {company.email}.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Hosting</h2>
          <p className="mt-3">
            Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
            technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit,
            aufgerufene Seite) in Server-Logfiles verarbeitet. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Cookies und Tracking</h2>
          <p className="mt-3">
            Diese Website verwendet keine Tracking-Cookies und keine
            Analysewerkzeuge. Schriften werden lokal ausgeliefert.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Kontaktaufnahme</h2>
          <p className="mt-3">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
            Ihre Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b
            DSGVO).
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-ink">Ihre Rechte</h2>
          <p className="mt-3">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch
            sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde.
          </p>
        </div>
      </div>
    </section>
  );
}
