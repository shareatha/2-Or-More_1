import type { ReactNode } from "react";

/**
 * Renders the company name as "2 OR MORE" with the numeral sized up to
 * match the cap-height of the surrounding letters (lining figures in
 * Playfair Display/Montserrat otherwise read smaller than the caps).
 */
export function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={`whitespace-nowrap ${className}`}>
      <span className="text-[1.25em]">2</span> OR MORE
    </span>
  );
}

const BRAND_PATTERN = /2 or more/gi;

/** Splits body copy on "2 or More" and swaps each match for <BrandName />. */
export function withBrandName(text: string): ReactNode {
  return text
    .split(BRAND_PATTERN)
    .reduce<ReactNode[]>((nodes, part, i, parts) => {
      nodes.push(part);
      if (i < parts.length - 1) nodes.push(<BrandName key={i} />);
      return nodes;
    }, []);
}
