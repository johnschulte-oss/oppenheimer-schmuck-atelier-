import { company } from "@/lib/data";

/** Feste Leiste am unteren Rand auf dem Handy: Anrufen und Route mit einem Tipp. */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a
        href={`tel:${company.phoneHref}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-medium text-ink"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
        </svg>
        Anrufen
      </a>
      <a
        href={company.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-ink py-3.5 text-sm font-medium text-cream"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        Route planen
      </a>
    </div>
  );
}
