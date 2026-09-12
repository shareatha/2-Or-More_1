import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { SIGNATURE_OFFER } from "@/lib/constants";

export default function SignatureOffer() {
  return (
    <section className="bg-ink py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-0 overflow-hidden rounded-2xl border border-gold/30 lg:grid-cols-2">
          <div className="relative h-72 w-full lg:h-full">
            <Image
              src="/images/photos/tablescape-black-gold.jpg"
              alt="Final reception details set by 2 or More before guest arrival"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 bg-charcoal p-10 sm:p-14">
            <span className="font-body text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Signature Offer &middot; {SIGNATURE_OFFER.price}
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight text-white text-balance sm:text-4xl">
              {SIGNATURE_OFFER.headline}
            </h2>
            <p className="font-body text-sm leading-relaxed text-offwhite/80 sm:text-base">
              {SIGNATURE_OFFER.description}
            </p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {SIGNATURE_OFFER.handoffItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  <span className="font-body text-sm text-offwhite/90">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/#inquire" variant="primary" className="mt-2 w-fit">
              Let&apos;s Plan It
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
