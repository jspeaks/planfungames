---
slug: "planfungames.com"
name: "PlanFunGames"
status: "active"
type: "product"
stack: ["nextjs", "typescript", "tailwind", "vercel"]
tags: ["planfungames", "landing-page", "vercel", "porkbun", "groupme"]
summary: "Spoke-and-wheel intro site: hub is GroupMe/voice games management; pickleball and tennis subdomains carry sport-specific landings."
git: true
updated: "2026-09-15"
---

# PlanFunGames

Introduction website for **PlanFunGames.com**. Attaches to group chat (GroupMe first) plus a voice organizer app so people can plan fun games. Sport spokes use their own hosts and language.

## Intent

Persuade organizers on the **right host**. Hub = platforms. Spokes = pickleball / tennis. Do not turn the root domain into a sports catalog. Do not import `aileaderboard` into this repo.

## Key files

- `docs/IA.md` — **page contract** (read this first when changing landings)
- `docs/ia/REASONING.md` — behind-the-scenes alignment (not for the site)
- `docs/OBJECTIVE.md`
- `docs/FAB.md`
- `docs/SPOKE-AND-WHEEL.md`
- `docs/RELATED-POCS.md`
- `docs/TASKS.md`
- `src/sites/`

## Agent notes

- Changing pages: follow `docs/IA.md`, then edit `src/sites/` in a batch. Do not freelance copy.
- Branding: `PlanFunGames` (no spaces). Hosts: `PlanFunGames.com`, `pickleball.PlanFunGames.com`, `tennis.PlanFunGames.com`.
