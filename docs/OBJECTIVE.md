# Objective

**One-liner:** PlanFunGames attaches to the group chat you already use so organizers can run fun games — without making every player install an app.

## What this project is

**PlanFunGames.com** is the introduction and onboarding website for that product. It is not the game engine, the GroupMe bot, or the voice app. Those live in other `~/dev` experiments. This site’s job is to **explain the idea persuasively**, in the right language, on the right host, then later help organizers step into the system.

The product plugs into **group-centric places people already gather** (GroupMe first; other group tools later) and adds an organizer **voice-centric mobile remote**. Players keep using the chat and the court. Organizers stop juggling the night in a spreadsheet, a memory, or a separate player app.

## Who it is for

- Rec organizers who already run a GroupMe (or similar) for a regular night.
- Players who will not download a new app to play.
- Later: the same pattern for other sports, reached by sport-specific hosts — not by a sports menu on the root domain.

## How the site is shaped

**Spoke and wheel.** The root domain is the wheel: platforms (GroupMe and tools like the voice app). Each sport is a spoke with its own host, SEO, terminology, and imagery.

- Hub: `PlanFunGames.com`
- Primary spoke: `pickleball.PlanFunGames.com`
- Secondary spoke (proves two-or-more configs): `tennis.PlanFunGames.com`

The hub must not catalog sports. A spoke must not feel like a generic PlanFunGames page with the sport name swapped in a heading.

## Success for this phase

1. Three live hosts, three different stories (platform / pickleball / tennis).
2. Adding a third sport is a new config + DNS, not a new codebase.
3. Copy and layout follow proven landing patterns (one idea per section, one CTA, FAB in visitor language).
4. Onboarding into GroupMe is **not** required yet — the pages must be ready to point at it later.

## Out of scope here

- Porting `aileaderboard` into this repo.
- Live bot install, billing, or accounts.
- A sport directory on the root domain.
