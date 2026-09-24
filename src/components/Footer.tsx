import Image from "next/image";
import Link from "next/link";
import { company, hours, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo.png"
            alt="Oppenheimer Schmuck-Atelier"
            width={1280}
            height={283}
            className="h-10 w-auto invert"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Juwelier im Geburtshaus von Sir Ernest Oppenheimer, mitten in
            Friedberg.
          </p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="eyebrow !text-gold">Besuch</p>
          <p className="mt-4">
            {company.street}
            <br />
            {company.zip} {company.city}
          </p>
          <a
            href={`tel:${company.phoneHref}`}
            className="mt-3 inline-block text-cream transition-colors hover:text-gold"
          >
            Tel. {company.phone}
          </a>
          <dl className="mt-5 space-y-1">
            {hours.map((h) => (
              <div key={h.day} className="flex gap-4">
                <dt className="w-36">{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="text-sm">
          <p className="eyebrow !text-gold">Rubriken</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
