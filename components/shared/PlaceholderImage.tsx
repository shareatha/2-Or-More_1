import { ImageIcon } from "lucide-react";

/**
 * Stands in for a real photo until brand imagery is supplied. Swap by
 * replacing the parent with a `next/image` pointed at /public/images/...
 */
export default function PlaceholderImage({
  label,
  className = "",
  variant = "beige",
}: {
  label: string;
  className?: string;
  variant?: "beige" | "charcoal" | "gold";
}) {
  const gradients: Record<string, string> = {
    beige: "from-beige via-offwhite to-beige",
    charcoal: "from-charcoal via-ink to-charcoal",
    gold: "from-gold via-beige to-gold",
  };

  const textColor = variant === "charcoal" ? "text-white/70" : "text-charcoal/60";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradients[variant]} ${className}`}
    >
      <div className={`flex flex-col items-center gap-2 px-4 text-center ${textColor}`}>
        <ImageIcon className="h-6 w-6" strokeWidth={1.5} />
        <span className="font-body text-xs font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
