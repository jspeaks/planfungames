# Related POCs (do not import)

This website introduces Plan Fun Games. Other `~/dev` folders already prototyped pieces of the **product**. They are allowed as inspiration. They are not this site’s information architecture.

| Project | What it proved | For this site |
| --- | --- | --- |
| `../aileaderboard` | GroupMe bot + board photo + next-round assignments (pickleball). | Later spoke **capability**, not homepage copy structure. Do not refactor it into this repo. |
| `../voice-app-basics` (Court Admin) | Organizer iPhone voice remote. | Hub + spoke mention of voice. Do not embed the Expo app. |
| `../pickleball-night-ops` | Hours-before GroupMe harvest, ranks, matchups, sit plan. | Later pickleball feature. |
| `../plan-fun-games-mascot` | Celebrating pickleball mascot art. | Visual for the **pickleball spoke** (and optional tiny hub mark). |
| `../roundrobin-sheet` | Round-robin spreadsheet thinking. | Tennis spoke may talk round robins; do not ship the sheet. |
| `../picklebot` | Court-side line-call robot. | Out of scope. |

## Rules for agents

1. Do not copy aileaderboard commands, board-photo tutorials, or schema into landing pages.
2. Do not make the hub a pickleball product page.
3. If a feature needs explaining, write visitor FAB in `FAB.md` — then one short landing section. Link POCs only from this file.
4. Product code stays in those repos until a deliberate extraction, not a drive-by import.
