---
trigger: always_on
---

# Commit & Versioning Conventions

For every iteration, update, or code change on this project:

1. **Conventional Commits**:
   - Always format commit messages using Conventional Commits specification:
     - `feat:` for new user-facing features or content
     - `fix:` for bug fixes
     - `style:` for design, layout, spacing, or visual tweaks
     - `chore:` for dependency updates, tool configuration, or build scripts
     - `docs:` for documentation updates
     - `refactor:` for code restructuring without behavioral change
     - `perf:` for performance improvements

2. **Semantic Versioning**:
   - For every functional iteration, bump the version in `package.json` according to SemVer:
     - Patch bump (`0.1.0` -> `0.1.1`) for small fixes, style adjustments, or maintenance.
     - Minor bump (`0.1.0` -> `0.2.0`) for new features or notable additions.
     - Major bump (`0.1.0` -> `1.0.0`) for breaking changes or major releases.
   - Include the `package.json` version update within the same commit.

3. **Domain Branding & Capitalization**:
   - In all readable content, prose, documentation, and UI text, always capitalize the brand as `PlanFunGames.com` (and `www.PlanFunGames.com`).
   - Sport spokes: `pickleball.PlanFunGames.com`, `tennis.PlanFunGames.com`.
   - The hub must not list or compare sports. Each spoke uses that sport’s language and imagery.
