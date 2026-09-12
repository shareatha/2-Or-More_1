import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About | 2 or More",
  description:
    "Meet the team behind 2 or More and learn the philosophy driving our event coordination and planning services.",
};

const VALUES = [
  {
    title: "Organized, always",
    description:
      "Every detail has a home in our system — nothing gets left to chance or memory.",
  },
  {
    title: "Warm, not stiff",
    description:
      "We're professionals, but we're also the friend who shows up early and stays calm under pressure.",
  },
  {
    title: "Present-moment focused",
    description:
      "Our job is to disappear into the background so you can actually enjoy what you planned.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="font-body text-xs font-bold uppercase tracking-[0.25em] text-gold-dark">
              Our Story
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
              We started 2 or More to make hosting feel good again.
            </h1>
            <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
              After years spent behind the scenes at other people&apos;s
              events — smoothing over vendor hiccups, chasing timelines, and
              making sure no one but us ever noticed a thing went sideways —
              it became clear that every host needs something a little
              different. Some want a partner from the very first decision.
              Others just need someone to step in, take the reins, and
              execute the plan they&apos;ve already built. 2 or More was
              made to meet hosts wherever they are in that process.
            </p>
            <p className="font-body text-base leading-relaxed text-charcoal sm:text-lg">
              That&apos;s 2 or More: an event coordination and planning
              company built for hosts who want it done right, without losing
              themselves in the process.
            </p>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/photos/founder-portrait.jpg"
              alt="2 or More founder setting a place card at a reception table"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="Our Mission"
            title="Beautiful events shouldn't come at the cost of your sanity."
            description="At 2 or More, we believe the best events aren't just beautiful — they're well thought out, well executed, and actually enjoyable for the people hosting them."
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 rounded-lg border border-beige bg-offwhite p-8"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {value.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-charcoal">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="Behind The Scenes" title="A Day In the Life" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="relative col-span-2 h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/photos/founder-bw.jpg"
                alt="2 or More founder reviewing an event binder"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/photos/notebook-menu.jpg"
                alt="2 or More branded planning notebook and menu card"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src="/images/photos/tablescape-gold.jpg"
                alt="Reception table detail styled by 2 or More"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white text-balance">
            Let&apos;s talk about your event.
          </h2>
          <Button href="/#inquire" variant="primary">
            Let&apos;s Plan It
          </Button>
        </Container>
      </section>
    </>
  );
}
