"use client";

import { useState } from "react";
import { X, CalendarClock } from "lucide-react";
import { Button } from "./Button";
import { SITE } from "@/lib/constants";

/**
 * Stub for the Power Hour direct-booking flow. Once a Cal.com / Calendly /
 * Acuity link exists, replace the body below with an embedded scheduler
 * (or swap the "Notify Me" action for a direct redirect to that link).
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="dark" onClick={() => setOpen(true)}>
        Book a Power Hour
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-charcoal transition-colors hover:text-gold-dark"
            >
              <X className="h-5 w-5" />
            </button>

            <CalendarClock className="mb-4 h-8 w-8 text-gold-dark" strokeWidth={1.5} />
            <h3 className="mb-2 font-display text-2xl font-bold text-ink">
              Booking coming soon
            </h3>
            <p className="mb-6 font-body text-sm leading-relaxed text-charcoal">
              Our online scheduler is being connected. In the meantime, email
              us and we&apos;ll get your Planning Power Hour on the calendar
              right away.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Planning Power Hour Booking`}
              className="inline-flex w-full items-center justify-center rounded-md border border-gold bg-gold px-6 py-3 font-body text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-gold-dark"
            >
              Email Us to Book
            </a>
          </div>
        </div>
      )}
    </>
  );
}
