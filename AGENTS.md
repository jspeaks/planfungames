<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Commit & Versioning Conventions

For every iteration, update, or code change on this project:

1. **Conventional Commits**:
   - Format all commit messages using Conventional Commits (`feat:`, `fix:`, `style:`, `chore:`, `docs:`, `refactor:`, `perf:`).

2. **Semantic Versioning**:
   - For every functional iteration, bump the version in `package.json` according to SemVer (`0.1.0` -> `0.1.1` for patch fixes/tweaks, `0.2.0` for features).
   - Include the `package.json` version update within the same commit.

3. **Brand name: `PlanFunGames` (camel case, no spaces)**:
   - Product name in UI, docs, metadata, and prose is **`PlanFunGames`**. Never write `Plan Fun Games`.
   - Hosts: `PlanFunGames.com`, `www.PlanFunGames.com`, `pickleball.PlanFunGames.com`, `tennis.PlanFunGames.com`.
   - Hub copy must not list sports. Read `docs/` before changing landings.
