import type { GrowthProfile } from "./types";

/**
 * FICTIONAL DEMO PROFILE — Professional Growth template.
 * Every person, organization, publication and result below is invented for demonstration.
 */
export const adrienneVale: GrowthProfile = {
  slug: "adrienne-vale",
  template: "growth",
  fictional: true,
  packageId: "professional-growth",
  seo: {
    title: "Adrienne Vale — Operations & Strategy Executive (Demo)",
    description:
      "A fictional Professional Growth portfolio by Maple & Signal: an operations and strategy executive with eighteen years of leadership experience.",
  },
  theme: { accent: "#c9a96e" },
  person: {
    name: "Adrienne Vale",
    firstName: "Adrienne",
    initials: "AV",
    role: "Operations & Strategy Executive",
    location: "Atlanta, GA",
    headshot: null,
    availability: "Open to COO, operating partner and advisory conversations",
  },
  intro: {
    eyebrow: "Operations & Strategy Executive",
    headline: "Building organizations that scale with calm, not chaos.",
    lede: "Eighteen years leading operations, integration and transformation across logistics and healthcare services. I help leadership teams turn strategy into operating models people can actually run.",
  },
  about: [
    "Adrienne Vale is an operations and strategy executive who has spent eighteen years helping organizations grow without losing what makes them work. Most recently Senior Vice President of Operations at Corvane Logistics, she led a 1,100-person organization across fourteen distribution sites and guided the company through its largest acquisition.",
    "She began her career as an industrial engineer, moved into strategy consulting at Halden & Rowe, and later built the operations function at Meridian Care Partners during a period of rapid expansion. Across each role she has been known for the same thing: making complicated change feel orderly to the people living through it.",
    "Adrienne advises growth-stage companies on operating model design, serves on the board of a regional workforce nonprofit, and speaks on integration and operational leadership. She holds an MBA and a B.S. in Industrial Engineering.",
  ],
  expertise: [
    {
      title: "Operating model design",
      description: "Structuring teams, decision rights and cadences so strategy turns into weekly work.",
    },
    {
      title: "Mergers & integration",
      description: "Planning and leading post-merger integration across people, systems and sites.",
    },
    {
      title: "Network & supply chain strategy",
      description: "Footprint planning, consolidation and service-level design for multi-site operations.",
    },
    {
      title: "Transformation leadership",
      description: "Leading multi-year change programs with clear milestones and honest communication.",
    },
    {
      title: "Executive team development",
      description: "Building and coaching leadership benches that can run the business without heroics.",
    },
  ],
  highlights: [
    { value: "18", label: "Years in operations & strategy" },
    { value: "1,100", label: "People in largest organization led" },
    { value: "14", label: "Distribution sites overseen" },
    { value: "2", label: "Acquisitions integrated" },
  ],
  positions: [
    {
      org: "Corvane Logistics",
      role: "Senior Vice President, Operations",
      start: "2020",
      end: "2026",
      bullets: [
        "Led operations across fourteen distribution sites and a 1,100-person organization.",
        "Directed integration of a regional carrier acquisition over eighteen months.",
      ],
    },
    {
      org: "Meridian Care Partners",
      role: "Vice President, Operations & Strategy",
      start: "2015",
      end: "2020",
      bullets: [
        "Built the operations function as the network grew from 12 to 31 clinics.",
        "Established the company’s first operating cadence and performance dashboard.",
      ],
    },
    {
      org: "Halden & Rowe",
      role: "Engagement Manager, Strategy Practice",
      start: "2011",
      end: "2015",
      bullets: ["Led operations strategy engagements for logistics, retail and healthcare clients."],
    },
    {
      org: "Kestrel Manufacturing",
      role: "Industrial Engineer → Operations Manager",
      start: "2008",
      end: "2011",
      bullets: ["Ran continuous-improvement programs on two production lines."],
    },
  ],
  philosophy: {
    quote: "Strategy is a promise. Operations is how you keep it.",
    principles: [
      {
        title: "Clarity before speed",
        body: "Teams move fastest when they know what matters, who decides and how success will be measured. I spend the first weeks of any change making those three things unmistakable.",
      },
      {
        title: "Design for ordinary days",
        body: "A good operating model works when everyone is having an average week. I build systems that don’t depend on heroics, late nights or one irreplaceable person.",
      },
      {
        title: "Tell people the truth early",
        body: "Change goes better when people hear the hard parts first and from their own leaders. Trust is the most valuable thing a transformation can protect.",
      },
    ],
  },
  caseStudies: [
    {
      id: "integration",
      title: "Integrating a regional carrier without losing service",
      org: "Corvane Logistics",
      sector: "Logistics",
      year: "2022–2023",
      challenge:
        "Corvane acquired a regional carrier with different systems, routes and culture. Customers on both sides expected service to stay steady throughout.",
      approach: [
        "Set up an integration office with clear decision rights and a single weekly risk review.",
        "Sequenced system cutovers by region, with fallback plans agreed before each go-live.",
        "Paired leaders from both companies for every site and published a shared playbook.",
      ],
      outcome: [
        "Completed integration across nine sites in eighteen months, on the planned timeline.",
        "Kept on-time delivery within the agreed service range throughout cutover.",
        "Retained the acquired company’s senior site leaders through the first full year.",
      ],
      metrics: [
        { value: "9", label: "Sites integrated" },
        { value: "18 mo", label: "Planned timeline met" },
      ],
    },
    {
      id: "network",
      title: "Redesigning a distribution network for the next decade",
      org: "Corvane Logistics",
      sector: "Supply chain",
      year: "2021",
      challenge:
        "Overlapping facilities and uneven service levels were raising costs and confusing customers across the Southeast.",
      approach: [
        "Led a cross-functional team to model demand, service and cost scenarios.",
        "Built a phased consolidation plan with site leaders rather than handing one down.",
      ],
      outcome: [
        "Consolidated three facilities into one modern hub over two phases.",
        "Reduced network operating cost by roughly 11% against the prior-year baseline.",
      ],
      metrics: [
        { value: "3 → 1", label: "Facilities consolidated" },
        { value: "~11%", label: "Network cost reduction" },
      ],
    },
    {
      id: "operating-model",
      title: "Building an operating cadence for a fast-growing network",
      org: "Meridian Care Partners",
      sector: "Healthcare services",
      year: "2016–2019",
      challenge:
        "The clinic network was growing quickly, but each location ran differently and leaders lacked a shared view of performance.",
      approach: [
        "Introduced a monthly operating review with a short set of shared measures.",
        "Standardized opening playbooks for new clinics and trained regional leads to run them.",
      ],
      outcome: [
        "Supported growth from 12 to 31 clinics with a consistent operating rhythm.",
        "Shortened the time for a new clinic to reach its staffing plan.",
      ],
      metrics: [
        { value: "12 → 31", label: "Clinics supported" },
        { value: "1", label: "Shared operating review" },
      ],
    },
  ],
  accomplishments: [
    "Led the largest acquisition integration in Corvane Logistics’ history.",
    "Built Meridian Care Partners’ operations function from a team of three.",
    "Developed eleven direct reports who went on to director-level or higher roles.",
    "Chaired the company-wide safety council for three consecutive years.",
  ],
  credentials: {
    education: [
      { school: "Weston School of Business", degree: "MBA, Operations & Strategy", end: "2011" },
      { school: "Calder Institute of Technology", degree: "B.S. Industrial Engineering", end: "2008" },
    ],
    boards: [
      { org: "Southeast Workforce Collaborative", role: "Board Member, Finance Committee", period: "2021–present" },
      { org: "Growth-stage logistics startups", role: "Operations Advisor", period: "2019–present" },
    ],
  },
  certifications: [
    { name: "Lean Six Sigma Black Belt", issuer: "Professional certification body", year: "2010" },
    { name: "Certified Supply Chain Professional (CSCP)", issuer: "ASCM", year: "2017" },
  ],
  thoughtLeadership: [
    { kind: "Talk", title: "Integration Is an Operating Problem", venue: "Southeast Operations Forum", year: "2025" },
    { kind: "Article", title: "Designing for Ordinary Days", venue: "Operations Quarterly", year: "2024" },
    { kind: "Panel", title: "Leading Through Network Consolidation", venue: "Regional Supply Chain Summit", year: "2023" },
    { kind: "Podcast", title: "The Calm Operator", venue: "Middle Mile Podcast", year: "2023" },
  ],
  resume: {
    href: "/resumes/adrienne-vale-sample-resume.pdf",
    fileName: "Adrienne-Vale-Executive-Resume-SAMPLE.pdf",
    updated: "2026",
  },
  contact: {
    heading: "For board, advisory and executive conversations.",
    blurb: "I welcome conversations about operating roles, advisory work and speaking. A short note about context and timing is the best way to begin.",
    links: [
      { kind: "email", label: "Email", display: "adrienne.vale@example.com", href: null },
      { kind: "linkedin", label: "LinkedIn", display: "linkedin.com/in/your-profile", href: null },
      { kind: "calendar", label: "Schedule a call", display: "Booking link", href: null },
    ],
  },
};
