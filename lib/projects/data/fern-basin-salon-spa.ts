import type { Project } from "../types";

export const fernBasinSalonSpa: Project = {
  slug: "fern-basin-salon-spa",
  name: "Fern & Basin Salon + Spa",
  industry: "Beauty & Wellness",
  status: "concept",
  label: "Concept Project",
  featured: true,
  summary:
    "A premium, conversion-focused website template concept for salons, spas, barbers, nail studios, estheticians, and massage businesses — built to turn browsing into booked appointments.",
  featureTags: [
    "Booking-Focused Structure",
    "Services & Pricing",
    "Provider Profiles",
    "Service Gallery",
    "Gift Cards",
    "Client Reviews",
  ],
  cardImage: {
    src: "/projects/fern-basin/fern-basin-card.jpg",
    alt: "Fern & Basin Salon + Spa homepage concept preview",
  },
  liveUrl: "https://maple-signal-beauty-wellness.vercel.app/",
  githubUrl: "https://github.com/imanimdavisb/maple-signal-beauty-wellness",
  caseStudy: {
    overview:
      "Fern & Basin Salon + Spa is a fictional concept build created to demonstrate how Maple & Signal approaches websites for beauty and wellness businesses — salons, spas, barbers, nail studios, estheticians, and massage practices. Rather than a redesign of a real client site, it's a reusable template built to show how a booking-first structure, service and provider transparency, and inclusive photography come together to move a visitor toward scheduling an appointment.",
    challenge:
      "Beauty and wellness businesses sell an experience and a relationship of trust as much as a service — a prospective client wants to see the space, understand pricing before committing, know who will be doing the work, and feel confident the business reflects and welcomes them. Many salon and spa websites bury this behind generic stock photography, unclear pricing, and booking flows that are an afterthought rather than the center of the page. On mobile, where most of this browsing and booking happens, that friction is even more costly.",
    strategy:
      "The concept was structured around a single conversion path — get a visitor to a booked appointment — rather than a general brochure layout. Every section was built to answer a specific pre-booking question: what services are offered and what they cost, who the providers are, what the space and results actually look like, and what past clients think. Booking calls to action were treated as a structural element repeated at each decision point, not a single link in the header.",
    solution:
      "The site is organized around the decisions a prospective client actually makes: which service they want, what it costs, which provider they'd choose, and whether the space and results match what they're looking for. A services-and-pricing section, individual provider/team profiles, and a categorized gallery spanning hair, color, skin, nails, massage, and the physical space work together to reduce uncertainty before a visitor ever reaches the booking step. Promotional offers and gift card support extend the same booking-first structure into upsell and gifting occasions, and an FAQ plus clear location/hours information handle the logistical questions that otherwise generate one-off phone calls.",
    conversionStrategy:
      "Book-now calls to action appear after the services list, after provider profiles, and after the gallery and reviews — at each point a visitor has just gained a reason to convert, rather than needing to remember to scroll back to a single contact page. The booking structure was kept prominent and easy to reach on mobile specifically, since appointment browsing for local beauty and wellness businesses skews heavily to phone. Gift card and promotional-offer placement give the same structure a path to convert visitors who aren't ready to book a service outright.",
    conversionGoal: "booked appointments",
    featuresImplemented: [
      "Appointment-focused conversion structure with repeated booking CTAs",
      "Services and pricing presentation",
      "Provider and team profile pages",
      "Categorized service gallery — hair, color, skin, nails, massage, and space",
      "Promotional offers section",
      "Gift card support",
      "Client reviews and social proof",
      "FAQ section addressing common booking questions",
      "Location and hours information",
      "Mobile-first, fully responsive layout",
      "Reusable business-configuration architecture for adapting the template to a new salon, spa, or wellness brand",
      "Diverse and inclusive photography across providers and clients",
      "Accessibility and SEO fundamentals",
    ],
    designDecisions: [
      "The visual presentation was kept premium and calm — generous whitespace, restrained color, and editorial-style photography — to match how beauty and wellness clients evaluate a business on look and feel before they evaluate it on price.",
      "Services and pricing were surfaced early and clearly, so a visitor can self-qualify on cost and offerings before deciding whether to explore providers or book.",
      "Provider profiles were given their own dedicated presentation rather than being folded into an about page, since choosing a specific stylist, esthetician, or massage therapist is often the actual conversion decision for this industry.",
      "The gallery was structured by category — hair, color, skin, nails, massage, space — instead of a single undifferentiated grid, so a visitor can jump straight to the service they're evaluating.",
      "Photography direction emphasized diverse providers and clients across skin tones, ages, hair textures, and body types, so the site reflects and welcomes a broad range of prospective clients rather than a narrow, homogenous ideal.",
      "Booking CTAs were placed within easy thumb reach on mobile layouts, since appointment discovery and booking for local beauty and wellness businesses happens predominantly on phones.",
      "The business information — services, pricing, providers, hours, gallery categories — was structured as reusable configuration data, so the same template architecture can be re-skinned for a different salon, spa, or wellness brand without rebuilding the page structure.",
    ],
    technologies: [
      "Next.js",
      "Responsive, mobile-first CSS",
      "Reusable business-configuration architecture",
      "Booking-CTA structure ready for third-party scheduling integration",
      "Accessible, semantic markup",
    ],
    desktopScreenshots: [
      {
        src: "/projects/fern-basin/fern-basin-desktop-home.jpg",
        alt: "Fern & Basin desktop homepage concept",
      },
      {
        src: "/projects/fern-basin/fern-basin-desktop-services.jpg",
        alt: "Fern & Basin desktop services & pricing concept",
      },
      {
        src: "/projects/fern-basin/fern-basin-desktop-providers.jpg",
        alt: "Fern & Basin desktop provider profiles concept",
      },
      {
        src: "/projects/fern-basin/fern-basin-desktop-gallery.jpg",
        alt: "Fern & Basin desktop service gallery concept",
      },
    ],
    mobileScreenshots: [
      {
        src: "/projects/fern-basin/fern-basin-mobile-home.jpg",
        alt: "Fern & Basin mobile homepage concept",
      },
      {
        src: "/projects/fern-basin/fern-basin-mobile-services.jpg",
        alt: "Fern & Basin mobile services & booking concept",
      },
      {
        src: "/projects/fern-basin/fern-basin-mobile-gallery.jpg",
        alt: "Fern & Basin mobile gallery concept",
      },
    ],
    // No beforeAfter set: this is a concept build, not a redesign of a
    // confirmed prior site, so no "before" state is shown or implied.
  },
};
