import { hub } from "./hub";
import { pickleball } from "./pickleball";
import { tennis } from "./tennis";
import type { SiteConfig } from "./types";

export type { FabCard, HowStep, SiteConfig, SiteKind, SiteVisual } from "./types";

export const sites: SiteConfig[] = [hub, pickleball, tennis];

function normalizeHost(hostHeader: string): string {
  return hostHeader.split(":")[0]?.toLowerCase() ?? "";
}

export function getSiteByHost(hostHeader: string | null | undefined): SiteConfig {
  const host = normalizeHost(hostHeader ?? "");
  const match = sites.find((site) => site.hosts.includes(host));
  if (match) return match;
  if (host.endsWith(".vercel.app")) return hub;
  return hub;
}

export function canonicalOrigin(site: SiteConfig): string {
  const production = site.hosts.find((h) => h.endsWith("planfungames.com"));
  if (production) return `https://${production}`;
  return `http://${site.hosts[0]}`;
}
