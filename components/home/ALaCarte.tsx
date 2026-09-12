import Container from "@/components/shared/Container";
import { A_LA_CARTE } from "@/lib/constants";

export default function ALaCarte() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-8">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Need a Little More?
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
  );
}
