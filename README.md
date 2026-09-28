# Wrenfold: A School for Late Magic

A branching interactive novel in 24 chapters, told in the second person. You're twenty-five and your magic came late. A letter slides under your door at midnight, a doorway of light opens in your kitchen wall, and you spend a year at Wrenfold, the only school for the late-kindled: four houses, wands, familiars, festivals, ten thousand floating lanterns, and the Grey Choir, who hum people's magic out of them.

**Complete draft.** All 24 chapters (about 115,000 words), ten endings, six optional romances, and a year-later epilogue. The art is placeholder until ChatGPT's pictures arrive: everything to draw is listed in `docs/05-art-handoff.md`.

**Windows:** `downloads/Wrenfold.exe` is a portable app; double-click to play, no installer.

## Play

Open `index.html` in a browser, or build a single self-contained file:

```bash
node tools/build.js        # dist/wrenfold.html (double-click to play, works offline)
```

## Check

```bash
node tools/gen-config.js   # plan/ -> js/story/plan-data.js
node tools/gen-assets.js   # art/ -> js/art/asset-files.js
node tools/gen-sandbox.js  # plan/ + docs/01-story.md -> js/story/sandbox-world.js (what Sandbox mode tells Claude)
node tools/validate.js     # the script: syntax, speakers present and tagged, the hollowed and the dead, plan cross-checks
node tools/lint-prose.js   # voice (second person) and style
node tools/plan-check.js   # the plan: continuity, routes, endings
node tools/playtest.js --runs 3000 --unshown   # bots play to the end; reports errors and unreached text
```

## Where things are

- `docs/01-story.md`: start here. The whole story, spoilers throughout.
- `docs/02-world.md`: the school, the houses, magic, the year's festivals, the places, the invitation.
- `docs/04-intro-storyboard.md`: the opening pixel-art film, shot by shot. `art/concept/` holds my basic concept frames; the game plays them until ChatGPT's finished frames go in `art/cinematic/`.
- `plan/`: the storyboard as checkable data (cast, places, calendar, routes, evidence, endings, every scene).
- `js/story/scenes/ch01.js` … : the script. `js/story/config.js`: the film's shots, the stat screen, endings copy.
- `js/engine/`: the engine (from Calder), including Sandbox mode (`sandbox.js`) and the film player (in `ui.js`).
- `tools/concept-intro.py`: draws the concept frames (Pillow).
