// Central source of truth for site content that grows over time
// (pricing, service areas, portfolio, testimonials). Update here first.

export const SITE = {
  name: "2 OR MORE",
  tagline: "More than a plan. A perfectly executed experience.",
  email: "business@2ormoreevents.com",
  phone: "(302) 555-0142",
  instagram: "https://instagram.com/2ormoreevents",
  facebook: "https://facebook.com/2ormoreevents",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export type PricingTier = {
  name: string;
  price: string;
  description?: string;
};

export const WEDDING_TIERS: PricingTier[] = [
  { name: "Day-of Coordination", price: "Starting at $1,800" },
  { name: "Month-of Management", price: "Starting at $2,400" },
  { name: "Partial Planning", price: "Starting at $3,500" },
  { name: "Full-Service Planning", price: "Starting at $5,500" },
];

export const CELEBRATION_INCLUDES = [
  "Birthdays",
  "Baby Showers",
  "Bridal Showers",
  "Graduations",
  "Engagement Parties",
  "Anniversaries",
  "Milestone Celebrations",
  "Family Celebrations",
  "Holiday Events",
];

export const CORPORATE_INCLUDES = [
  "Corporate events",
  "Networking events",
  "Launches",
  "Meetings",
  "Fundraisers",
  "Community events",
  "Employee celebrations",
];

export const SIGNATURE_OFFER = {
  name: "I've Got It From Here",
  price: "Starting at $2,500",
  headline: "You've planned the party. Now let 2 or More take it from here.",
  description:
    "For clients who have planned most of their event but are ready to hand over the details. 2 or More steps in approximately 8 weeks before the event and takes over:",
  handoffItems: [
    "Vendor communication",
    "Timeline",
    "Logistics",
    "Floor plan",
    "Final details",
    "Rehearsal",
    "Event-day coordination",
  ],
};

export const POWER_HOUR = {
  name: "Planning Power Hour",
  price: "$175 / 60 minutes",
  description:
    "For clients who need professional advice but aren't ready for full coordination.",
  examples: [
    "Build my event timeline",
    "Help me choose vendors",
    "Review my budget",
    "Create a floor plan",
    "Figure out what I'm missing",
    "Help me organize my event",
  ],
};

export const A_LA_CARTE: PricingTier[] = [
  { name: "Planning Power Hour", price: "$175" },
  { name: "90-Minute Event Rescue", price: "$250" },
  { name: "Event Design", price: "Starting at $350" },
  { name: "Rehearsal Coordination", price: "$250" },
  { name: "Setup", price: "Starting at $350" },
  { name: "Breakdown", price: "Starting at $350" },
  { name: "Floor Plan Assistance", price: "$150" },
  { name: "Seating Chart Assistance", price: "$150" },
  { name: "Additional Coordination", price: "$400+" },
  { name: "Additional Hours", price: "$125/hour" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tell Us About It",
    description: "Fill out the inquiry form and tell us what you're planning.",
  },
  {
    step: "02",
    title: "Let's Talk",
    description:
      "We'll learn about your event, vision, budget, and what kind of support you need.",
  },
  {
    step: "03",
    title: "Choose Your Support",
    description:
      "We'll recommend the service that makes the most sense for you.",
  },
  {
    step: "04",
    title: "We've Got It From Here",
    description: "You enjoy your event. We manage the details.",
  },
];

export const SERVICE_AREAS = [
  {
    state: "Delaware",
    cities: [
      "Wilmington",
      "Newark",
      "Hockessin",
      "Middletown",
      "Dover",
      "Rehoboth",
      "Bethany",
    ],
  },
  {
    state: "Maryland",
    cities: ["Elkton", "North East", "Baltimore", "Annapolis", "Eastern Shore"],
  },
  {
    state: "Pennsylvania",
    cities: [
      "Philadelphia",
      "West Chester",
      "Media",
      "Kennett Square",
      "Main Line",
      "surrounding areas",
    ],
  },
];

export type PortfolioCategory =
  | "Weddings"
  | "Celebrations"
  | "Showers"
  | "Corporate"
  | "Behind the Scenes";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Weddings",
  "Celebrations",
  "Showers",
  "Corporate",
  "Behind the Scenes",
];

