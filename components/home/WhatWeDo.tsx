import { ClipboardCheck, CalendarHeart, PartyPopper } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { WHAT_WE_DO_CARDS } from "@/lib/constants";

const ICONS = [ClipboardCheck, CalendarHeart, PartyPopper];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="What We Do"
          title="You bring the vision. We handle the details."
          description="2 or More helps hosts, couples, families, and organizations turn their event plans into an experience that actually runs smoothly. From final logistics to full-service planning, we step in wherever you need us."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {WHAT_WE_DO_CARDS.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={card.title}
                className="group flex flex-col items-start gap-4 rounded-lg border border-beige bg-offwhite p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold-dark transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-charcoal">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
