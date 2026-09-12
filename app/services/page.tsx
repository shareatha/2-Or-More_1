import type { Metadata } from "next";
import { Check, CalendarClock, CreditCard } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import {
  CELEBRATION_INCLUDES,
  CORPORATE_INCLUDES,
  A_LA_CARTE,
  SIGNATURE_OFFER,
  POWER_HOUR,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Pricing | 2 OR MORE",
  description:
    "Compare wedding coordination and planning packages, social event coordination, and corporate event services from 2 OR MORE.",
};

const WEDDING_TIER_DETAILS = [
  {
    name: "Day-of Coordination",
    price: "Starting at $1,800",
    bestFor: "Hosts who've planned everything and need execution on the day.",
    includes: [
      "Two pre-event planning calls",
      "Timeline creation & vendor confirmation",
      "Up to 10 hours of on-site coordination",
      "Setup oversight & vendor management",
    ],
  },
  {
    name: "Month-of Management",
    price: "Starting at $2,400",
    bestFor: "Hosts who want a professional hand-off starting 30 days out.",
    includes: [
      "Everything in Day-of Coordination",
      "Vendor communication takeover 30 days prior",
      "Final walkthrough & rehearsal coordination",
      "Detailed timeline distributed to all vendors",
    ],
  },
  {
    name: "Partial Planning",
    price: "Starting at $3,500",
    bestFor: "Hosts who want a planning partner for the final stretch and beyond.",
    includes: [
      "Everything in Month-of Management",
      "Design & vendor recommendations",
      "Budget tracking support",
      "Ongoing planning check-ins",
    ],
  },
  {
    name: "Full-Service Planning",
    price: "Starting at $5,500",
    bestFor: "Hosts who want full support from the very first decision.",
    includes: [
      "Everything in Partial Planning",
      "Full vendor sourcing & booking support",
      "Unlimited planning check-ins",
      "Complete design & logistics management",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <SectionHeading
            eyebrow="Services & Pricing"
            title="Find the Right Level of Support"
            description="Every package starts here — during your consultation, we'll customize the details to fit your event."
          />
        </Container>
      </section>

      <section id="weddings" className="bg-white py-20">
        <Container className="flex flex-col gap-12">
          <h2 className="font-display text-3xl font-bold text-ink">Weddings</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {WEDDING_TIER_DETAILS.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col justify-between gap-6 rounded-lg border border-beige bg-offwhite p-7"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {tier.name}
                  </h3>
                  <span className="font-body text-sm font-bold text-gold-dark">
                    {tier.price}
                  </span>
                  <p className="font-body text-xs italic text-charcoal/80">
                    {tier.bestFor}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                        <span className="font-body text-xs text-charcoal">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button href="/#inquire" variant="secondary" className="w-full text-xs">
                  Inquire
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="celebrations" className="bg-offwhite py-20">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:max-w-md">
            <h2 className="font-display text-3xl font-bold text-ink">
              Celebrations
            </h2>
            <span className="font-body text-sm font-bold text-gold-dark">
              Social Event Coordination — Starting at $850
            </span>
            <p className="font-body text-sm leading-relaxed text-charcoal">
              For birthdays, showers, graduations, anniversaries, and every
              milestone worth marking. We step in to run the day so you can
              be a guest at your own celebration.
            </p>
            <Button href="/#inquire" variant="primary" className="w-fit">
              Plan My Celebration
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 lg:max-w-md">
            {CELEBRATION_INCLUDES.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-4 py-2 font-body text-xs text-charcoal shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="corporate" className="bg-white py-20">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:max-w-md">
            <h2 className="font-display text-3xl font-bold text-ink">
              Corporate + Community
            </h2>
            <span className="font-body text-sm font-bold text-gold-dark">
              Custom services available
            </span>
            <p className="font-body text-sm leading-relaxed text-charcoal">
              Every organization&apos;s event is different, so pricing is built
              around your goals, guest count, and timeline.
            </p>
            <Button href="/#inquire" variant="primary" className="w-fit">
              Inquire About Your Event
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 lg:max-w-md">
            {CORPORATE_INCLUDES.map((item) => (
              <span
                key={item}
                className="rounded-full bg-offwhite px-4 py-2 font-body text-xs text-charcoal shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Signature Offer &middot; {SIGNATURE_OFFER.price}
          </span>
          <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl">
            {SIGNATURE_OFFER.headline}
          </h2>
          <p className="max-w-2xl font-body text-sm leading-relaxed text-offwhite/80">
            {SIGNATURE_OFFER.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {SIGNATURE_OFFER.handoffItems.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/10 px-4 py-2 font-body text-xs text-white"
              >
                {item}
              </span>
            ))}
          </div>
          <Button href="/#inquire" variant="primary" className="mt-4">
            Let&apos;s Plan It
          </Button>
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">
            {POWER_HOUR.name}
          </h2>
          <span className="font-body text-lg font-bold text-gold-dark">
            {POWER_HOUR.price}
          </span>
          <p className="max-w-xl font-body text-sm leading-relaxed text-charcoal">
            {POWER_HOUR.description}
          </p>
          <Button href="/#power-hour" variant="secondary">
            Learn More on the Homepage
          </Button>
        </Container>
      </section>

      <section id="book-consultation" className="bg-offwhite py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Book a Consultation"
            title="See the Full Client Experience"
            description="A live preview of the booking flow — pick a time for a free discovery call, then see how reserving and paying for a package would work."
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-lg border border-beige bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <CalendarClock className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Step 1 &middot; Pick a Time
                </h3>
              </div>
              <p className="font-body text-sm text-charcoal">
                Choose a time below for a free discovery call.
              </p>
              <div className="overflow-hidden rounded-md border border-beige">
                <iframe
                  src="https://calendly.com/reigninlifeministries-proton/discovery-call"
                  width="100%"
                  height="650"
                  frameBorder={0}
                  title="Schedule a discovery call"
                  className="block"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border border-beige bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                  <CreditCard className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Step 2 &middot; Reserve Your Spot
                </h3>
              </div>
              <p className="font-body text-sm text-charcoal">
                Ready to lock in a package? Here&apos;s a preview of the
                checkout for the {POWER_HOUR.name}.
              </p>

              <div className="flex flex-col gap-1 rounded-md border border-beige bg-offwhite p-5">
                <span className="font-display text-lg font-bold text-ink">
                  {POWER_HOUR.name}
                </span>
                <span className="font-body text-sm font-bold text-gold-dark">
                  {POWER_HOUR.price}
                </span>
              </div>

              <a
                href="https://buy.stripe.com/test_6oU7sK54vdorczJaRL5gc00"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-gold px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-dark hover:bg-gold-dark hover:shadow-lg"
              >
                Pay &amp; Book Now
              </a>
              <p className="font-body text-xs text-charcoal/60">
                Demo checkout &middot; Stripe test mode &middot; no charge
                will be made.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="flex flex-col gap-8">
          <h2 className="font-display text-2xl font-bold text-ink">
            A La Carte Services
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {A_LA_CARTE.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between border-b border-beige py-2"
              >
                <span className="font-body text-sm text-charcoal">{item.name}</span>
                <span className="font-body text-sm font-semibold text-gold-dark">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
