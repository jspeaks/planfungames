# Information architecture

**This file is the contract for every landing page.**  
If copy, sections, CTAs, or visuals disagree with this document, this document wins. Change the IA first, then `src/sites/` in one batch.

Behind-the-scenes debate (why we chose this) lives in [`ia/REASONING.md`](ia/REASONING.md). Do not put that reasoning on the site.

Related: [`OBJECTIVE.md`](OBJECTIVE.md) · [`FAB.md`](FAB.md) · [`SPOKE-AND-WHEEL.md`](SPOKE-AND-WHEEL.md) · [`RELATED-POCS.md`](RELATED-POCS.md)

---

## How agents must work

1. Read this file before editing `src/sites/*`, `SiteLanding`, or SEO metadata.
2. Put product-name, host, and terminology rules into the page config — not into a one-off string on a single host.
3. Do not invent a new page template per sport. Hub and spokes share the **same section skeleton**; only config content and the hero visual change.
4. Do not import `aileaderboard` workflows onto the page. Visitor language only.
5. Brand: **`PlanFunGames`** (camel case, no spaces). Never `Plan Fun Games`.

---

## Surfaces (one app, three hosts)

| Host | Kind | Job of the page |
| --- | --- | --- |
| `PlanFunGames.com` / `www` | Hub | Platform: group chat + organizer tools + voice. **No sport catalog.** |
| `pickleball.PlanFunGames.com` | Primary spoke | Rec pickleball night, in pickleball words and pictures. |
| `tennis.PlanFunGames.com` | Secondary spoke | Club tennis night, in tennis words and pictures. Proves 2+ configs. |

Local: `localhost:3000` = hub; `pickleball.localhost:3000` / `tennis.localhost:3000` = spokes.

Code: `src/sites/{hub,pickleball,tennis}.ts` + shared `src/components/SiteLanding.tsx`.

---

## Page skeleton (every host)

Same order, always. Do not add a sport switcher, mega-nav, or extra pages in this phase.

| # | Section | DOM / config | Purpose |
| --- | --- | --- | --- |
| 1 | Chrome | brand `PlanFunGames` + host kicker | Orient. Not a menu. |
| 2 | Hero | `hero.headline`, `subhead`, `cta`, `visual` | One promise, one picture, one action. |
| 3 | How it works | `howItWorks` (exactly 3 steps) | Mechanism, still visitor language. |
| 4 | Why it works | `fab` cards from [`FAB.md`](FAB.md) | Proof of value. **Name GroupMe here** (hub + pickleball). |
| 5 | Start | `#start` + same CTA | Front door. Not bot-install yet. |
| 6 | Footer | `PlanFunGames.com` only | No sport list. |

No other sections without an IA change.

---

## What each section may say

### Hero

- **One** idea. Headline is the promise. Subhead is who it’s for + what stays the same.
- Hub headline stays **generic** (“the chat your group already uses”).
- Hub subhead **may name GroupMe** as the beachhead, plus a short “other group chats later” — not a catalog (no WhatsApp/Slack/Discord laundry list).
- Pickleball hero **leans GroupMe** (`Same GroupMe`).
- Tennis hero **stays club-chat / tennis group**. Do not make GroupMe the tennis identity.
- **Forbidden on pickleball:** “open play.” That means drop-in strangers. Use **rec night** / **I’m-in** / weeknight.
- **Pickleball pain metaphor (owner-locked 2026-09-15):** spreadsheet, not “software project.”  
  Default line: *without turning Tuesday night into a spreadsheet project.*
- Tennis pain stays **clipboard / draw sheet**, not software.

### How it works

- Three steps. Organizer does the new thing; players do not install.
- Place for **one honest quiet-thread line** (not the H1):

  > We keep bot chatter out of the main thread.

- Do **not** explain a second GroupMe, mute policies, or harvest architecture on the page. That lives in `ia/REASONING.md` and later onboarding.

### Why it works (FAB)

- Keep **GroupMe named** in hub + pickleball FAB titles/features.
- Tennis FAB stays round robin / ladder / club chat. GroupMe at most once as an example in a body line.
- Cards map from [`FAB.md`](FAB.md). If FAB and the page disagree, update FAB first.

### Start / CTA

| Host | CTA |
| --- | --- |
| Hub | **Bring your group** |
| Pickleball | **Bring your pickleball GroupMe** |
| Tennis | **Bring your tennis group** |

Promise of the click: organizer-only setup, players keep chatting, try it on the next rec night. Not “create accounts for everyone.” Mailto is acceptable until real attach exists — don’t inflate urgency.

---

## Visuals

| Host | Visual | Notes |
| --- | --- | --- |
| Hub | Abstract mark (chat + voice) | Not Skip. Not a sport object. |
| Pickleball | **Skip** celebrating (`/mascot-celebrating.webp`) | From `~/dev/plan-fun-games-mascot` (Grok `design/` system). |
| Tennis | **Rally** — tennis-ball body + racquet | Same studio as Skip. Lives in `~/dev/plan-fun-games-mascot/grok/design-tennis/` (`hero-canonical.jpg`, `celebrating.jpg`). Do not copy onto this site until the landing-copy batch. |

---

## Terminology

| Use | Don’t use |
| --- | --- |
| PlanFunGames | Plan Fun Games |
| rec night, weeknight, I’m-in list | open play (for these organized nights) |
| round robin, ladder night, club night | open play (tennis) |
| sit-outs, mixing, next round | tournament desk, DUPR drop-in |
| spreadsheet / clipboard | software project (hero) |
| GroupMe (beachhead) | a list of every chat app |
| keep bot chatter out of the main thread | full parallel-group ops story on the landing |

---

## SEO

Each host has its own title, description, canonical. Never canonicalize a spoke to the hub.

| Host | About |
| --- | --- |
| Hub | GroupMe, group chat, organizer tools, voice, running rec nights |
| Pickleball | Rec pickleball, sit-outs, mixing, neighborhood rec nights |
| Tennis | Club tennis, round robins, ladder nights, court rotation |

---

## Adding a sport (IA checklist)

1. Add a spoke row here (job, hero stance, CTA, visual, terminology).
2. Add FAB cards in `FAB.md`.
3. Add `src/sites/{sport}.ts` + hosts in `index.ts`.
4. DNS + Vercel for `{sport}.planfungames.com`.
5. Hub still does not mention the new sport.

---

## Out of this IA (later)

- Live GroupMe attach / onboarding screens
- Why a quiet side thread exists (setup copy, not landing)
- Extra sports
- Per-host GA streams
- AB test harness
- Extracting aileaderboard or Court Admin into this repo
