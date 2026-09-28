// CH12 Longnight — Friday 18 to Tuesday 22 December. The solstice, the Dance, the word Heartfire; home or stay.
"use strict";
module.exports = [
  {
    id: "CH12.FROST.01", date: "2026-12-18", time: "19:00", place: "P12", cast: ["MC", "C07", "C20", "C19"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "The Frost Market on the frozen Mere: stalls on the ice, skating, lanterns hung from poles. Lamplighters on the ice too. Who you ask to the Longnight Dance, or who asks you.",
    next: "CH12.STACKS.01"
  },
  {
    id: "CH12.STACKS.01", date: "2026-12-19", time: "22:00", place: "P22", cast: ["MC", "C02", "C17"], maybe: ["C06"], kind: "common",
    purpose: "Imogen hunting the Wren's Song through the Long Stacks. An old songbook with Hester Wren's music in it, and in the margin, in her hand, the word Heartfire. Miss Dunne tells the old story: Hester's own flame, under the school, lighting every lantern.",
    next: "CH12.DANCE.01"
  },
  {
    id: "CH12.DANCE.01", date: "2026-12-21", time: "20:00", place: "P13", cast: ["MC", "C08", "C19", "C13", "C07", "C20"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "The Longnight Dance in the Lantern Hall: snow falling inside from the ceiling and never landing, the four house bands, the Headmistress's toast. Dancing with whoever you came with. Tully watching the lanterns.",
    next: "CH12.DANCE.02"
  },
  {
    id: "CH12.DANCE.02", date: "2026-12-21", time: "23:40", place: "P13", cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C19"], kind: "common",
    purpose: "Midnight: every lantern burns blue, and under the floor you feel something answer: the Heartfire. Out on the terrace, Cas, and what a late flame cost him in his family.",
    next: "CH12.TERM.01"
  },
  {
    id: "CH12.TERM.01", date: "2026-12-22", time: "09:00", place: "P12", cast: ["MC", "C07", "C08"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "Term ends; the boats. The Headmistress: the school is safest with fewer in it, or home is. Go home to Wrexley for the holidays, or stay.",
    choices: [
      { id: "home", text: "Go home to Nana Pearl.", type: "structural", to: "CH13.HOME.01", set: { ch13_way: "home" } },
      { id: "stay", text: "Stay at Wrenfold.", type: "structural", to: "CH13.STAY.01", set: { ch13_way: "stay" } }
    ]
  }
];
