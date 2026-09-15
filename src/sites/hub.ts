import type { SiteConfig } from "./types";

export const hub: SiteConfig = {
  slug: "hub",
  kind: "hub",
  hosts: [
    "planfungames.com",
    "www.planfungames.com",
    "localhost",
    "127.0.0.1",
  ],
  name: "PlanFunGames",
  accent: "#c2410c",
  seo: {
    title: "PlanFunGames — run rec nights from the group chat you already have",
    description:
      "PlanFunGames attaches to GroupMe first, then other group chats. Organizers get a voice remote. Players do not install an app.",
  },
  hero: {
    kicker: "PlanFunGames.com",
    headline: "Run the night from the chat your group already uses.",
    subhead:
      "PlanFunGames attaches to GroupMe first — other group chats later — so organizers can manage rec nights without making every player download a new app. A voice remote stays with the person running the night.",
    cta: "Bring your group",
  },
  howItWorks: [
    {
      title: "Keep the group where it is",
      body: "People already say they’re in, in GroupMe. We harvest who’s coming from that chat. We keep bot chatter out of the main thread.",
    },
    {
      title: "Organizer tools, not a player app",
      body: "Only the person running the night uses extra controls. Everyone else keeps chat and the court.",
    },
    {
      title: "Talk when typing is the bottleneck",
      body: "A voice-centric phone remote captures results and reads what’s next without unlocking the thread between points.",
    },
  ],
  fab: [
    {
      title: "Stay in GroupMe",
      feature:
        "PlanFunGames attaches to GroupMe first, instead of replacing the chat your group already opens.",
      advantage: "Nobody has to move the social graph into a new app.",
      benefit: "The night still starts in the chat people already open.",
    },
    {
      title: "Players install nothing",
      feature: "Only the organizer uses the extra tools. Players keep chat + court.",
      advantage:
        "Rec groups will not adopt a product that asks twenty people to create accounts.",
      benefit: "You can try it on Tuesday without a software rollout.",
    },
    {
      title: "Voice remote",
      feature:
        "A voice-centric phone app lets the organizer capture scores and hear what’s next without typing in bright sun.",
      advantage: "Faster and safer than unlocking GroupMe between points.",
      benefit: "Games turn over without the organizer hunched over the phone.",
    },
    {
      title: "One night, one truth",
      feature: "Chat, voice, and assignments all describe the same rec night.",
      advantage: "The group does not fork into what an app says vs who’s actually in.",
      benefit:
        "People trust the assignments because they match the I’m-in list they already used.",
    },
  ],
  start: {
    headline: "Bring the group you already have.",
    body: "Organizer-only setup. Players keep chatting as usual. We keep bot chatter out of the main thread. This page is the front door — not a new social network.",
  },
  visual: { kind: "mark", alt: "Group chat and voice remote" },
};
