export type SiteKind = "hub" | "sport";

export type FabCard = {
  title: string;
  feature: string;
  advantage: string;
  benefit: string;
};

export type HowStep = {
  title: string;
  body: string;
};

export type SiteVisual =
  | { kind: "mascot"; src: string; alt: string }
  | { kind: "image"; src: string; alt: string }
  | { kind: "mark"; alt: string };

export type SiteConfig = {
  slug: string;
  kind: SiteKind;
  hosts: string[];
  name: string;
  accent: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subhead: string;
    cta: string;
  };
  howItWorks: HowStep[];
  fab: FabCard[];
  start: {
    headline: string;
    body: string;
  };
  visual: SiteVisual;
};
