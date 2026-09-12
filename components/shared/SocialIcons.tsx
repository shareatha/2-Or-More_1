// lucide-react dropped brand icons; these are minimal hand-drawn glyphs.

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 9.5h2.5V6.5h-2.5c-2.2 0-3.5 1.3-3.5 3.5v2H8v3h2.5v6.5h3V15h2.3l.5-3h-2.8v-1.5c0-.8.2-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
