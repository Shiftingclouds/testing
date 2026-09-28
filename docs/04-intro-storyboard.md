# The opening film — storyboard

Wrenfold opens the way Stardew Valley does: a short pixel-art film before the first word of prose. It plays the first time you press **Begin** (skippable, replayable from the menu), then hands over to Chapter 1 on the same image, so the film and the book are one continuous shot.

**My concept frames** (very basic, for composition and timing only) are in `art/concept/intro-01.png` … `intro-11.png`, and the game plays them as placeholders until ChatGPT's finished frames replace them in `art/cinematic/`. **ChatGPT draws the real thing.**

## Style (for ChatGPT)

- Pixel art in the same family as the Calder environments: 16-bit-era detail, hand-placed pixels, limited palette per shot, soft dithered gradients in skies, no anti-aliased vector edges.
- Canvas **640 × 360** per layer (the game scales by whole numbers). Painted at a native 320 × 180 grid and doubled is ideal.
- Palette arc: deep blue-violet night (shots 1–3) → warm yellow kitchen (4–6) → parchment cream (7) → the portal's gold-white and lantern colours (8–11).
- Some shots are **layered** for parallax (the game slides layers at different speeds): transparent PNGs, same size, named `intro-01-sky.png`, `intro-01-town.png`, etc. Where a shot lists no layers, it's a single image.
- No text in the images (the game sets captions and the letter in its own type).
- The player is never shown from the front: a silhouette from behind, or hands, so it's anyone.

## The shots

| # | Duration | Picture | Movement | Caption (set by the game) |
|---|---|---|---|---|
| 1 | 6 s | **Night sky.** Deep violet to indigo, a scatter of stars, one bright one. A thin crescent moon. | Slow tilt *down* (layers: `sky`, `clouds`). Clouds drift left. | *Most people's magic comes early.* |
| 2 | 7 s | **Wrexley from the hill.** Rooftops and chimneys in blue-black, a church spire, the canal catching moonlight, and the long stone **railway viaduct** across the valley. A lit train crosses it left to right. | Slow pan right (layers: `sky`, `hills`, `town`, `viaduct`, `train`). The train moves faster than the pan. | *Some people's comes late.* |
| 3 | 6 s | **Viaduct Street.** A terraced street under one arch of the viaduct, wet cobbles, a streetlamp, a fox on a wall, a chip-shop sign dark for the night. One upstairs window lit yellow: yours. | Slow push in towards the window (layers: `street`, `fox`, `rain`). The fox turns its head. Light rain. | *(none)* |
| 4 | 7 s | **Your kitchen.** Small, warm, a bit shabby: a table with a laptop showing a work spreadsheet, a microwave meal, a birthday card with a **25** balloon, a mug, a plant on the sill, the wall calendar. You, seen from behind at the table, head in one hand. The kitchen clock says 11:58. | Still, with a slow breathing zoom. | *Thursday. Half past everything.* |
| 5 | 5 s | **The same kitchen, wrong.** The ceiling bulb flickers; the kettle is steaming although it's not switched on; the plant has turned its leaves towards you; a candle on the sill leans your way. The clock: 11:59. | Quick flicker cuts (the game animates the bulb and steam). A slight shake. | *(none)* |
| 6 | 5 s | **The hallway floor, from low down.** Bare boards, the doormat, the draught gap under the front door. A cream **envelope** slides under the door on its own, edges faintly glowing, sealed in red wax with a wren. No one is on the other side (just streetlight under the gap). | The envelope slides in (the game moves it). Then stillness. | *Midnight.* |
| 7 | 9 s | **The letter, open, in your hands.** Close-up from above: your two hands (any skin tone: drawn as simple silhouettes lit warm, or in the six tones as variants), heavy cream parchment, a wren seal broken in half. The page is blank in the art; **the game writes the invitation onto it** line by line. | Very slight drift. Text types in. | *(the invitation, abridged)* |
| 8 | 6 s | **The kitchen wall ripples.** The wallpaper (a faded flower print) bends like water; a thin gold line draws the outline of a **tall arched doorway** in the wall, as if by an invisible pen; papers lift off the table, the birthday card flaps, the candle flame streams towards the wall. | The line draws (the game reveals it with a mask), then light swells. | *(none)* |
| 9 | 6 s | **The doorway open.** Through the arch: a glimpse of **Lamplight Row** at night (crooked gables, hanging lamps in every colour, a lamp-lit cobbled street, an owl on a gutter). The kitchen is lit gold by it. You stand in front of it, a silhouette from behind, one hand on the frame. | Slow push towards the doorway (layers: `kitchen`, `you`, `beyond`). Warm light pulses. | *The doorway will hold until dawn.* |
| 10 | 5 s | **Through.** Pure light, and in it, drifting up, dozens of small paper **lanterns** in gold, rose, green and blue. | Lanterns rise (layer: `lanterns` over `glow`). Fade to white. | *(none)* |
| 11 | 5 s + hold | **Title.** Night over Wrenfold: the castle on its island in a black lake, towers and slate roofs, windows lit, lanterns drifting over it into the stars. The game writes **WRENFOLD** and *A School for Late Magic* over the sky. | Slow drift. Holds under the title until you press Begin. | **WRENFOLD** |

Total about 67 seconds. Any key or click advances a shot; **Skip** jumps to the title.

## Handover to the book

Chapter 1 opens on shot 7's letter: the prose picks up in the kitchen with the doorway humming in the wall, and asks who you are (name, witch or wizard, your job, your look) while the clock ticks past midnight. The film never makes those choices for you.

## Also uses these frames

- The **title screen** is shot 11.
- **Chapter 1's** card is shot 4 (your kitchen).
- The **menu** has *Watch the opening again*.
