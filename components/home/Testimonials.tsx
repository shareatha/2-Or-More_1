"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-charcoal py-24">
      <Container className="flex flex-col items-center gap-10">
        <SectionHeading eyebrow="Testimonials" title="Kind Words" light />

        <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <div className="flex gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold" />
            ))}
          </div>
          <p className="font-display text-2xl font-medium leading-snug text-white text-balance sm:text-3xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <div className="flex flex-col gap-0.5">
            <span className="font-body text-sm font-bold uppercase tracking-wide text-gold">
              {testimonial.name}
            </span>
            <span className="font-body text-xs text-offwhite/70">
              {testimonial.service}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-gold" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
