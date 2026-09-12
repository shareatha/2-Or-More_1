"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";

const EVENT_TYPES = [
  "Wedding",
  "Birthday",
  "Baby Shower",
  "Bridal Shower",
  "Graduation",
  "Corporate",
  "Community",
  "Other",
];

const SERVICES = [
  "Day-of Coordination",
  "Month-of Management",
  "I've Got It From Here",
  "Partial Planning",
  "Full-Service Planning",
  "Social Event Coordination",
  "Corporate Event",
  "Not sure yet",
];

const HEARD_ABOUT = [
  "Social Media",
  "Referral",
  "Google Search",
  "Instagram",
  "Other",
];

const inputClasses =
  "w-full rounded-md border border-beige bg-white px-4 py-3 font-body text-sm text-ink placeholder:text-charcoal/40 outline-none transition-colors focus:border-gold";

type Status = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.warn(
        "NEXT_PUBLIC_WEB3FORMS_KEY is not set — add it to .env.local to enable live submissions."
      );
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Inquiry — 2 or More Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="inquire" className="bg-white py-24">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-lg border border-gold/40 bg-offwhite p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-ink">
              Thanks for reaching out!
            </h2>
            <p className="font-body text-base text-charcoal">
              We&apos;ll review your event details and schedule a consultation
              call within 24 hours.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="inquire" className="bg-white py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Get Started"
          title="Let's Make It Happen."
          description="Tell us a bit about your event and we'll be in touch to schedule a consultation call."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <input
            name="name"
            required
            placeholder="Full Name*"
            className={inputClasses}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email*"
            className={inputClasses}
          />
          <input name="phone" placeholder="Phone" className={inputClasses} />
          <select name="event_type" defaultValue="" className={inputClasses}>
            <option value="" disabled>
              Event Type
            </option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="event_date"
            className={inputClasses}
            aria-label="Event Date"
          />
          <input
            name="event_location"
            placeholder="Event Location"
            className={inputClasses}
          />
          <input
            name="guest_count"
            placeholder="Estimated Guest Count"
            className={inputClasses}
          />
          <input
            name="budget"
            placeholder="Estimated Budget"
            className={inputClasses}
          />

          <fieldset className="col-span-1 flex flex-col gap-3 sm:col-span-2">
            <legend className="mb-1 font-body text-sm font-semibold text-ink">
              Services Interested In
            </legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 font-body text-sm text-charcoal"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="h-4 w-4 accent-[#c8a766]"
                  />
                  {service}
                </label>
              ))}
            </div>
          </fieldset>

          <textarea
            name="message"
            rows={4}
            placeholder="What do you need help with?"
            className={`${inputClasses} col-span-1 sm:col-span-2`}
          />

          <select
            name="heard_about"
            defaultValue=""
            className={`${inputClasses} col-span-1 sm:col-span-2`}
          >
            <option value="" disabled>
              How did you hear about us?
            </option>
            {HEARD_ABOUT.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          {status === "error" && (
            <p className="col-span-1 font-body text-sm text-red-600 sm:col-span-2">
              Something went wrong sending your inquiry. Please try again or
              email us directly.
            </p>
          )}

          <div className="col-span-1 flex flex-col items-center gap-3 sm:col-span-2">
            <Button
              type="submit"
              variant="primary"
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
            >
              {status === "submitting" ? "Sending..." : "Let's Make It Happen."}
            </Button>
            <p className="font-body text-xs text-charcoal/70">
              Need to book quickly?{" "}
              <a href="#power-hour" className="font-semibold text-gold-dark underline">
                Try a Planning Power Hour
              </a>
              .
            </p>
          </div>
        </form>
      </Container>
    </section>
  );
}
