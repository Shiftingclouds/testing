// CH05 The Burning Year — Thursday 24 to Saturday 26 September.
"use strict";
module.exports = [
  {
    id: "CH05.HEARTH.01", date: "2026-09-24", time: "17:00", place: "P13", cast: ["MC", "C08", "C07"], maybe: ["C01", "C02", "C03", "C05"], kind: "common",
    purpose: "Hearth, with the Headmistress: keeping your own fire steady. 'Picture your flame.' You picture it, and for a second you see Toby's too.",
    next: "CH05.NIGHT.01"
  },
  {
    id: "CH05.NIGHT.01", date: "2026-09-24", time: "23:40", place: "P32", cast: ["MC"], maybe: ["C01", "C06"], kind: "common",
    purpose: "Out after curfew. You see flames for the first time: the whole castle full of lights through the walls. A humming deep in the stone. A snuffed candle in a bracket; you relight it with your bare hand. Idris sees.",
    next: "CH05.IDRIS.01"
  },
  {
    id: "CH05.IDRIS.01", date: "2026-09-24", time: "23:55", place: "P22", cast: ["MC", "C06"], maybe: ["C19"], kind: "common",
    purpose: "Idris takes you into the Long Stacks and doesn't say the word. 'Go to the Headmistress before someone else notices.' Tully, on his night round, sees you both on the way back.",
    next: "CH05.WEATHERVANE.01"
  },
  {
    id: "CH05.WEATHERVANE.01", date: "2026-09-25", time: "17:00", place: "P25", cast: ["MC", "C08", "C45"], kind: "common",
    purpose: "The Weathervane Room. The Headmistress names it: Kindler. Hester Wren was one. 'The last was a long time ago.' Weekly lessons. Tell no one. The portrait speaks.",
    set: { kindler_known: true },
    next: "CH05.TELL.01"
  },
  {
    id: "CH05.TELL.01", date: "2026-09-26", time: "10:00", place: "P27", cast: ["MC", "C07", "C16"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C22"], kind: "common",
    purpose: "Glimmer trials on a bright Saturday. Whether you tell anyone what you are, and who.",
    next: "CH06.DAWN.01"
  }
];
