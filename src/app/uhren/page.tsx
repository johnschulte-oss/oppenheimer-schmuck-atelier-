import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Seiko Uhren",
  description:
    "Autorisierter Seiko-Fachhändler in Friedberg: Presage, Prospex, Seiko 5 Sports, Astron und King Seiko. Große Auswahl im Geschäft.",
  alternates: { canonical: "/uhren" },
};

const lines = [
  {
    name: "Presage",
    text: "Japanische Handwerkskunst am Handgelenk.",
    img: "presage-cocktail-time.png",
  },
  {
    name: "Prospex",
    text: "Robuste Taucher- und Sportuhren.",
    img: "prospex.png",
  },
  {
    name: "Seiko 5 Sports",
    text: "Automatik für jeden Tag.",
    img: "5sports.png",
  },
  {
    name: "Astron",
    text: "GPS-Solar. Immer die exakte Zeit.",
    img: "astron.png",
  },
];

const shop = [
  { img: "laden-chronograph.jpg", name: "Chronograph" },
  { img: "laden-damenuhr.jpg", name: "Damenuhr" },
  { img: "laden-5sports-pepsi.jpg", name: "Seiko 5 Sports Edition" },
];

export default function UhrenPage() {
  return (
    <>
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="eyebrow !text-gold">Autorisierter Fachhändler</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Seiko in Friedberg
            </h1>
            <p className="mt-6 max-w-md text-lg text-cream/85">
              Original-Uhren mit Herstellergarantie und Beratung vom Fachmann.
            </p>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
            <Image
              src="/images/seiko/laden-alpinist.jpg"
              alt="Seiko Prospex Alpinist im Oppenheimer Schmuck-Atelier"
              fill
              priority
              sizes="(min-width: 768px) 448px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Beliebte Kollektionen
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
            {lines.map((l) => (
              <div key={l.name} className="group">
                <div className="relative aspect-square bg-cream">
                  <Image
                    src={`/images/seiko/${l.img}`}
                    alt={`Seiko ${l.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ink">
                  Seiko {l.name}
                </h3>
                <p className="mt-1 text-sm text-stone">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl sm:text-5xl">
              Aus unserem Schaufenster
            </h2>
            <p className="text-cream/70">
              Im Geschäft finden Sie noch viel mehr Auswahl.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-3">
            {shop.map((s) => (
              <figure key={s.img}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`/images/seiko/${s.img}`}
                    alt={`Seiko ${s.name} im Oppenheimer Schmuck-Atelier`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-cream/70">
                  {s.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src="/images/seiko/kingseiko-banner.jpg"
            alt="King Seiko"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Service für Ihre Uhr</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Batterie, Band oder Revision?
          </h2>
          <p className="mt-5 max-w-md text-lg text-stone">
            Unsere Uhrenwerkstatt kümmert sich darum, auch um Uhren anderer
            Marken.
          </p>
          <Link href="/service#uhrenservice" className="btn-line mt-8">
            Zum Uhrenservice
          </Link>
        </div>
      </section>

      <CtaBand
        title="Ihre neue Seiko wartet."
        text="Kommen Sie vorbei und probieren Sie Ihre Favoriten in Ruhe an."
      />
    </>
  );
}
