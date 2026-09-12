import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import Accordion from "@/components/faq/Accordion";

export const metadata: Metadata = {
  title: "FAQ | 2 OR MORE",
  description:
    "Answers to common questions about event coordination and planning with 2 OR MORE.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <SectionHeading eyebrow="FAQ" title="Questions, Answered" />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Accordion />
        </Container>
      </section>

      <section className="bg-ink py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Still have questions?
          </h2>
          <Button href="/#inquire" variant="primary">
            Let&apos;s Plan It
          </Button>
        </Container>
      </section>
    </>
  );
}
