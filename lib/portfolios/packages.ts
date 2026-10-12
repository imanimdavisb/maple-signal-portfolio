/**
 * Professional Portfolio Websites: packages, prices, FAQ and form options.
 *
 * Edit prices and inclusions here; the Professional Portfolios page, the
 * demos and the inquiry form all read from this file.
 *
 * Text wrapped in [[double brackets]] renders as a highlighted placeholder so
 * unfinished business terms are obvious on the page. Replace the brackets with
 * final wording when a term is decided.
 */

export type PackageId = "career-launch" | "career-transition" | "professional-growth";

export type Package = {
  id: PackageId;
  name: string;
  /** Whole US dollars. Displayed as an introductory price. */
  price: number;
  audience: string;
  summary: string;
  demoSlug: string;
  includes: string[];
  featured?: boolean;
};

export const pricingNote =
  "Introductory pricing. One-time design and build fee per site.";

export const packages: Package[] = [
  {
    id: "career-launch",
    name: "Career Launch",
    price: 199,
    audience: "For recent graduates",
    summary:
      "A confident first home on the web for students and early-career professionals, built from your education, internships, leadership and projects.",
    demoSlug: "simone-adeyemi",
    includes: [
      "One-page site on the Career Launch design",
      "Sections for education, internships, leadership, skills and projects",
      "Headshot placement or a designed monogram",
      "Resume download and LinkedIn link",
      "Layout tuned for phones, tablets and desktops",
      "Search title, description and link preview",
      "[[Number]] rounds of revisions",
    ],
  },
  {
    id: "career-transition",
    name: "Career Transition",
    price: 249,
    audience: "For job seekers and career changers",
    summary:
      "A site that connects where you have been to where you are going, with your transferable skills and results front and center.",
    demoSlug: "marcus-bell",
    featured: true,
    includes: [
      "Everything in Career Launch, on the Career Transition design",
      "Career transition statement shaped from your notes",
      "Transferable skills section mapping past work to new roles",
      "Interactive career timeline",
      "Accomplishments section for measurable results",
      "[[Number]] rounds of revisions",
    ],
  },
  {
    id: "professional-growth",
    name: "Professional Growth",
    price: 399,
    audience: "For established professionals",
    summary:
      "An editorial, executive-grade presence for leaders, managers and consultants who need to be taken seriously at first click.",
    demoSlug: "adrienne-vale",
    includes: [
      "Executive layout on the Professional Growth design",
      "Executive biography refined from your materials",
      "Up to [[number]] featured case studies",
      "Expertise, philosophy, credentials, and speaking or publications sections",
      "Custom accent color within the design system",
      "[[Number]] rounds of revisions",
    ],
  },
];

export const addOns: { name: string; detail: string; price: string }[] = [
  {
    name: "Writing from scratch",
    detail: "Packages shape the material you supply. Full copywriting from interviews is extra.",
    price: "[[Quoted per project]]",
  },
  {
    name: "Additional pages or case studies",
    detail: "Extra project pages, a blog or more case studies than your package includes.",
    price: "[[Quoted per project]]",
  },
  {
    name: "Custom domain setup",
    detail: "Connecting a domain you own to your site and checking it is secure.",
    price: "[[Price to be set]]",
  },
  {
    name: "Contact form",
    detail: "A working form on your site, connected to your inbox through a form service.",
    price: "[[Price to be set]]",
  },
  {
    name: "Rush timeline",
    detail: "Priority scheduling when you need to launch sooner.",
    price: "[[Price to be set]]",
  },
  {
    name: "Ongoing updates",
    detail: "New roles, projects or a refreshed resume after launch.",
    price: "[[Rate to be set]]",
  },
];

export const thirdPartyCosts: { name: string; detail: string }[] = [
  {
    name: "Domain registration",
    detail:
      "A domain like yourname.com is registered in your name with a registrar and usually renews yearly. The cost is paid to the registrar and is not part of the package.",
  },
  {
    name: "Hosting",
    detail:
      "Many personal sites fit within free hosting plans, but plan limits and prices are set by the hosting provider and can change.",
  },
  {
    name: "Ongoing maintenance",
    detail:
      "Content updates, design changes and technical upkeep after launch are optional and billed separately.",
  },
];

/**
 * Student pricing for high school and college students.
 * Leave `available: false` until prices are decided; the page then shows
 * "coming soon" instead of a number.
 */
