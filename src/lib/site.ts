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
    location: "Regional parks, BC",
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
  /** Not shown on the site; keeps the original publish order. */
  date: string;
  excerpt: string;
  /** Full post: one string per block ("## " heading, "- " bullet, else paragraph). Falls back to the excerpt. */
  body?: string[];
  contentWarning?: string;
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
      "It took me nine years to believe that. For almost a decade, I lived with my diagnosis like it was a secret I had to protect.",
    footnote:
      "This is the second in a series of Upside MS posts exploring what it means to live fully with chronic illness. They’re for anyone who is tired of pretending to be fine when they’re not.",
    body: [
      "It took me nine years to believe that.",
      "For almost a decade, I lived with my diagnosis like it was a secret I had to protect. Not because I was ashamed of the condition itself, but because I believed it stripped me of something essential.",
      "I thought illness made me less credible. Less worthy. Less lovable.",
      "I kept overcompensating. As if enough effort could make the diagnosis disappear.",
      "It was a quiet, constant self-negotiation. And it nearly broke me.",
      "## The Lie I Lived",
      "I believed self-love was conditional. That it belonged to the future version of me. The one who had figured it out. The one who was steady. Symptom-free. Strong.",
      "But that version of me kept moving farther away, and I kept bending myself into smaller shapes trying to catch up.",
      "I didn’t feel unlovable because I was sick. I felt unlovable because I was hiding.",
      "I was editing my experience in real time: softening the hard days, minimizing the exhaustion, performing capability I didn’t always have. I thought if I could just be palatable enough, manageable enough, inspiring enough, then maybe I could earn my place in the world.",
      "Pretending to be fine when you’re not is its own kind of sickness. It hollows you out. And in that hollowing, something else slipped away: my compassion for others.",
      "When you’re drowning in self-loathing, when you’re convinced your illness makes you less than, it becomes impossible to see clearly. Everyone else’s struggles felt smaller than mine. Their complaints felt trivial. I had become so consumed with my own unworthiness that I couldn’t hold space for anyone else’s pain.",
      "## The Slow Unlearning",
      "Healing didn’t begin with a clean MRI. It began with fatigue. The all-consuming kind that sinks into your bones, from the illness itself and made worse by pretending.",
      "I started to notice how much energy I was burning trying to appear untouched by my condition. How I held my tongue in conversations about health. How I braced my body against vulnerability.",
      "I let myself stop performing. Stop posturing. Stop editing my experience for other people’s comfort.",
      "I started being nicer to myself in small ways. Like, instead of calling myself pathetic for needing a nap, I’d just… take the nap. Revolutionary stuff, I know.",
      "I let it be messy. I stopped trying to turn my pain into something tidy.",
      "I learned that being whole isn’t about having no struggles. It’s about accepting them. The willingness to show up for your life exactly as it is, not as you wish it were.",
      "The real breakthrough was when I stopped believing I had to earn my way back to wholeness. That moment when I realized I didn’t need to find a cure to be worthy of love, mine or anyone else’s. I didn’t need to raise my baseline or fix myself to deserve this peace.",
      "I was already whole. I had always been whole.",
      "This didn’t just change how I saw myself. It opened my heart again. When I stopped drowning in self-loathing, I could finally see other people’s struggles clearly. I could hold space for their pain without measuring it against mine. My compassion, which had been buried under years of pain, came flooding back.",
      "## Here’s What I Know Now",
      "My condition is still here. So is uncertainty. So are hard days.",
      "But I don’t see them as failures anymore. I don’t see myself as something that needs fixing.",
      "I no longer withhold care from myself until I’ve earned it. I no longer wait to feel whole until I’ve done everything “right.” I’m not waiting for a cure to reclaim my life.",
      "I’m living it now.",
      "Not in spite of my illness, but alongside it. With it. Inside the full complexity of it.",
      "I’m learning I can feel awful and still be a whole person. Sounds obvious when I write it out, but it took me forever to get there.",
      "These aren’t contradictions. This is just being human.",
      "This is what it means to stop apologizing for taking up space. To stop shrinking yourself to fit other people’s comfort zones. To stop believing that your worth depends on your ability to hide your struggles.",
      "When you stop hiding, something beautiful happens. You find your purpose inside your pain, not despite it. You discover that your struggles have given you gifts: deeper empathy, hard-won wisdom, unshakeable gratitude for what you do have. These aren’t consolation prizes. They’re what you get from walking (or rolling) through fire.",
      "## If You’re Still Hiding",
      "If you’re performing wellness just to feel worthy, if you’re afraid your truth might make you less visible, less respected — I get it.",
      "You don’t have to prove your strength by pretending you’re not struggling. You don’t have to be twice as good to earn your place. You don’t have to wait until you’re fixed to be fully alive.",
      "You’re not broken. You’re not behind. You’re not excluded from love.",
      "You can show up exactly as you are: messy, figuring it out, whole.",
      "Your symptoms don’t disqualify you from joy. Your bad days don’t cancel out your good ones. Your need for rest doesn’t make you lazy. Your pain doesn’t make you weak.",
      "Your life isn’t on pause. It’s already unfolding. And you are already enough.",
      "I’m supposed to say I’ve learned to love myself exactly as I am. And most days, sure. But last week I caught myself googling “MS breakthrough 2027” at 2am again, so clearly I’m still working on it.",
      "You’re here. Whether you’re living with chronic illness, supporting someone who is, or just tired of pretending everything’s fine when it’s not — you’re reading about this instead of looking away. That’s actually a pretty big deal. Especially when it’s hard.",
      "You don’t need to be cured to be worthy. You don’t need to raise your baseline to deserve love. You’re already whole, and not because you’ve overcome your struggles, but because you’ve learned to live fully with them. And in that living, I found what I never expected: I actually give a damn about people in ways I didn’t before. I can see what matters and what’s just noise. And somehow, I’m grateful for things that used to be invisible.",
    ],
    image: {
      src: "/stories/whole.jpg",
      alt: "A man sits alone on a bench on a grassy hilltop, looking out over a city at sunset",
      credit: "Gantas Vaičiulėnas",
      creditUrl: "https://unsplash.com/photos/man-in-black-long-sleeve-shirt-sitting-on-brown-wooden-bench-looking-at-city-during-daytime-2zr_4MWdrMw",
    },
  },
  {
    slug: "so-it-looks-like-ms",
    title: "“So it looks like MS.”",
    author: "KP",
    date: "2025-04-15",
    excerpt:
      "When you are first told, “You have multiple sclerosis,” it doesn't just land softly. It hits hard. It lingers. One minute, you're sitting in a quiet medical office. The next, your life has been split into two parts. Before and after.",
    contentWarning:
      "This post discusses the emotional and physical impact of an MS diagnosis and its symptoms, including descriptions of nerve pain and the grief process.",
    footnote:
      "This is the first in a series of Upside MS posts written for people navigating life with multiple sclerosis. They explore the realities of living with MS — the challenges, the adaptations, and the ways we move forward together.",
    body: [
      "When you are first told, “You have multiple sclerosis,” it doesn’t just land softly. It hits hard. It lingers.",
      "One minute, you’re sitting in a quiet medical office. The next, your life has been split into two parts. Before and after.",
      "Your brain scrambles to catch up. You might feel numb, terrified, furious, frozen, or perhaps relieved. You might feel everything at once. You might feel nothing at all.",
      "And the strange thing is, MS often doesn’t wait for you to process anything before it starts taking up space in your body.",
      "## The Day My Life Split in Two",
      "I know this because it happened to me. The same day I was diagnosed, I experienced my first real relapse.",
      "It was almost immediate. As soon as I left that appointment, my legs went numb.",
      "Not just tingling or discomfort. Full, deep numbness. It lasted for days.",
      "It wasn’t just my legs, either. I remember feeling something else, something I had no words for at the time. A strange, sharp ache deep inside my head. Not a typical headache. It felt stabbing, like pressure and static inside my brain itself, flickering in and out.",
      "Later, I’d learn this was nerve pain. The kind that’s hard to describe, harder to explain, and nearly impossible to ignore when it decides to flare.",
      "At the time, I didn’t know how stress, trauma, and neurological symptoms could collide like that. I only knew that everything I feared was already happening.",
      "That experience stays with me. It taught me that MS can be unpredictable and cruel. It also taught me that surviving it isn’t about instant answers. It’s about patience.",
      "## Give Yourself Permission to Grieve",
      "There’s no right way to grieve this.",
      "MS grief is strange. You’re not just mourning what you’ve already lost. You’re mourning what you fear you might lose in the future. You’re mourning the version of yourself that felt invincible.",
      "Some people cry immediately. Some go numb emotionally, just like their bodies. Some even feel relief because they finally have an answer for years of unexplained symptoms.",
      "All of it is normal.",
      "I tried to push through it at first. I thought I had to be tough or positive. It didn’t work. Eventually, I had to sit with it.",
      "Grief isn’t a weakness. It’s the first step toward living differently.",
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
      "## Your Timeline Is Yours",
      "Some people start treatment immediately. Others need weeks or months to make a decision.",
      "Both paths are valid.",
      "You’ll hear a lot of opinions. Friends, family, strangers online. They will tell you what worked for them or what you “need” to do.",
      "But MS is personal. Your body, your pace, your choices.",
      "Take time to learn your options. Ask uncomfortable questions. Pause if you need to.",
      "You’re not behind just because someone else moved faster.",
      "## You Will Find People Who Understand",
      "At first, MS feels isolating. Nobody around you seems to fully get it, no matter how much they love you.",
      "That changes when you connect with others who live this life too.",
      "Finding someone who hears you, nods, and says “me too” is one of the most healing experiences in the world.",
      "When that happens, you realize you aren’t carrying this alone. You aren’t the only one navigating this confusing, exhausting, unfair path.",
      "Your family, friends, and loved ones may never understand. Some will abandon you. If you accept this, it will make it easier.",
      "There are people walking and rolling right beside you.",
      "## You Are Still You",
      "MS will try to convince you otherwise.",
      "It will try to take your identity and turn you into only a patient. It will try to shrink your world.",
      "Don’t let it.",
      "You’re still the person who laughs loudly. Still the one who loves your music, your books, your favourite places. Still creative, stubborn, curious, hopeful, sarcastic, or however you describe yourself.",
      "MS doesn’t erase you. It just adds another layer.",
      "## You’re Already Showing Up for the Hardest Thing",
      "If you’re reading this right now and going through something similar, I hope you know this isn’t the end of your story. It’s just a complicated new chapter.",
      "MS is overwhelming, especially at the start. But you’re already surviving it, right now, simply by showing up for yourself.",
      "You will adapt. You will learn. You will keep moving forward, however slowly that happens.",
      "You’re not alone in this, even when it feels like you are. There are people out here who know what it’s like to google symptoms at 2am, who understand the weight of pretending you’re fine when you’re not.",
      "## Helpful Next Steps",
      "- Bring someone supportive to your next medical appointment.",
      "- Keep a notebook or app to track your symptoms and emotions.",
      "- Make space for the parts of your life that have nothing to do with MS.",
    ],
    image: {
      src: "/stories/looks-like-ms.jpg",
      alt: "A doctor in a white coat frowns at a sheet of paper, holding up two fingers, against a red wall",
      credit: "Fotos",
      creditUrl: "https://unsplash.com/photos/a-doctor-holding-a-clipboard-heA9sNqsR7Y",
    },
  },
];
