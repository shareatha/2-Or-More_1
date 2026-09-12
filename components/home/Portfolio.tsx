import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function Portfolio() {
  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Events We've Brought to Life"
          description="A glimpse at the weddings, celebrations, and gatherings we've helped run smoothly."
        />

        <PortfolioGrid limit={6} showFilters={false} />

        <div className="flex justify-center">
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
