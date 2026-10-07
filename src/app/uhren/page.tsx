import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Uhren",
  description:
    "Uhren für Damen und Herren in Friedberg. Autorisierter Seiko-Fachhändler mit Presage, Prospex, Seiko 5 Sports und Astron, dazu weitere Marken und eigene Uhrenwerkstatt.",
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
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="eyebrow !text-gold">Uhren in Friedberg</p>
            <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] sm:mt-5 sm:text-6xl">
              Zeit für eine schöne Uhr
            </h1>
            <p className="mt-6 max-w-md text-lg text-cream/85">
              Sportlich, elegant oder klassisch: Uhren für Damen und Herren,
              mit persönlicher Beratung und eigener Uhrenwerkstatt.
            </p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden sm:aspect-[3/4]">
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

      <section className="relative isolate overflow-hidden bg-ink text-cream border-t border-cream/10">
        <Image
          src="/images/uhren-schaufenster.jpg"
          alt="Uhren verschiedener Marken im Schaufenster des Ateliers"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-28">
          <p className="eyebrow !text-gold">Unsere Auswahl</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            Uhren verschiedener Marken
          </h2>
          <p className="mt-5 max-w-md text-lg text-cream/80">
            Wir führen eine schöne Auswahl an Uhrenmarken. Von sportlich bis
            elegant, für jeden Geschmack und jedes Budget.
          </p>
          <p className="mt-3 max-w-md text-cream/60">
            Schauen Sie vorbei, wir zeigen Ihnen gern das ganze Sortiment.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24">
          <p className="eyebrow">Autorisierter Fachhändler</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Seiko in Friedberg
          </h2>
          <p className="mt-4 max-w-xl text-lg text-stone">
            Original-Uhren mit Herstellergarantie. Beliebte Kollektionen:
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 md:mt-12 lg:grid-cols-4">
            {lines.map((l) => (
              <div key={l.name} className="group">
                <div className="relative aspect-square bg-cream">
                  <Image
                    src={`/images/seiko/${l.img}`}
                    alt={`Seiko ${l.name}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-105 sm:p-6"
                  />
                </div>
                <h3 className="mt-3 font-serif text-xl text-ink sm:mt-5 sm:text-2xl">
                  Seiko {l.name}
                </h3>
                <p className="mt-1 text-sm text-stone">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl sm:text-5xl">
              Aus unserem Schaufenster
            </h2>
            <p className="text-cream/70">
              Im Geschäft finden Sie noch viel mehr Auswahl.
            </p>
          </div>
          <div className="-mx-5 mt-8 no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mt-12 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0">
            {shop.map((s) => (
              <figure
                key={s.img}
                className="w-[72%] shrink-0 snap-start sm:w-[45%] lg:w-auto"
              >
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

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:py-20 sm:px-8 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-sand">
          <Image
            src="/images/uhren-service.jpg"
            alt="Uhrmacher setzt mit der Pinzette eine neue Batterie in eine Uhr ein"
            fill
            sizes="(min-width: 768px) 448px, 100vw"
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
        title="Ihre neue Uhr wartet."
        text="Kommen Sie vorbei und probieren Sie Ihre Favoriten in Ruhe an."
      />
    </>
  );
}
