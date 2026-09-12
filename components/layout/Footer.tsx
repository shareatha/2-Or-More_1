import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { NAV_LINKS, SERVICE_AREAS, SITE } from "@/lib/constants";
import Container from "@/components/shared/Container";
import { LogoFull } from "@/components/shared/Logo";
import { BrandName } from "@/components/shared/BrandName";
import { InstagramIcon, FacebookIcon } from "@/components/shared/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-offwhite">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-start gap-4">
          <LogoFull dark className="w-40" />
          <p className="max-w-xs font-body text-sm leading-relaxed text-offwhite/70">
            {SITE.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-body text-sm font-bold uppercase tracking-wide text-gold">
            Explore
          </h4>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-offwhite/80 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-body text-sm font-bold uppercase tracking-wide text-gold">
            Where We Go
          </h4>
          {SERVICE_AREAS.map((area) => (
            <span key={area.state} className="font-body text-sm text-offwhite/80">
              {area.state}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-body text-sm font-bold uppercase tracking-wide text-gold">
            Get In Touch
          </h4>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 font-body text-sm text-offwhite/80 transition-colors hover:text-gold"
          >
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
          <a
            href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 font-body text-sm text-offwhite/80 transition-colors hover:text-gold"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <div className="mt-2 flex gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-offwhite/80 transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-offwhite/80 transition-colors hover:text-gold"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="font-body text-xs text-offwhite/50">
            &copy; {new Date().getFullYear()} <BrandName /> Events. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
