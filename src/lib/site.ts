export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/stories", label: "Stories" },
];

export const contactEmail = "hello@upsidems.org";
export const location = "Vancouver, BC";

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
  sample: boolean;
  problem: string;
  response: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sample-beach-pathway",
    title: "Beach Access Pathway",
    location: "Pacific coast, BC — sample content",
    sample: true,
    problem:
      "Placeholder: describe the specific access barrier at this site — e.g., loose sand and no stable surface between the parking area and the shoreline.",
    response:
      "Placeholder: describe the design response — e.g., a stable, durable matting pathway sized for wheels, canes, and unsteady gaits, plus shaded rest points.",
    outcome:
      "Placeholder: describe the measurable outcome — visits enabled, community response, or plans to replicate the model elsewhere.",
  },
  {
    slug: "sample-forest-trail",
    title: "Forest Trail Rest Points",
    location: "Regional park — sample content",
    sample: true,
    problem:
      "Placeholder: describe the barrier — e.g., a popular trail with no seating for people managing fatigue or heat sensitivity.",
    response:
      "Placeholder: describe the intervention — e.g., shaded seating placed at set intervals in partnership with the park authority.",
    outcome:
      "Placeholder: describe the result and any partner quote.",
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
    date: "2019-05-28",
    excerpt:
      "When you are first told, “You have multiple sclerosis,” it doesn't just land softly. It hits hard. It lingers. One minute, you're sitting in a quiet medical office. The next, your life has been split into two parts. Before and after…",
  },
];
