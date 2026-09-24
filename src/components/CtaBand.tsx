import Link from "next/link";
import { company } from "@/lib/data";

export default function CtaBand({
  title = "Wir beraten Sie gern persönlich.",
  text = "Kommen Sie einfach vorbei oder vereinbaren Sie telefonisch einen Termin.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-sand">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <h2 className="font-serif text-4xl leading-tight text-ink">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-stone">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${company.phoneHref}`} className="btn-dark">
            {company.phone}
          </a>
          <Link href="/kontakt" className="btn-line">
            Anfahrt & Öffnungszeiten
          </Link>
        </div>
      </div>
    </section>
  );
}
