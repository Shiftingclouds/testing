// CH09 Under Wrenfold — Wednesday 4 to Saturday 7 November. A complete adventure, one of two.
"use strict";
module.exports = [
  {
    id: "CH09.PICK.01", date: "2026-11-04", time: "07:30", place: "P13", cast: ["MC", "C07", "C06", "C27"], maybe: ["C01", "C02", "C03", "C05"], kind: "common",
    purpose: "Two strange things: students sleepwalking to the sealed door of the Old Cloisters, hearing their names called, Toby among them; and the Long Stacks losing its ink, pages going blank. Which you chase.",
    choices: [
      { id: "cloisters", text: "The voice under the Old Cloisters.", type: "structural", to: "CH09.CLOISTERS.01", set: { ch09_way: "cloisters" } },
      { id: "map", text: "The ink going out of the books.", type: "structural", to: "CH09.MAP.01", set: { ch09_way: "map" } }
    ]
  },
  {
    id: "CH09.CLOISTERS.01", date: "2026-11-04", time: "23:30", place: "P32", cast: ["MC", "C07", "C01"], maybe: ["C05"], kind: "branch", when: 'ch09_way = "cloisters"',
    purpose: "Night watch: Toby gets up in his sleep and walks to the sealed door, answering a voice calling his name. The door opens for you.",
    next: "CH09.CLOISTERS.02"
  },
  {
    id: "CH09.CLOISTERS.02", date: "2026-11-05", time: "00:10", place: "P29", cast: ["MC", "C07", "C01"], maybe: ["C05"], kind: "branch", when: 'ch09_way = "cloisters"',
    purpose: "The Old Cloisters: the Watchman, Hester's old ward-guardian, calling the names of the people it can no longer protect, because its wards are being cut. And an old passage from the boathouse.",
    next: "CH09.DEBRIEF.01"
  },
  {
    id: "CH09.MAP.01", date: "2026-11-04", time: "21:00", place: "P22", cast: ["MC", "C06", "C02", "C17"], kind: "branch", when: 'ch09_way = "map"',
    purpose: "The Long Stacks at night: books going blank, Miss Dunne in despair, and in the restricted cage, the painted Wrenfold Map drinking ink.",
    next: "CH09.MAP.02"
  },
  {
    id: "CH09.MAP.02", date: "2026-11-05", time: "22:00", place: "P22", cast: ["MC", "C03", "C06", "C02"], kind: "branch", when: 'ch09_way = "map"',
    purpose: "Saoirse's ink-pump; the map's hunger; you steady it; it shows its ward lines, and which have been opened, and a line from the boathouse into the Old Cloisters.",
    next: "CH09.DEBRIEF.01"
  },
  {
    id: "CH09.DEBRIEF.01", date: "2026-11-07", time: "10:00", place: "P25", cast: ["MC", "C08"], kind: "common",
    purpose: "The Weathervane Room: the wards are being opened from inside. The Headmistress will have the boathouse passage sealed. By the Lanternwarden.",
    next: "CH10.ROOKERY.01"
  }
];
