import Image from "next/image";

/**
 * Real brand logo files (cropped/exported from the official brand board).
 * "mark" = just the 2OR numeral, for compact header/footer use.
 * "full" = the complete 2OR MORE lockup with tagline.
 * Light/dark variants exist because each was exported against a solid
 * background (white or black) rather than a transparent one.
 */

export function LogoMark({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Image
      src={dark ? "/images/logo/mark-dark.png" : "/images/logo/mark-light.png"}
      alt="2 or More"
      width={700}
      height={dark ? 715 : 740}
      sizes="80px"
      priority
      className={`h-full w-auto object-contain ${className}`}
    />
  );
}

export function LogoFull({
  className = "",
  dark = false,
  fit = "width",
}: {
  className?: string;
  dark?: boolean;
  /** "width" fills the parent's width (footer); "height" fills the parent's height (header). */
  fit?: "width" | "height";
}) {
  return (
    <Image
      src={dark ? "/images/logo/full-dark.png" : "/images/logo/full-light.png"}
      alt="2 or More — Event Coordination + Planning"
      width={1254}
      height={dark ? 1254 : 1180}
      sizes={fit === "height" ? "100px" : "300px"}
      priority
      className={`object-contain ${fit === "height" ? "h-full w-auto" : "h-auto w-full"} ${className}`}
    />
  );
}
