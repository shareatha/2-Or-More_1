import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import {
  WEDDING_TIERS,
  CELEBRATION_INCLUDES,
  CORPORATE_INCLUDES,
} from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Services" title="Find Your Level of Support" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Weddings */}
          <div className="flex flex-col justify-between gap-8 rounded-lg border border-beige bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-2xl font-bold text-ink">Weddings</h3>
              <ul className="flex flex-col gap-4">
                {WEDDING_TIERS.map((tier) => (
                  <li
                    key={tier.name}
                    className="flex flex-col gap-0.5 border-b border-beige pb-3 last:border-none"
                  >
                    <span className="font-body text-sm font-semibold text-ink">
                      {tier.name}
                    </span>
                    <span className="font-body text-sm text-gold-dark">
                      {tier.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/services#weddings" variant="secondary" className="w-full">
              Compare Wedding Services
            </Button>
          </div>

          {/* Celebrations */}
          <div className="flex flex-col justify-between gap-8 rounded-lg border border-beige bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-2xl font-bold text-ink">
                Celebrations
              </h3>
              <div className="flex flex-col gap-1">
                <span className="font-body text-sm font-semibold text-ink">
                  Social Event Coordination
                </span>
                <span className="font-body text-sm text-gold-dark">
                  Starting at $850
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CELEBRATION_INCLUDES.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-beige/60 px-3 py-1 font-body text-xs text-charcoal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Button href="/#inquire" variant="secondary" className="w-full">
              Plan My Celebration
            </Button>
          </div>

          {/* Corporate + Community */}
          <div className="flex flex-col justify-between gap-8 rounded-lg border border-beige bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-2xl font-bold text-ink">
                Corporate + Community
              </h3>
              <span className="font-body text-sm font-semibold text-gold-dark">
                Custom services available
              </span>
              <div className="flex flex-wrap gap-2">
                {CORPORATE_INCLUDES.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-beige/60 px-3 py-1 font-body text-xs text-charcoal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Button href="/#inquire" variant="secondary" className="w-full">
              Inquire About Your Event
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
