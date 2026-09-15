# PlanFunGames (`PlanFunGames.com`)

Spoke-and-wheel introduction site: the hub is about GroupMe and organizer tools; sport subdomains speak pickleball and tennis.

Product files: [`docs/IA.md`](docs/IA.md) (page contract) · [`docs/OBJECTIVE.md`](docs/OBJECTIVE.md) · [`docs/FAB.md`](docs/FAB.md) · [`docs/SPOKE-AND-WHEEL.md`](docs/SPOKE-AND-WHEEL.md)

---

## Hosts

| Host | Story |
| --- | --- |
| https://planfungames.com | Platform (GroupMe, group tools, voice) |
| https://pickleball.planfungames.com | Pickleball landing |
| https://tennis.planfungames.com | Tennis landing (second config) |

Local: `localhost:3000` (hub), `pickleball.localhost:3000`, `tennis.localhost:3000`.

---

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

---

## Commit & Versioning

Conventional Commits + SemVer in the same commit. See `.agent/rules/conventions.md`.
