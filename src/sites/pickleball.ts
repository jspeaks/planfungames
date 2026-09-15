import type { SiteConfig } from "./types";

export const pickleball: SiteConfig = {
  slug: "pickleball",
  kind: "sport",
  hosts: ["pickleball.planfungames.com", "pickleball.localhost"],
  name: "Pickleball",
  accent: "#15803d",
  seo: {
    title: "PlanFunGames for pickleball — rec nights without a player app",
    description:
      "Keep your pickleball GroupMe. Get help with mixing, sit-outs, and the next round. Players do not download anything.",
  },
  hero: {
    kicker: "pickleball.PlanFunGames.com",
    headline: "Better rec pickleball. Same GroupMe.",
    subhead:
      "Neighborhood open play already lives in chat. PlanFunGames helps the organizer mix games, rotate sit-outs, and call the next round — without turning Tuesday night into a software project.",
    cta: "Bring your pickleball GroupMe",
  },
  howItWorks: [
    {
      title: "The group is already in GroupMe",
      body: "Who’s in, who’s late, who’s got to leave at 8 — that already happens in the thread.",
    },
    {
      title: "The organizer runs the night",
      body: "Help with who plays whom, who sits, and how the next round should look. Players still just play.",
    },
    {
      title: "Say the score, start the next game",
      body: "Voice capture between points so you are not typing 11-7 with a paddle in the other hand.",
    },
  ],
  fab: [
    {
      title: "Keep the rec night social",
      feature: "The group still gathers in GroupMe and on the courts.",
      advantage: "No “download our app or you don’t play.”",
      benefit: "The night still feels like pickleball, not like onboarding.",
    },
    {
      title: "Fairer games, no tournament desk",
      feature:
        "The organizer gets help with who plays whom, who sits, and how the next round should look.",
      advantage: "Beats stacking the same four and stranding the 3.0s.",
      benefit:
        "More games that feel right; fewer “I sat twice and they played together again.”",
    },
    {
      title: "Sit-outs without the argument",
      feature:
        "Rotation and sit planning are part of running the night, not a hallway debate.",
      advantage: "Odd counts and extra bodies are normal in rec pickleball.",
      benefit: "People know when they are up, and the organizer is not the villain.",
    },
    {
      title: "Talk the scores in",
      feature: "Voice capture for court scores between games.",
      advantage: "Typing court scores with sweaty hands is the live pain.",
      benefit:
        "The next round starts while people are still catching their breath.",
    },
  ],
  visual: {
    kind: "mascot",
    src: "/mascot-celebrating.webp",
    alt: "A cheerful pickleball mascot waving a paddle in welcome",
  },
};
