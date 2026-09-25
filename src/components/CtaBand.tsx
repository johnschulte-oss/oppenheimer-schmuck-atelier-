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
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8 md:py-20">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-stone">{text}</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto sm:flex-wrap">
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
