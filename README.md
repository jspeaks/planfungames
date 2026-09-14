# Plan Fun Games (`PlanFunGames.com`)

> Placeholder site for **PlanFunGames.com**. Mascot art will land on the homepage once a candidate is chosen from `~/dev/plan-fun-games-mascot`.

---

## Current Status: Phase 1 (Foundation)

- [x] Secured domain name (**`PlanFunGames.com`** & **`www.PlanFunGames.com`**).
- [x] Modern Next.js 16 (App Router) baseline with Tailwind CSS v4 and TypeScript.
- [x] Continuous deployment pipeline via **GitHub** → **Vercel**.
- [x] DNS routing via **Porkbun**.
- [x] Google Analytics 4 ready via `@next/third-parties/google`.
- [x] Multi-harness agent governance (`.agent/`, `AGENTS.md`) with Conventional Commits and Semantic Versioning.
- [ ] Homepage mascot image (pending selection).

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Analytics**: `@next/third-parties/google` (GA4)
- **Hosting & CI/CD**: Vercel (GitHub `main`)
- **DNS & Registrar**: Porkbun

---

## Development

```bash
git clone https://github.com/jspeaks/planfungames.git
cd planfungames
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Commit & Versioning Governance

1. **Conventional Commits**: `feat:`, `fix:`, `style:`, `docs:`, `chore:`, `refactor:`, or `perf:`.
2. **Semantic Versioning**: bump `version` in `package.json` with every functional change, in the same commit.
3. **Agent rules**: `.agent/rules/conventions.md` and `AGENTS.md`.
