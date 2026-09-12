import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClasses} gap-4`}>
      {eyebrow && (
        <span
          className={`font-body text-xs font-bold uppercase tracking-[0.25em] ${
            light ? "text-gold" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
          light ? "text-white" : "text-ink"
        } text-balance`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl font-body text-base leading-relaxed sm:text-lg ${
            light ? "text-offwhite/90" : "text-charcoal"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
