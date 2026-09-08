export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/stories", label: "Stories" },
];

export const contactEmail = "hello@upsidems.org";
export const location = "Vancouver, BC";
export const baseUrl = "https://www.upsidems.org";

export const paths = [
  {
    slug: "advocate",
    title: "Advocate",
    summary:
      "Use your voice where you already have one. Share our work, point out access gaps in parks and natural spaces, and question designs that quietly exclude people.",
    detail:
      "That might mean speaking up at a city meeting or naming a problem when you see it. Advocacy builds pressure long before policies change.",
    cta: "Start advocating",
  },
  {
    slug: "civic-partner",
    title: "Civic Partner",
    summary:
      "Work with us as a municipality, park authority, or public agency on real sites and real decisions.",
    detail:
      "Planning, infrastructure, standards — the work is practical, site-specific, and grounded in lived experience.",
    cta: "Start a civic partnership",
  },
  {
    slug: "community-organization",
    title: "Community Organization",
    summary:
      "Partner with us as a local organization, nonprofit, or community group to identify access barriers where you already work.",
    detail:
      "Together we observe how spaces are actually used and develop solutions that reflect real movement patterns. Local knowledge is essential here.",
    cta: "Partner with us",
  },
  {
    slug: "corporate-partner",
    title: "Corporate Partner",
    summary:
      "Work with us as a business committed to accessibility and inclusion.",
    detail:
      "Partnerships may include sponsorship, employee engagement, or longer-term collaboration aligned with corporate responsibility efforts — work that leads to durable change.",
    cta: "Explore corporate partnership",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  location: string;
  concept: boolean;
  problem: string;
  response: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "concept-beach-pathway",
    title: "Beach Access Pathway",
    location: "Pacific coast, BC",
    concept: true,
    problem:
      "Popular beach access points along BC's coast typically end at loose sand or a steep dune stair — passable on foot, but not for wheels, canes, or anyone managing fatigue or an unsteady gait. The beach is visible from the parking lot and unreachable anyway.",
    response:
      "A stable, low-maintenance boardwalk pathway sized for wheelchairs, walkers, and strollers, running from the parking area to the tideline, with a shaded rest point partway down for anyone who needs to stop.",
    outcome:
      "This is the model we want to build first: a route short enough to fund and construct in a single season, designed with the people who'd actually use it, and documented so it can be replicated at other public beaches once proven.",
  },
  {
    slug: "concept-forest-trail",
    title: "Forest Trail Rest Points",
    location: "Regional park, BC",
    concept: true,
    problem:
      "Many well-used trails have no seating at all, which quietly excludes anyone managing fatigue, heat sensitivity, or a condition like MS that makes distance unpredictable. Without a place to stop, the trail's real accessibility is set by whoever needs to rest soonest.",
    response:
      "Shaded seating placed at set, mapped intervals along an existing trail, planned with the park authority so it fits the terrain and maintenance schedule instead of being an afterthought.",
    outcome:
      "The goal is a small, provable pilot with one park partner — intervals close enough that someone managing fatigue can complete the trail in stages, with the model documented so other parks can adopt it without starting from scratch.",
  },
];

export type Story = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
};

export const stories: Story[] = [
  {
    slug: "you-dont-need-a-cure-to-be-whole",
    title: "You Don't Need a Cure to Be Whole",
    author: "Keith Peterson",
    date: "2025-07-15",
    excerpt:
      "It took me nine years to believe that. For almost a decade, I lived with my diagnosis like it was a secret I had to protect. Not because I was ashamed of the condition itself, but because…",
  },
  {
    slug: "so-it-looks-like-ms",
    title: "“So it looks like MS.”",
    author: "Keith Peterson",
    date: "2025-04-15",
    excerpt:
      "When you are first told, “You have multiple sclerosis,” it doesn't just land softly. It hits hard. It lingers. One minute, you're sitting in a quiet medical office. The next, your life has been split into two parts. Before and after…",
  },
];
