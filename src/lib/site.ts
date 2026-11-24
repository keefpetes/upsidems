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
      "A route short enough to fund and build in a single season, designed with the people who actually use it, and documented so it can be repeated at other public beaches.",
  },
  {
    slug: "concept-forest-trail",
    title: "Forest Trail Rest Points",
    location: "Regional parks, BC",
    concept: true,
    problem:
      "Many well-used trails have no seating at all, which quietly excludes anyone managing fatigue, heat sensitivity, or a condition like MS that makes distance unpredictable. Without a place to stop, the trail's real accessibility is set by whoever needs to rest soonest.",
    response:
      "Shaded seating placed at set, mapped intervals along an existing trail, planned with the park authority so it fits the terrain and maintenance schedule instead of being an afterthought.",
    outcome:
      "Intervals close enough that someone managing fatigue can complete the trail in stages, documented so other parks can adopt the approach without starting from scratch.",
  },
];

export type Story = {
  slug: string;
  title: string;
  author: string;
  /** Not shown on the site; keeps the original publish order. */
  date: string;
  excerpt: string;
  /** Full post: one string per block ("## " heading, "- " bullet, else paragraph). Falls back to the excerpt. */
  body?: string[];
  /** Required on every post: say what it covers, even if it's only emotional. */
  contentWarning: string;
  /** Small italic note after the sign-off. */
  footnote?: string;
  image: { src: string; alt: string; credit: string; creditUrl: string };
};

