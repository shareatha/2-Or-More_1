import { Sparkles } from "lucide-react";
import Container from "@/components/shared/Container";
import BookingModal from "@/components/shared/BookingModal";
import { POWER_HOUR } from "@/lib/constants";

export default function PowerHour() {
  return (
    <section id="power-hour" className="bg-beige/40 py-20">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-2xl border border-gold/40 bg-white px-8 py-14 text-center shadow-sm sm:px-14">
          <Sparkles className="h-8 w-8 text-gold-dark" strokeWidth={1.5} />
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold-dark">
            Stuck on the details?
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Book a {POWER_HOUR.name}
          </h2>
          <p className="font-display text-2xl font-bold text-gold-dark">
            {POWER_HOUR.price}
          </p>
          <p className="max-w-xl font-body text-sm leading-relaxed text-charcoal sm:text-base">
            {POWER_HOUR.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {POWER_HOUR.examples.map((example) => (
              <span
                key={example}
                className="rounded-full bg-offwhite px-4 py-2 font-body text-xs text-charcoal"
              >
                {example}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <BookingModal />
          </div>
        </div>
      </Container>
    </section>
  );
}
