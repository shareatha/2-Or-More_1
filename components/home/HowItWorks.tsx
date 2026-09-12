import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="The Process" title="How It Works" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.step} className="relative flex flex-col gap-3">
              <span className="font-display text-5xl font-bold text-beige">
                {step.step}
              </span>
              <h3 className="font-display text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-charcoal">
                {step.description}
              </p>
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="absolute right-[-1.25rem] top-6 hidden h-px w-8 bg-gold/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
