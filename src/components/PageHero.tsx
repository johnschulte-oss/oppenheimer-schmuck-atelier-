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
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-2 md:gap-16 md:pb-24 md:pt-16">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">
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
