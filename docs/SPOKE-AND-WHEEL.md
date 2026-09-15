# Spoke and wheel

One Next.js app. Many hosts. Content is configuration, not a fork.

**Page contract (sections, CTAs, terminology):** [`IA.md`](IA.md).  
**Why we chose it (not for the site):** [`ia/REASONING.md`](ia/REASONING.md).

```text
                    pickleball.PlanFunGames.com
                   /  (pickleball language + imagery)
  PlanFunGames.com
  (GroupMe, group tools, voice)
                   \
                    tennis.PlanFunGames.com
                      (tennis language + imagery)
```

## Hosts

| Host | Kind | Job |
| --- | --- | --- |
| `planfungames.com`, `www.planfungames.com` | Hub | Platform story. No sport menu. |
| `pickleball.planfungames.com` | Sport spoke | Primary. Full pickleball landing. |
| `tennis.planfungames.com` | Sport spoke | Secondary. Proves a second config. |

Local aliases: `pickleball.localhost:3000`, `tennis.localhost:3000` (hub remains `localhost:3000`).

## What the hub must never do

- List sports, link a sport directory, or say “we support pickleball and tennis.”
- Use pickleball-only imagery as the whole identity (the mascot belongs on the pickleball spoke).
- Rank or compare spokes.

Spokes may say **PlanFunGames** as the product name. They must not dump the visitor back onto a sports catalog.

## SEO split

| Surface | Title / description about |
| --- | --- |
| Hub | GroupMe, group chat, organizer tools, voice, running rec nights |
| Pickleball | Rec pickleball, sit-outs, mixing, neighborhood rec nights |
| Tennis | Club tennis, round robins, ladder nights, court rotation |

Each host has its own canonical URL. Do not canonicalize spokes to the hub.

## Adding a sport later

1. New file in `src/sites/` (copy + SEO + visual).
2. Register hosts in `src/sites/index.ts`.
3. Porkbun `CNAME` + Vercel domain for `{sport}.planfungames.com`.
4. No new Next.js app.

## Onboarding (later)

The site will eventually help an organizer attach a GroupMe and run a first night. This phase only has to **leave a single CTA** that can later become that flow. Do not build bot install in this pass.
