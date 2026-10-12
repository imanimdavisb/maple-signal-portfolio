import type { TransitionProfile } from "./types";

/**
 * FICTIONAL DEMO PROFILE — Career Transition template.
 * Every person, employer and result below is invented for demonstration.
 */
export const marcusBell: TransitionProfile = {
  slug: "marcus-bell",
  template: "transition",
  fictional: true,
  packageId: "career-transition",
  seo: {
    title: "Marcus Bell — Retail Operations to Project Management (Demo)",
    description:
      "A fictional Career Transition portfolio by Maple & Signal: a retail operations leader moving into corporate operations and project management.",
  },
  theme: { accent: "#e8a45c" },
  person: {
    name: "Marcus Bell",
    firstName: "Marcus",
    initials: "MB",
    role: "Operations & project coordination",
    location: "Columbus, OH",
    pronouns: "he/him",
    headshot: null,
    availability: "Open to operations and project coordinator roles",
  },
  intro: {
    eyebrow: "Retail operations → Project management",
    headline: "Nine years running the floor. Ready to run the project.",
    lede: "I’ve spent my career keeping busy stores organized, staffed and on target. Now I’m bringing that same planning, people and process work to corporate operations and project management.",
  },
  summary:
    "Operations leader with nine years in multi-location retail, most recently managing a 24-person store team. I’ve led system rollouts, rebuilt scheduling and inventory processes, and trained new managers. I recently earned the CAPM certification and completed a capstone project plan for a community health clinic. I’m looking for an operations, project coordinator or junior project manager role where I can grow into larger programs.",
  quickFacts: [
    { value: "9 yrs", label: "Retail operations" },
    { value: "24", label: "Largest team led" },
    { value: "3", label: "Stores in last rollout" },
    { value: "CAPM", label: "Certified 2025" },
  ],
  transition: {
    from: "Retail store operations",
    to: "Corporate operations & project management",
    heading: "Why I’m making this move",
    statement: [
      "The parts of my job I’ve enjoyed most were never about a single sale. They were the projects: moving three stores to a new inventory system, rebuilding a schedule that no one trusted, getting a new team ready for a holiday season.",
      "Each one needed the same things a project manager brings: a clear plan, honest communication, and someone who keeps track of the details without losing sight of the people. I want to do that work full time.",
      "I’m not leaving retail behind. Nine years of solving problems in real time, with real customers, is the experience I’m bringing with me.",
    ],
  },
  transferableSkills: [
    {
      skill: "Planning & scheduling",
      then: "Built weekly schedules for 24 staff across peak and off-peak seasons.",
      next: "Resource planning, project schedules and timeline management.",
    },
    {
      skill: "Stakeholder communication",
      then: "Kept district leaders, vendors and store teams aligned during changes.",
      next: "Status reporting, meeting facilitation and stakeholder updates.",
    },
    {
      skill: "Process improvement",
      then: "Redesigned receiving and stocking routines to cut overnight backlog.",
      next: "Process mapping, workflow redesign and continuous improvement.",
    },
    {
      skill: "Change management",
      then: "Trained teams on a new point-of-sale and inventory system.",
      next: "Rollout planning, training plans and adoption tracking.",
    },
    {
      skill: "Budget & reporting",
      then: "Managed payroll hours and weekly sales and loss reports.",
      next: "Budget tracking, KPI dashboards and variance reporting.",
    },
    {
      skill: "Conflict resolution",
      then: "Handled escalated customer and staff issues calmly and fairly.",
      next: "Risk and issue management, negotiation and escalation paths.",
    },
  ],
  accomplishments: [
    {
      value: "3 stores",
      label: "Inventory system rollout",
      context: "Coordinated the move to a new inventory platform across three locations, with no missed opening days.",
    },
    {
      value: "−6 hrs",
      label: "Weekly scheduling time",
      context: "A shared template and request process cut manager scheduling time from about ten hours a week to four.",
    },
    {
      value: "2.1% → 1.4%",
      label: "Inventory loss rate",
      context: "Improved receiving checks and audits brought shrink down over twelve months.",
    },
    {
      value: "5 managers",
      label: "Trained & promoted",
      context: "Mentored assistant managers, five of whom went on to lead their own departments or stores.",
    },
  ],
  timeline: [
    {
      id: "t-2016",
      period: "2016",
      title: "Sales Associate",
      org: "Pinecrest Outfitters",
      kind: "role",
      detail: "Started on the sales floor while finishing an associate degree. Learned the business one customer at a time.",
      carriedForward: ["Customer focus", "Working under pressure"],
    },
    {
      id: "t-2018",
      period: "2018",
      title: "Customer Service Lead",
      org: "Pinecrest Outfitters",
      kind: "role",
      detail: "Ran the service desk and trained new hires on returns, exchanges and escalations.",
      carriedForward: ["Training design", "Conflict resolution"],
    },
    {
      id: "t-2020",
      period: "2020",
      title: "Assistant Store Manager",
      org: "Harlow Home Goods",
      kind: "role",
      detail: "Managed receiving, inventory and opening operations, and rebuilt the store’s scheduling process.",
      carriedForward: ["Process improvement", "Scheduling"],
    },
    {
      id: "t-2022",
      period: "2022",
      title: "Store Manager",
      org: "Harlow Home Goods",
      kind: "role",
      detail: "Led a 24-person team and the store’s budget, then coordinated a three-store inventory system rollout.",
      carriedForward: ["Stakeholder management", "Budget ownership", "Rollout planning"],
    },
    {
      id: "t-2024",
      period: "2024",
      title: "Google Project Management Certificate",
      org: "Coursera",
      kind: "learning",
      detail: "Completed six courses on project initiation, planning, execution and Agile, including a capstone project plan.",
      carriedForward: ["Project charters", "Agile basics"],
    },
    {
      id: "t-2025",
      period: "2025",
      title: "CAPM Certification",
      org: "Project Management Institute",
      kind: "milestone",
      detail: "Earned the Certified Associate in Project Management credential.",
      carriedForward: ["PM frameworks", "Risk management"],
    },
    {
      id: "t-next",
      period: "Next",
      title: "Operations / Project Coordinator",
      org: "Your team",
      kind: "milestone",
      detail: "Bringing nine years of operations leadership into a role focused on planning, coordination and delivery.",
      carriedForward: ["Everything above"],
    },
  ],
  roles: [
    {
      org: "Harlow Home Goods",
      role: "Store Manager",
      location: "Columbus, OH",
      start: "2022",
      end: "Present",
      summary: "Full responsibility for a high-volume home goods store with 24 staff.",
      bullets: [
        "Coordinated a three-store inventory platform rollout with the district team, vendor trainers and store leads.",
        "Owned weekly labor budget, sales reporting and loss-prevention audits.",
        "Hired, trained and coached assistant managers and department leads.",
      ],
      tags: ["Team of 24", "Budget owner", "System rollout"],
    },
    {
      org: "Harlow Home Goods",
      role: "Assistant Store Manager",
      location: "Columbus, OH",
      start: "2020",
      end: "2022",
      bullets: [
        "Redesigned the receiving and stocking routine to reduce overnight backlog.",
        "Built a shared scheduling template and time-off request process used by the whole store.",
      ],
      tags: ["Process redesign", "Scheduling"],
    },
    {
      org: "Pinecrest Outfitters",
      role: "Customer Service Lead · Sales Associate",
      location: "Columbus, OH",
      start: "2016",
      end: "2020",
      bullets: [
        "Led the customer service desk and handled escalated customer issues.",
        "Created a one-page onboarding guide for new service desk staff.",
      ],
      tags: ["Customer experience", "Training"],
    },
  ],
  projects: [
    {
      id: "inventory-rollout",
      title: "Three-store inventory system rollout",
      category: "Operations · 2023",
      year: "2023",
      summary: "Coordinated training, cutover dates and issue tracking for a new inventory platform.",
      role: "Store-level rollout coordinator",
      problem: "Three stores needed to move from paper counts and an old system to a new inventory platform without disrupting sales.",
      approach: [
        "Built a shared rollout calendar and checklist with the district manager and vendor trainer.",
        "Scheduled staff training in small groups around peak hours.",
        "Kept a simple issue log and held a 15-minute daily check-in during cutover week.",
      ],
      outcome: [
        "All three stores went live on schedule, with no missed opening days.",
        "The checklist was reused by the district for two later store openings.",
      ],
      tools: ["Google Sheets", "Shared calendar", "Issue log"],
    },
    {
      id: "scheduling",
      title: "Scheduling process redesign",
      category: "Process improvement · 2021",
      year: "2021",
      summary: "Replaced a whiteboard-and-text-message schedule with a shared template and request process.",
      role: "Lead, as assistant manager",
      problem: "Schedules were built by hand each week and time-off requests often got lost, causing last-minute gaps.",
      approach: [
        "Mapped the existing process with two shift leads to find where requests were dropped.",
        "Created a shared template with coverage rules and a single request form.",
      ],
      outcome: [
        "Manager scheduling time fell from about ten hours a week to four.",
        "Fewer uncovered shifts during the following holiday season.",
      ],
      tools: ["Process mapping", "Google Forms", "Sheets"],
    },
    {
      id: "capstone",
      title: "Clinic intake improvement plan",
      category: "Certificate capstone · 2024",
      year: "2024",
      summary: "A full project plan for reducing patient wait times at a fictional community clinic.",
      role: "Course capstone (individual)",
      problem: "Capstone brief: plan a project to shorten check-in times at a busy community health clinic.",
      approach: [
        "Wrote a project charter, scope statement and RACI chart.",
        "Built a project schedule, risk register and communication plan.",
      ],
      outcome: ["Completed and peer-reviewed as part of the Google Project Management Certificate."],
      tools: ["Project charter", "RACI", "Risk register", "Gantt chart"],
    },
  ],
  certifications: [
    { name: "Certified Associate in Project Management (CAPM)", issuer: "Project Management Institute", year: "2025", status: "Completed" },
    { name: "Google Project Management Professional Certificate", issuer: "Google via Coursera", year: "2024", status: "Completed" },
    { name: "Lean Six Sigma Yellow Belt", issuer: "Professional training provider", year: "2026", status: "In progress" },
  ],
  about: [],
  resume: {
    href: "/resumes/marcus-bell-sample-resume.pdf",
    fileName: "Marcus-Bell-Resume-SAMPLE.pdf",
    updated: "2026",
  },
  contact: {
    heading: "Let’s build something organized together.",
    blurb: "I’m exploring operations, project coordinator and junior project manager roles. I’d welcome a conversation, even an informal one.",
    links: [
      { kind: "email", label: "Email", display: "marcus.bell@example.com", href: null },
      { kind: "linkedin", label: "LinkedIn", display: "linkedin.com/in/your-profile", href: null },
      { kind: "phone", label: "Phone", display: "(555) 010-0000", href: null },
    ],
  },
};