export const studentPricing = {
  available: false,
  title: "Student pricing",
  body: "Affordable options for high school and college students are on the way. Mention that you're a student in your inquiry and we'll let you know as soon as student pricing is set.",
};

/* -------------------------------------------------------------------------- */
/* Why a professional website                                                 */
/* -------------------------------------------------------------------------- */

export const benefits: { title: string; body: string }[] = [
  {
    title: "Tell the whole story",
    body: "A resume compresses your work into bullet points. A website gives the context, the projects and the person behind them room to breathe.",
  },
  {
    title: "Share accomplishments with one link",
    body: "Projects, certifications, writing and results live in one place, instead of scattered attachments and folders.",
  },
  {
    title: "A home for your LinkedIn and resume",
    body: "Add your own address to your LinkedIn profile, resume header and email signature so people can learn more when they are curious.",
  },
  {
    title: "Show transferable skills",
    body: "Changing fields? Connect what you have done to what you want to do next, in your own words and on your own terms.",
  },
  {
    title: "Own your professional presence",
    body: "Platforms change their layouts and rules. A site you own presents you consistently, the way you choose.",
  },
];

/* -------------------------------------------------------------------------- */
/* How it works                                                               */
/* -------------------------------------------------------------------------- */

export const processSteps: { title: string; body: string }[] = [
  {
    title: "Choose your portfolio",
    body: "Explore the three designs and pick the one that fits your stage. Not sure? Tell us about yourself and we will suggest one.",
  },
  {
    title: "Complete a short questionnaire",
    body: "Share your resume, links, photos and the story you want to tell. No polished writing required.",
  },
  {
    title: "We build and customize your site",
    body: "We shape your content into the design, set your accent color and prepare it for phones, tablets and desktops.",
  },
  {
    title: "Review and request revisions",
    body: "You get a private preview link. Mark what to change and we refine it within your package's revision rounds.",
  },
  {
    title: "Approve and launch",
    body: "Once you approve, your site goes live on the address you choose, ready for your resume, LinkedIn and email signature.",
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Do I need professional experience to have a portfolio website?",
    answer:
      "No. The Career Launch design was made for people at the start of their careers. Education, internships, campus leadership, volunteer work, class projects and part-time jobs all belong on a professional site.",
  },
  {
    question: "Do I need to supply a resume?",
    answer:
      "A current resume is the easiest starting point, but it is not required. The questionnaire walks you through your education, experience and goals, and we work from your answers.",
  },
  {
    question: "What if I don't have projects or work samples?",
    answer:
      "Most people don't have a ready-made portfolio. We can feature coursework, process improvements you led at work, volunteer initiatives or certifications instead. If something can't be shared publicly, we describe it at a level that is safe to share.",
  },
  {
    question: "How long does it take?",
    answer:
      "Typical turnaround is [[turnaround to be confirmed]] after we receive your completed questionnaire and materials. We will confirm your timeline before work begins.",
  },
  {
    question: "Who owns my domain?",
    answer:
      "Your domain should be registered in your name, so it stays yours whatever happens. [[Confirm whether Maple & Signal registers domains on a client's behalf or guides clients to register their own.]]",
  },
  {
    question: "Are there hosting fees?",
    answer:
      "Hosting is separate from the package price. Many personal sites fit within a hosting provider's free plan, but providers set their own limits and prices. [[State your recommended hosting setup and any fees here.]]",
  },
  {
    question: "How do revisions work?",
    answer:
      "Each package includes [[number]] rounds of revisions on your preview site. Changes beyond those rounds, or new sections, are quoted before any extra work begins.",
  },
  {
    question: "Can I update my website later?",
    answer:
      "Yes. Your content is stored in a structured format so new roles, projects and resume files are straightforward to add. Updates after launch are available at [[update rate to be set]].",
  },
];

/* -------------------------------------------------------------------------- */
/* Inquiry form options                                                       */
/* -------------------------------------------------------------------------- */

export const careerStages = [
  "High school student",
  "College student or recent graduate",
  "Early career (1–4 years)",
  "Job seeker or career changer",
  "Experienced professional",
  "Manager, executive or consultant",
] as const;

export const launchTimeframes = [
  "As soon as possible",
  "Within the next month",
  "In one to three months",
  "Just exploring for now",
] as const;

