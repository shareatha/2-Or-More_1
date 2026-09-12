import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondary-light" | "dark";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dark border border-gold hover:border-gold-dark",
  secondary:
    "bg-transparent text-ink border border-gold hover:bg-gold hover:text-ink",
  "secondary-light":
    "bg-transparent text-white border border-white/60 hover:bg-gold hover:text-ink hover:border-gold",
  dark: "bg-ink text-white border border-ink hover:bg-charcoal",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-body text-sm font-bold tracking-wide uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5";

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  ...props
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${baseClasses} ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as () => void}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
