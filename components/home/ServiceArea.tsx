import { MapPin } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceArea() {
  return (
    <section className="bg-offwhite py-24">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Service Area"
          title="We'll Meet You Where the Celebration Is."
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {SERVICE_AREAS.map((area) => (
            <div key={area.state} className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold-dark" />
                <h3 className="font-display text-xl font-bold text-ink">
                  {area.state}
                </h3>
              </div>
              <p className="font-body text-sm leading-relaxed text-charcoal">
                {area.cities.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
