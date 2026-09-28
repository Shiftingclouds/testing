// CH07 An Evening Already Promised — Saturday 10 October.
"use strict";
module.exports = [
  {
    id: "CH07.MORNING.01", date: "2026-10-10", time: "08:30", place: "P13", cast: ["MC", "C07", "C20"], kind: "common",
    purpose: "Breakfast: Toby asks Priya to the Emberfall lanterns (with or without help). Then the evening: where you actually go, whatever you promised.",
    choices: [
      { id: "match", text: "The match.", type: "relational", to: "CH07.MATCH.01", set: { ch07_way: "match" } },
      { id: "party", text: "The party.", type: "relational", to: "CH07.PARTY.01", set: { ch07_way: "party" } },
      { id: "shift", text: "The night shift.", type: "relational", to: "CH07.SHIFT.01", set: { ch07_way: "shift" } }
    ]
  },
  {
    id: "CH07.MATCH.01", date: "2026-10-10", time: "19:00", place: "P27", cast: ["MC", "C01", "C22", "C16", "C03"], maybe: ["C04", "C07", "C20"], kind: "branch", when: 'ch07_way = "match"',
    purpose: "The first Glimmer match of the year, under the lanterns: Larkspire against Rookhallow. Rowan in goal. Saoirse chasing for Rookhallow.",
    next: "CH07.MATCH.02"
  },
  {
    id: "CH07.MATCH.02", date: "2026-10-10", time: "21:30", place: "P27", cast: ["MC", "C01"], kind: "branch", when: 'ch07_way = "match"',
    purpose: "The empty stands after. Rowan tells you about the house on Tanner's Row.",
    next: "CH07.LATE.01"
  },
  {
    id: "CH07.PARTY.01", date: "2026-10-10", time: "22:00", place: "P17", cast: ["MC", "C03", "C24"], maybe: ["C01", "C07", "C20", "C27"], kind: "branch", when: 'ch07_way = "party"',
    purpose: "The Undercroft party: music, contraptions, and a sofa that flies. You co-pilot.",
    next: "CH07.PARTY.02"
  },
  {
    id: "CH07.PARTY.02", date: "2026-10-11", time: "01:30", place: "P17", cast: ["MC", "C03"], kind: "branch", when: 'ch07_way = "party"',
    purpose: "After, by the forge: Saoirse sitting still for once, and why she never does.",
    next: "CH07.LATE.01"
  },
  {
    id: "CH07.SHIFT.01", date: "2026-10-10", time: "20:00", place: "P24", cast: ["MC", "C05", "C18"], kind: "branch", when: 'ch07_way = "shift"',
    purpose: "The night shift in the Infirmary with Noor: the quiet, the beds, the work.",
    next: "CH07.SHIFT.02"
  },
  {
    id: "CH07.SHIFT.02", date: "2026-10-11", time: "03:00", place: "P24", cast: ["MC", "C05"], kind: "branch", when: 'ch07_way = "shift"',
    purpose: "Three in the morning: Noor, too tired to hold it, and you carry something for her without being asked.",
    next: "CH07.LATE.01"
  },
  {
    id: "CH07.LATE.01", date: "2026-10-11", time: "10:30", place: "P13", cast: ["MC", "C07"], maybe: ["C01", "C03", "C05", "C20"], kind: "common",
    purpose: "Sunday morning: the promise kept, or not, and what that costs. Toby, walking on air.",
    next: "CH08.EMBER.01"
  }
];