export type PortfolioItem = {
  id: string;
  title: string;
  location: string;
  services: string;
  category: PortfolioCategory;
  size: "large" | "medium" | "small";
  image?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "wedding-wilmington-garden",
    title: "A Garden Wedding",
    location: "Wilmington, Delaware",
    services: "Full-Service Planning",
    category: "Weddings",
    size: "large",
    image: "/images/photos/ceremony-arch.jpg",
  },
  {
    id: "shower-newark-modern",
    title: "A Modern Baby Shower",
    location: "Newark, Delaware",
    services: "Coordination + Event Styling",
    category: "Showers",
    size: "medium",
    image: "/images/photos/baby-shower-modern.jpg",
  },
  {
    id: "corporate-philly-launch",
    title: "A Product Launch Evening",
    location: "Philadelphia, Pennsylvania",
    services: "Corporate Event Coordination",
    category: "Corporate",
    size: "medium",
    image: "/images/photos/champagne-toast.jpg",
  },
  {
    id: "birthday-annapolis-milestone",
    title: "A 40th Birthday Celebration",
    location: "Annapolis, Maryland",
    services: "Social Event Coordination",
    category: "Celebrations",
    size: "small",
    image: "/images/photos/tablescape-gold.jpg",
  },
  {
    id: "wedding-kennett-square-fall",
    title: "A Fall Estate Wedding",
    location: "Kennett Square, Pennsylvania",
    services: "Month-of Management",
    category: "Weddings",
    size: "medium",
    image: "/images/photos/tablescape-black-gold.jpg",
  },
  {
    id: "bts-team-setup",
    title: "Setup Day, Start to Finish",
    location: "Behind the Scenes",
    services: "Event Setup + Styling",
    category: "Behind the Scenes",
    size: "small",
    image: "/images/photos/founder-bw.jpg",
  },
  {
    id: "bridal-shower-rehoboth",
    title: "A Coastal Bridal Shower",
    location: "Rehoboth, Delaware",
    services: "Day-of Coordination",
    category: "Showers",
    size: "small",
    image: "/images/photos/bridal-shower-coastal.jpg",
  },
  {
    id: "wedding-main-line-classic",
    title: "A Classic Main Line Wedding",
    location: "Main Line, Pennsylvania",
    services: "Full-Service Planning",
    category: "Weddings",
    size: "large",
    image: "/images/photos/notebook-menu.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  service: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "2 or More took over two weeks before our wedding and it was the best decision we made. Everything ran exactly on time and I didn't think about logistics once.",
    name: "Alexis R.",
    service: "Wedding Coordination",
  },
  {
    quote:
      "I planned my daughter's shower myself but hired 2 or More for the day-of. I actually got to sit down and enjoy it instead of running around.",
    name: "Priya S.",
    service: "Social Event Coordination",
  },
  {
    quote:
      "Professional, warm, and incredibly organized. Our company launch event felt effortless because of the work happening behind the scenes.",
    name: "Marcus T.",
    service: "Corporate Event Coordination",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is day-of coordination?",
    answer:
      "Day-of coordination means you handle the planning and we handle the execution. In the weeks leading up to your event, we take over vendor communication, build your timeline, and manage every detail on the day itself so you can be a guest at your own event.",
  },
  {
    question: "When should I book 2 or More?",
    answer:
      "The sooner the better, especially for weddings, but we regularly step in as late as a few weeks out through our \"I've Got It From Here\" service. Reach out even if you think it might be too late — we'll tell you honestly what's possible.",
  },
  {
    question: "Do you only coordinate weddings?",
    answer:
      "Not at all. We coordinate weddings, birthdays, baby and bridal showers, graduations, anniversaries, corporate events, fundraisers, and community gatherings — basically anything worth gathering for.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. We're based in Delaware and regularly serve Maryland and Pennsylvania. If your event is outside our usual service area, reach out and we'll let you know if travel arrangements can be made.",
  },
  {
    question: "Can you help me find vendors?",
    answer:
      "Yes. Depending on your service level, we can recommend trusted vendors from our network or help you evaluate vendors you're already considering.",
  },
  {
    question: "Do you provide décor?",
    answer:
      "Event design and styling can be added on for select services. Let us know what you're envisioning and we'll tell you what's possible for your package.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Almost always. Our published tiers are starting points — during your consultation we'll talk through your specific event and build a plan that fits.",
  },
  {
    question: "How much does event coordination cost?",
    answer:
      "Pricing depends on the level of support you need, starting at $850 for social event coordination and $1,800 for wedding day-of coordination. Full pricing is listed on our Services page, and every quote is customized after a consultation.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "For weddings, 6-12 months out is ideal for full-service planning, and 2-3 months out for day-of coordination. For celebrations and corporate events, 4-8 weeks is generally comfortable — but reach out no matter your timeline.",
  },
];

export const WHAT_WE_DO_CARDS = [
  {
    title: "Coordinate",
    description: "You planned it. We'll execute it.",
  },
  {
    title: "Plan",
    description: "Need more support? We'll help bring the pieces together.",
  },
  {
    title: "Celebrate",
    description:
      "Weddings, birthdays, showers, milestones, corporate events & more.",
  },
];