export const stories: Story[] = [
  {
    slug: "you-dont-need-a-cure-to-be-whole",
    title: "You Don't Need a Cure to Be Whole",
    author: "KP",
    date: "2025-07-15",
    excerpt:
      "For almost a decade, I hid my MS like a secret I had to protect. I thought hiding only cost me. It cost the people around me too.",
    contentWarning:
      "This post discusses shame, self-loathing and the emotional weight of hiding a chronic illness.",
    footnote:
      "This is the second in a series of Upside MS posts exploring what it means to live fully with chronic illness. They’re for anyone who is tired of pretending to be fine when they’re not.",
    body: [
      "It took me nine years to believe that.",
      "For almost a decade, I lived with my diagnosis like it was a secret I had to protect. I thought hiding it only cost me. It didn’t. It cost the people around me too.",
      "When you’re convinced your illness makes you less than, it becomes impossible to see anyone else clearly. Everyone else’s struggles felt smaller than mine. Their complaints felt trivial. I had become so consumed with my own unworthiness that I couldn’t make room for anyone else’s pain.",
      "That’s the part people don’t say. Hiding doesn’t just wear you down. It wears down your compassion for everyone near you.",
      "## The Lie I Lived",
      "I hid not because I was ashamed of the condition itself, but because I believed it stripped me of something essential. I thought illness made me less credible. Less worthy. Less lovable.",
      "I believed self-love was conditional. That it belonged to the future version of me. The one who had figured it out. The one who was steady. Symptom-free. Strong.",
      "But that version of me kept moving farther away, and I kept bending myself into smaller shapes trying to catch up.",
      "I didn’t feel unlovable because I was sick. I felt unlovable because I was hiding.",
      "I was editing my experience in real time: softening the hard days, minimizing the exhaustion, performing capability I didn’t always have. I thought if I could just be palatable enough, manageable enough, inspiring enough, then maybe I could earn my place in the world.",
      "Pretending to be fine when you’re not is its own kind of sickness. It hollows you out. It was a quiet, constant self-negotiation. And it nearly broke me.",
      "## The Slow Unlearning",
      "Healing didn’t begin with a clean MRI. It began with fatigue. The all-consuming kind that sinks into your bones, from the illness itself and made worse by pretending.",
      "I started to notice how much energy I was burning trying to appear untouched by my condition. How I held my tongue in conversations about health. How I braced my body against vulnerability.",
      "I let myself stop performing. Stop posturing. Stop editing my experience for other people’s comfort.",
      "I started being nicer to myself in small ways. Like, instead of calling myself pathetic for needing a nap, I’d just… take the nap. Revolutionary stuff, I know.",
      "I let it be messy. I stopped trying to turn my pain into something tidy.",
      "The real breakthrough was when I stopped believing I had to earn my way back to wholeness. That moment when I realized I didn’t need to find a cure to be worthy of love, mine or anyone else’s. I didn’t need to raise my baseline or fix myself to deserve this peace.",
      "And the people around me got something back too. When I stopped drowning in self-loathing, I could finally see other people’s struggles clearly. I could sit with their pain without measuring it against mine. My compassion, which had been buried under years of pain, came flooding back.",
      "## Here’s What I Know Now",
      "My condition is still here. So is uncertainty. So are hard days.",
      "But I don’t see them as failures anymore. I don’t see myself as something that needs fixing.",
      "I no longer withhold care from myself until I’ve earned it. I no longer wait to feel whole until I’ve done everything “right.” I’m not waiting for a cure to reclaim my life.",
      "I’m living it now.",
      "Not in spite of my illness, but alongside it. With it. Inside all of it.",
      "I’m learning I can feel awful and still be a whole person. Sounds obvious when I write it out, but it took me forever to get there.",
      "That’s just being human.",
      "This is what it means to stop apologizing for taking up space. To stop shrinking yourself to fit other people’s comfort zones. To stop believing that your worth depends on your ability to hide your struggles.",
      "When you stop hiding, you start to find your purpose inside your pain, not despite it. You notice what your struggles have given you. These aren’t consolation prizes. They’re what you get from walking (or rolling) through fire.",
      "## Still Working On It",
      "I’m supposed to say I’ve learned to love myself exactly as I am. And most days, sure.",
      "But last week I caught myself googling “MS breakthrough 2027” at 2am again.",
      "Some part of me is still waiting for the version of me I spent nine years chasing. Steady. Symptom-free. Strong. I don’t think that part goes away. I just don’t hide it anymore, from myself or from anyone else.",
      "So clearly I’m still working on it.",
    ],
    image: {
      src: "/stories/whole.jpg",
      alt: "A man in a white T-shirt sits on a wooden bench, looking out over sunlit green hills and tall grass",
      credit: "Daniel Newman",
      creditUrl: "https://unsplash.com/photos/a-man-sitting-on-a-bench-in-a-field-VkPAYNSTN3A",
    },
  },
  {
    slug: "so-it-looks-like-ms",
    title: "“So it looks like MS.”",
    author: "KP",
    date: "2025-04-15",
    excerpt:
      "The same day I was diagnosed with multiple sclerosis, I had my first real relapse. As soon as I left that appointment, my legs went numb.",
    contentWarning:
      "This post discusses the emotional and physical impact of an MS diagnosis and its symptoms, including descriptions of nerve pain and the grief process.",
    footnote:
      "This is the first in a series of Upside MS posts written for people navigating life with multiple sclerosis.",
    body: [
      "The same day I was diagnosed with multiple sclerosis, I had my first real relapse.",
      "It was almost immediate. As soon as I left that appointment, my legs went numb.",
      "Not tingling. Not discomfort. Full, deep numbness. It lasted for days.",
      "It wasn’t just my legs, either. There was something else, something I had no words for at the time. A strange, sharp ache deep inside my head. Not a typical headache. It felt stabbing, like pressure and static inside my brain itself, flickering in and out.",
      "Later, I’d learn this was nerve pain. The kind that’s hard to describe, harder to explain, and nearly impossible to ignore when it decides to flare.",
      "One minute, I was sitting in a quiet medical office. The next, my life had been split into two parts. Before and after. MS didn’t wait for me to process anything before it started taking up space in my body.",
      "At the time, I didn’t know how stress, trauma, and neurological symptoms could collide like that. I only knew that everything I feared was already happening.",
      "That experience stays with me. It taught me that MS can be unpredictable and cruel. It also taught me that surviving it takes patience, not instant answers.",
      "## Give Yourself Permission to Grieve",
      "There’s no right way to grieve this.",
      "MS grief is strange. You’re not just mourning what you’ve already lost. You’re mourning what you fear you might lose in the future. You’re mourning the version of yourself that felt invincible.",
      "Some people cry immediately. Some go numb emotionally, just like their bodies. Some even feel relief because they finally have an answer for years of unexplained symptoms.",
      "I tried to push through it at first. I thought I had to be tough or positive. It didn’t work. Eventually, I had to sit with it.",
      "## Your Neurologist May Not Be Warm. Forgive Them Anyway.",
      "Here’s something nobody warns you about: your neurologist might not deliver your diagnosis kindly.",
      "Mine didn’t.",
      "I got a short explanation and a few cold words. That was it. No warmth. No acknowledgment of what those words meant for me.",
      "I walked out of that appointment feeling like I’d just been punched in the stomach.",
      "Many neurologists are brilliant clinicians but poor communicators. They deal with these conversations all the time. Some grow distant because they think it protects them. Others simply don’t know how to speak like human beings outside of medical terms.",
      "That doesn’t make it okay. But I learned something important about forgiving them.",
      "Forgiveness here isn’t about excusing their behaviour. It’s about freeing yourself.",
      "If you stay angry at the person who delivered your diagnosis, you stay stuck in that room with them. You stay tethered to the worst moment of your life.",
      "I stayed there too long. When I finally let it go, I realized I wasn’t angry at them anymore. I just needed to reclaim my space.",
      "And yes, you can always get a new doctor.",
      "## You Will Find People Who Understand",
      "At first, MS feels isolating. Nobody around you seems to fully get it, no matter how much they love you.",
      "That changes when you connect with others who live this life too.",
      "Finding someone who hears you, nods, and says “me too” is one of the most healing experiences in the world.",
      "When that happens, you realize you aren’t carrying this alone. You aren’t the only one living this confusing, exhausting, unfair life.",
      "Your family, friends, and loved ones may never understand. Some will abandon you. If you accept this, it will make it easier.",
      "There are people walking and rolling right beside you.",
      "## You Are Still You",
      "MS will try to convince you otherwise.",
      "It will try to take your identity and turn you into only a patient. It will try to shrink your world.",
      "Don’t let it.",
      "You’re still the person who laughs loudly. Still the one who loves your music, your books, your favourite places. Still creative, stubborn, curious, hopeful, sarcastic, or however you describe yourself.",
      "MS doesn’t erase you. It just adds another layer.",
    ],
    image: {
      src: "/stories/looks-like-ms.jpg",
      alt: "A doctor in a white coat frowns at a sheet of paper, holding up two fingers, against a red wall",
      credit: "Fotos",
      creditUrl: "https://unsplash.com/photos/a-doctor-holding-a-clipboard-heA9sNqsR7Y",
    },
  },
];
