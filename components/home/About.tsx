import Image from "next/image";
import Container from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function About() {
  return (
    <section className="bg-offwhite py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
            About 2 or More
          </span>
          <h2 className="font-display text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
            The organized friend who has everything under control.
          </h2>
          <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
            At 2 or More, we believe the best events aren&apos;t just
            beautiful — they&apos;re well thought out, well executed, and
            actually enjoyable for the people hosting them. Whether
            you&apos;re planning a wedding, birthday, shower, milestone
            celebration, or corporate gathering, we&apos;re here to take the
            logistics off your plate so you can be present for the moments
            that matter.
          </p>
          <Button href="/about" variant="secondary" className="w-fit">
            Meet the Team
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 h-64 overflow-hidden rounded-lg sm:h-80">
            <Image
              src="/images/photos/founder-portrait.jpg"
              alt="2 or More founder setting a place card at a reception table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/photos/founder-bw.jpg"
              alt="2 or More founder reviewing an event binder"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-40 overflow-hidden rounded-lg">
            <Image
              src="/images/photos/champagne-toast.jpg"
              alt="Champagne toast at a 2 or More coordinated event"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
