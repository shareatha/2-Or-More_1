import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio | 2 or More",
  description:
    "Weddings, celebrations, showers, and corporate events coordinated by 2 or More across Delaware, Maryland & Pennsylvania.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-offwhite py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <SectionHeading
            eyebrow="Portfolio"
            title="Real Events, Real Details"
            description="A look at the weddings, celebrations, showers, and corporate events we've helped bring to life."
          />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <section className="bg-ink py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-bold text-white text-balance">
            Ready to plan something worth remembering?
          </h2>
          <Button href="/#inquire" variant="primary">
            Let&apos;s Plan It
          </Button>
        </Container>
      </section>
    </>
  );
}
