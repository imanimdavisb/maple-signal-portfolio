import type { LaunchProfile } from "./types";

/**
 * FICTIONAL DEMO PROFILE — Career Launch template.
 * Every person, school, employer and result below is invented for demonstration.
 */
export const simoneAdeyemi: LaunchProfile = {
  slug: "simone-adeyemi",
  template: "launch",
  fictional: true,
  packageId: "career-launch",
  seo: {
    title: "Simone Adeyemi — Economics & Data Analytics (Demo)",
    description:
      "A fictional Career Launch portfolio by Maple & Signal: a recent economics graduate with internships, campus leadership and data projects.",
  },
  theme: { accent: "#3f6b5a" },
  person: {
    name: "Simone Adeyemi",
    firstName: "Simone",
    initials: "SA",
    role: "Economics graduate & aspiring business analyst",
    location: "Chicago, IL",
    pronouns: "she/her",
    headshot: null,
    availability: "Open to analyst roles starting summer 2026",
  },
  intro: {
    eyebrow: "B.A. Economics, minor in Data Science · Class of 2026",
    headline: "I turn messy data into decisions people can act on.",
    lede: "I’m a recent economics graduate who likes the moment a spreadsheet becomes a story. Through two internships and three years of campus leadership, I’ve learned that good analysis is half numbers and half listening.",
  },
  facts: [
    { label: "Graduating", value: "May 2026" },
    { label: "Based in", value: "Chicago, IL" },
    { label: "Looking for", value: "Business & data analyst roles" },
  ],
  about: [
    "I grew up helping at my aunt’s catering business, where I learned that every number on an invoice has a person behind it. That curiosity followed me to Halbrook University, where I studied economics and picked up a data science minor once I realized I enjoyed building the models as much as reading them.",
    "My internships taught me to ask better questions before opening a dataset: who is going to use this, and what will they decide with it? Outside class I led the Economics Society, tutored statistics and volunteered with a neighborhood small-business clinic.",
    "I’m looking for an analyst role on a team that values clear communication as much as technical skill, somewhere I can keep learning fast and contribute from week one.",
  ],
  education: [
    {
      school: "Halbrook University",
      degree: "B.A. Economics, minor in Data Science",
      location: "Evanston, IL",
      start: "2022",
      end: "2026",
      details: ["GPA 3.7 / 4.0", "Senior thesis: Price sensitivity in neighborhood grocery stores"],
      honors: ["Dean’s List, six semesters", "Undergraduate Research Grant, 2025"],
      coursework: [
        "Econometrics",
        "Applied Regression",
        "Data Visualization",
        "Database Systems",
        "Behavioral Economics",
        "Corporate Finance",
      ],
    },
  ],
  experience: [
    {
      org: "Bramblewood Health Partners",
      role: "Data Analytics Intern",
      location: "Chicago, IL",
      start: "Jun 2025",
      end: "Aug 2025",
      bullets: [
        "Cleaned and merged three years of appointment data to help the operations team study missed-visit patterns.",
        "Built a weekly dashboard in Tableau that replaced a manually updated spreadsheet for clinic managers.",
        "Presented findings on reminder timing to the operations director at the end of the internship.",
      ],
      tags: ["SQL", "Tableau", "Excel"],
    },
    {
      org: "Ferro & Lane Outfitters",
      role: "Marketing Operations Intern",
      location: "Remote",
      start: "Jun 2024",
      end: "Aug 2024",
      bullets: [
        "Organized campaign performance data across email and social channels into one shared tracker.",
        "Drafted the summer campaign recap deck used in the team’s quarterly planning meeting.",
      ],
      tags: ["Google Sheets", "Looker Studio"],
    },
    {
      org: "Halbrook University Library",
      role: "Student Research Assistant",
      start: "Sep 2023",
      end: "May 2026",
      bullets: [
        "Helped students find and cite datasets, and kept the library’s data-resource guide current.",
      ],
    },
  ],
  leadership: [
    {
      org: "Halbrook Economics Society",
      role: "President",
      start: "2024",
      end: "2026",
      bullets: [
        "Led a board of seven and organized a speaker series with alumni working in finance, policy and tech.",
        "Started a résumé-review night pairing first-years with seniors.",
      ],
    },
    {
      org: "Statistics Peer Tutoring",
      role: "Lead Tutor",
      start: "2023",
      end: "2026",
      bullets: ["Held weekly drop-in sessions for introductory statistics and trained four new tutors."],
    },
    {
      org: "Northside Small Business Clinic",
      role: "Volunteer Analyst",
      start: "2024",
      end: "2025",
      bullets: ["Helped local shop owners organize sales records and read simple pricing reports."],
    },
  ],
  skills: [
    { group: "Analysis", items: ["Regression & forecasting", "A/B test design", "Survey analysis", "Financial modeling"] },
    { group: "Tools", items: ["SQL", "Python (pandas)", "R", "Tableau", "Excel", "Looker Studio"] },
    { group: "Communication", items: ["Data storytelling", "Presentation design", "Technical writing", "Workshop facilitation"] },
  ],
  projects: [
    {
      id: "grocery-pricing",
      title: "Neighborhood Grocery Pricing",
      category: "Senior thesis",
      year: "2026",
      summary: "How much do small grocers’ customers react to price changes compared with chain-store shoppers?",
      role: "Independent researcher, advised by faculty",
      problem:
        "Independent grocers often price by instinct. I wanted to know whether their customers respond to price changes differently than shoppers at large chains.",
      approach: [
        "Collected and cleaned two years of anonymized sales data shared by two partner stores.",
        "Estimated price elasticity for 40 staple products using log-linear regression in R.",
        "Interviewed both owners to sanity-check results against what they see day to day.",
      ],
      outcome: [
        "Wrote a 38-page thesis and a two-page plain-language summary for the store owners.",
        "Presented at the university’s spring undergraduate research showcase.",
      ],
      tools: ["R", "Excel", "Interviews"],
    },
    {
      id: "transit-dashboard",
      title: "Transit Access Dashboard",
      category: "Data Visualization course",
      year: "2025",
      summary: "An interactive map comparing travel time to jobs across city neighborhoods.",
      role: "Team of three · data lead",
      problem:
        "Our team wanted to show how commute times to major job centers differ by neighborhood using public transit data.",
      approach: [
        "Combined public transit schedules with census employment data in Python.",
        "Designed a Tableau dashboard with neighborhood filters and plain-language annotations.",
      ],
      outcome: [
        "Earned the course’s top project grade and was shared as an example for future classes.",
      ],
      tools: ["Python", "pandas", "Tableau"],
    },
    {
      id: "club-budget",
      title: "Student Club Budget Model",
      category: "Leadership project",
      year: "2024",
      summary: "A simple forecasting sheet that helped the Economics Society plan its events budget.",
      role: "Society president",
      problem: "Our club kept running out of funds before spring events because spending wasn’t tracked against plans.",
      approach: [
        "Built a shared spreadsheet that forecast spending by event and flagged gaps early.",
        "Ran a 30-minute training for board members on keeping it up to date.",
      ],
      outcome: ["The society finished the year within budget and the board kept using the template the following year."],
      tools: ["Google Sheets"],
    },
  ],
  certifications: [
    { name: "Google Data Analytics Professional Certificate", issuer: "Google via Coursera", year: "2025", status: "Completed" },
    { name: "Tableau Desktop Specialist", issuer: "Tableau", year: "2025", status: "Completed" },
    { name: "Microsoft Office Specialist: Excel Expert", issuer: "Microsoft", year: "2026", status: "In progress" },
  ],
  resume: {
    href: "/resumes/simone-adeyemi-sample-resume.pdf",
    fileName: "Simone-Adeyemi-Resume-SAMPLE.pdf",
    updated: "2026",
  },
  contact: {
    heading: "Let’s talk about your team.",
    blurb: "I’m interviewing for analyst roles beginning in summer 2026 and always happy to talk with people working in data, operations or research.",
    links: [
      { kind: "email", label: "Email", display: "simone.adeyemi@example.com", href: null },
      { kind: "linkedin", label: "LinkedIn", display: "linkedin.com/in/your-profile", href: null },
      { kind: "github", label: "GitHub", display: "github.com/your-handle", href: null },
    ],
  },
};
