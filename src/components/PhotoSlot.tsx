/** Platzhalter für ein Foto, das noch nachgeliefert wird. */
export default function PhotoSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[4/3] flex-col items-center justify-center gap-3 border border-dashed border-gold/60 bg-sand/60 text-center ${className}`}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        className="text-gold"
        aria-hidden
      >
        <rect x="3" y="6" width="18" height="14" rx="1.5" />
        <circle cx="12" cy="13" r="3.5" />
        <path d="M8 6l1.5-2h5L16 6" />
      </svg>
      <p className="font-serif text-xl text-ink">{label}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-stone">
        Foto folgt
      </p>
    </div>
  );
}
