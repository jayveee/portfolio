export type Project = {
  slug: string
  number: string
  title: string
  label: string
  role: string
  description: string
  tags: string[]
  year: string
  bg: string
  overview: string
  timeline: string
  team: string
  sections: { label: string; body: string }[]
  outcome: string
}

export const projects: Project[] = [
  {
    slug: 'una',
    number: '01',
    title: 'Una',
    label: 'UNA',
    role: 'Lead Product Designer & PM',
    description: 'Cycle-synced wellbeing platform for women. Led product strategy, design system, and Agile transformation across the full product.',
    tags: ['Product Design', 'Design Systems', 'Agile'],
    year: '2024–Present',
    bg: 'bg-stone-200',
    overview: 'Una is a cycle-synced wellbeing platform built for women who want to understand how their body works — not just track a period. I led product strategy, built the design system from scratch, and drove an Agile transformation across a cross-functional team.',
    timeline: '2024–Present',
    team: 'Product Designer (Lead), 2 Engineers, 1 PM',
    sections: [
      {
        label: 'Problem',
        body: "Existing period trackers treat menstrual health as a utility — a symptom log. Una's opportunity was to reframe the cycle as a tool for self-awareness, helping users make decisions about energy, exercise, and nutrition based on where they are in their cycle.",
      },
      {
        label: 'Approach',
        body: 'I led discovery sessions with target users and synthesized findings into a product vision. Built the design system component-first in Figma, documented every token and pattern, and ran weekly design critiques to keep the team aligned. Introduced two-week sprints, retrospectives, and async review processes.',
      },
      {
        label: 'Design',
        body: 'The core UI centers a circular cycle view that makes phase awareness immediate. Color, copy, and content shift with each phase — follicular feels clean and sharp, luteal feels warmer and slower. Every interaction had to feel considered, never clinical.',
      },
    ],
    outcome: 'Shipped the MVP with a complete design system, full accessibility audit, and a team that now runs Agile independently. Currently iterating on personalization features based on early user feedback.',
  },
  {
    slug: 'chefs-choice',
    number: '02',
    title: "Chef's Choice",
    label: "CHEF'S",
    role: 'Lead UX/UI Designer',
    description: 'Food ordering MVP built with React, Node, and Stripe. Designed end-to-end from research to launch.',
    tags: ['MVP', 'Mobile', 'E-commerce'],
    year: '2024',
    bg: 'bg-neutral-800',
    overview: "Chef's Choice is a food ordering platform built to close the gap between home cooks and their neighborhoods. I owned design end-to-end — from discovery through shipped product.",
    timeline: '6 months, 2024',
    team: 'Lead Designer + 2 Engineers',
    sections: [
      {
        label: 'Problem',
        body: "Home cooks have no low-friction way to sell meals in their community. Existing platforms require licenses, fees, and infrastructure that most cooks can't access. Chef's Choice needed to feel approachable for both cooks and buyers while handling real commerce.",
      },
      {
        label: 'Approach',
        body: 'I ran competitive analysis across Goldbelly, EatWith, and local Facebook buy/sell groups to understand where people were already solving this problem. Mapped the core flows — browse, order, fulfill — and prototyped fast before touching production.',
      },
      {
        label: 'Design',
        body: 'Focused on trust signals: verified profiles, clear pricing, pickup windows. The chef dashboard was the harder UX problem — it needed to work on a phone in a kitchen with one hand. Built a component library in Figma that mapped directly to the React component structure.',
      },
    ],
    outcome: 'Launched MVP on schedule. Onboarded 12 home cooks in the first week. Stripe integration handled first transactions without issues. Iterating toward delivery and neighborhood-based discovery.',
  },
  {
    slug: 'beekind',
    number: '03',
    title: 'BeeKind',
    label: 'BEEKIND',
    role: 'UX Designer',
    description: 'Social good mobile app. Led usability testing, market research, and wireframing from concept to mid-fidelity.',
    tags: ['Mobile', 'Research', 'Wireframing'],
    year: '2023–2024',
    bg: 'bg-amber-50',
    overview: 'BeeKind connects volunteers with local community organizations. I led the research and wireframing phases, running usability tests and synthesizing insights that shaped the final product direction.',
    timeline: '2023–2024',
    team: '2 UX Designers, 1 Product Manager',
    sections: [
      {
        label: 'Problem',
        body: "Volunteering platforms often feel transactional and fail to build long-term engagement. BeeKind's goal was to make giving feel easy, personal, and worth returning to — not just a checkbox.",
      },
      {
        label: 'Research',
        body: 'I conducted 8 user interviews with regular volunteers and 6 with lapsed volunteers to understand drop-off. Ran competitive analysis across VolunteerMatch, Idealist, and All for Good. Key insight: people want to see impact, not just hours logged.',
      },
      {
        label: 'Wireframing',
        body: 'Led wireframing from low-fidelity sketches through mid-fidelity Figma flows. Ran two rounds of usability testing with 5 participants each, documented findings, and presented prioritized revisions to the product team.',
      },
    ],
    outcome: 'Delivered mid-fidelity prototype with a validated task completion rate of 87% across core flows. Research findings were incorporated into the product roadmap for the engineering handoff.',
  },
  {
    slug: 'presafe',
    number: '04',
    title: 'Presafe',
    label: 'PRESAFE',
    role: 'UX/UI Designer',
    description: 'Safety iOS and Android app for AlzCare Labs. Designed the alpha product across 4+ years working with a Scrum team.',
    tags: ['iOS', 'Android', 'Healthcare'],
    year: '2019–2023',
    bg: 'bg-slate-200',
    overview: "Presafe is a safety monitoring app for caregivers managing patients with Alzheimer's and dementia. I joined AlzCare Labs early and designed the iOS and Android product across four years, embedded in a Scrum team.",
    timeline: '4 years, 2019–2023',
    team: 'UX Designer, 4 Engineers, 1 Clinical Advisor',
    sections: [
      {
        label: 'Problem',
        body: "Caregivers of Alzheimer's patients live with constant anxiety about wandering and falls. Existing solutions were either too complex or too clinical. Presafe needed to feel calm and trustworthy even in high-stress moments.",
      },
      {
        label: 'Approach',
        body: 'Embedded with the Scrum team through full product cycles — contributing to sprint planning, design reviews, and retrospectives. Worked closely with a clinical advisor to ensure compliance with healthcare UX standards and accessibility requirements.',
      },
      {
        label: 'Design',
        body: 'Designed native iOS and Android experiences following HIG and Material guidelines respectively. Alert design was the most critical surface — required clear hierarchy, large tap targets, and actionable CTAs under stress. Iterated through five major versions based on caregiver feedback.',
      },
    ],
    outcome: 'Alpha shipped to a pilot group of 50 caregivers. 4.2/5 satisfaction rating in post-pilot survey. Core alert and location features cited most positively. Product is in ongoing development.',
  },
  {
    slug: 'bhs',
    number: '05',
    title: 'BHS',
    label: 'BHS',
    role: 'UX Designer',
    description: 'Web platform redesign. User research, information architecture, and responsive UI design.',
    tags: ['Web', 'Research', 'UI Design'],
    year: '2023–2024',
    bg: 'bg-zinc-900',
    overview: 'BHS needed a redesign of their public-facing web platform — a site that had grown organically over years and now struggled with navigation, findability, and mobile experience.',
    timeline: '2023–2024',
    team: 'UX Designer, 1 Developer, 1 Content Strategist',
    sections: [
      {
        label: 'Problem',
        body: "Users couldn't find critical program information, contact details, or service locations without multiple clicks. The site worked on desktop but was nearly unusable on mobile. Trust signals were buried.",
      },
      {
        label: 'Research',
        body: 'Ran card sorting and tree testing with 15 participants to validate a new information architecture. Conducted 5 stakeholder interviews to understand internal content workflows and constraints.',
      },
      {
        label: 'Design',
        body: 'Redesigned the IA from the ground up based on research findings. Built responsive UI in Figma with a focus on accessibility — all components meet WCAG 2.1 AA contrast ratios. Designed for progressive disclosure so high-priority content is always surfaced first.',
      },
    ],
    outcome: 'Delivered high-fidelity responsive prototypes and a component library handed off to the developer. Site is in implementation. Early internal testing shows significantly faster task completion on the new navigation.',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
