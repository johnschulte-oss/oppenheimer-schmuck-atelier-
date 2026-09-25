import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  contain?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  contain,
}: Props) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-6 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-[2.75rem] leading-[1.05] text-ink sm:mt-5 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-stone sm:mt-6">
          {text}
        </p>
      </div>
      <div
        className={`relative aspect-[4/3] overflow-hidden ${
          contain ? "bg-white" : "bg-sand"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className={contain ? "object-contain p-6" : "object-cover"}
        />
      </div>
    </section>
  );
}
