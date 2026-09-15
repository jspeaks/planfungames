import type { SiteConfig } from "./types";

export const tennis: SiteConfig = {
  slug: "tennis",
  kind: "sport",
  hosts: ["tennis.planfungames.com", "tennis.localhost"],
  name: "Tennis",
  accent: "#ca8a04",
  seo: {
    title: "PlanFunGames for tennis — round robins from the club chat",
    description:
      "Run club tennis nights and round robins from the group thread you already have. Organizer voice remote. Players just show up.",
  },
  hero: {
    kicker: "tennis.PlanFunGames.com",
    headline: "Fill the courts from the club chat.",
    subhead:
      "Ladder nights and round robins already live in a group thread. PlanFunGames attaches there so the organizer can rotate who plays, who sits, and which court — without a clipboard becoming the bottleneck.",
    cta: "Bring your tennis group",
  },
  howItWorks: [
    {
      title: "The club already has a thread",
      body: "“I’m in” happens in the club chat. We do not rebuild the roster in a second app. We keep bot chatter out of the main thread.",
    },
    {
      title: "Courts are the constraint",
      body: "Help rotating bodies across a limited court list so fewer people linger and fewer courts sit empty.",
    },
    {
      title: "The desk is a phone",
      body: "Speak results, hear the next pairing. Members play tennis; one person is not stuck as the human draw sheet.",
    },
  ],
  fab: [
    {
      title: "Round robin from the chat",
      feature:
        "The club or ladder already lives in a group thread. PlanFunGames attaches there.",
      advantage: "No second roster in a tennis-club app nobody opens.",
      benefit: "Tonight’s courts get filled from the same chat used to say “I’m in.”",
    },
    {
      title: "Who sits, who plays, which court",
      feature: "Help rotating bodies across a limited court list.",
      advantage: "Tennis nights bottleneck on court count.",
      benefit:
        "Fewer people lingering, fewer unused courts, less organizer math.",
    },
    {
      title: "Organizer voice",
      feature: "The organizer can speak results and hear the next pairing.",
      advantage: "Ladder nights move faster when the desk is a phone, not a clipboard.",
      benefit:
        "Members play tennis; one person is not stuck as the human draw sheet.",
    },
  ],
  start: {
    headline: "Bring the tennis group you already have.",
    body: "Organizer-only setup. Members just show up. We keep bot chatter out of the main thread.",
  },
  visual: {
    kind: "mascot",
    src: "/rally-celebrating.webp",
    alt: "Rally, the PlanFunGames tennis mascot, celebrating",
  },
};
