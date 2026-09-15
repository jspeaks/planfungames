export function HubMark({ alt }: { alt: string }) {
  return (
    <svg
      className="hub-mark"
      viewBox="0 0 160 160"
      role="img"
      aria-label={alt}
    >
      <rect x="18" y="28" width="92" height="58" rx="16" fill="currentColor" opacity="0.12" />
      <rect x="34" y="48" width="108" height="64" rx="16" fill="currentColor" opacity="0.2" />
      <rect x="28" y="44" width="108" height="64" rx="16" fill="#fff" stroke="currentColor" strokeWidth="4" />
      <circle cx="58" cy="76" r="6" fill="currentColor" />
      <circle cx="82" cy="76" r="6" fill="currentColor" />
      <circle cx="106" cy="76" r="6" fill="currentColor" />
      <circle cx="118" cy="128" r="22" fill="currentColor" />
      <rect x="110" y="108" width="16" height="22" rx="8" fill="#fff" />
    </svg>
  );
}
