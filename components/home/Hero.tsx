import Image from "next/image";
import { Button } from "@/components/shared/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-ink">
      <Image
        src="/images/photos/ceremony-arch.jpg"
        alt="Floral ceremony arch and gold chiavari chairs at a 2 or More coordinated wedding"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-32 text-center sm:px-8 lg:px-12">
        <span className="font-body text-xs font-bold uppercase tracking-[0.35em] text-gold">
          Delaware &middot; Maryland &middot; Pennsylvania
        </span>
        <h1 className="max-w-4xl font-display text-5xl font-bold uppercase leading-[1.05] text-white text-balance sm:text-6xl lg:text-7xl">
          More than a plan. <span className="text-gold">A perfectly executed experience.</span>
        </h1>
        <p className="max-w-2xl font-body text-base leading-relaxed text-offwhite/90 sm:text-lg">
          Event coordination and planning for weddings, celebrations, and
          everything worth gathering for. Serving Delaware, Maryland &
          Pennsylvania.
        </p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href="/#inquire" variant="primary">
            Let&apos;s Plan It
          </Button>
          <Button href="/services" variant="secondary-light">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
