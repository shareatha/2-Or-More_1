"use client";

import { useState } from "react";
import Image from "next/image";
import PlaceholderImage from "@/components/shared/PlaceholderImage";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
} from "@/lib/constants";

const SIZE_CLASSES: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2 aspect-square sm:aspect-auto",
  medium: "aspect-square",
  small: "aspect-square",
};

export default function PortfolioGrid({
  limit,
  showFilters = true,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const filtered = PORTFOLIO_ITEMS.filter(
    (item) => active === "All" || item.category === active
  );
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="flex flex-col gap-10">
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3">
          {(["All", ...PORTFOLIO_CATEGORIES] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === category
                  ? "border-gold bg-gold text-ink"
                  : "border-beige bg-white text-charcoal hover:border-gold hover:text-gold-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:auto-rows-[240px]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-lg ${SIZE_CLASSES[item.size]}`}
          >
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <PlaceholderImage
                label={item.title}
                className="h-full w-full transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 flex flex-col justify-end gap-1 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-body text-[11px] font-bold uppercase tracking-wide text-gold">
                {item.category}
              </span>
              <span className="font-display text-lg font-bold text-white">
                {item.title}
              </span>
              <span className="font-body text-xs text-offwhite/80">
                {item.location} &middot; {item.services}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
