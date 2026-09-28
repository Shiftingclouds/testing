// CH23 The Heartfire — night of 20 to 21 June. The root of the rock, and Aldric Morrow.
"use strict";
module.exports = [
  {
    id: "CH23.ROOT.01", date: "2027-06-20", time: "23:50", place: "P30", cast: ["MC", "C35"], maybe: ["C08", "C07", "C43", "C19", "C04"], kind: "common",
    purpose: "The Heartfire in the root of the rock: Hester's flame, four hundred years of it. Aldric Morrow, grey as ash, asking you to carry it for him. If the song held, he came down alone and weakened; if it didn't, he has cracked the Heartfire trying without you, and holds Toby, Maisie and the Headmistress in grey threads. What you do. The endings divide here.",
    choices: [
      { id: "hold", text: "Hold it from him.", type: "structural", set: { heartfire_choice: "hold", ending: "A" }, to: "CH23.DAWN.01" },
      { id: "relight", text: "Relight Morrow.", type: "structural", set: { heartfire_choice: "relight_morrow", ending: "B" }, to: "CH23.DAWN.01" },
      { id: "escape", text: "Try to relight him, and fail.", type: "structural", set: { heartfire_choice: "escape", ending: "F" }, to: "CH23.DAWN.01" },
      { id: "letgo", text: "Let it go out.", type: "structural", set: { heartfire_choice: "let_go", ending: "C" }, to: "CH23.DAWN.01" },
      { id: "give", text: "Give your own flame.", type: "structural", set: { heartfire_choice: "give", ending: "D" }, to: "CH23.DAWN.01" },
      { id: "take", text: "Take it yourself.", type: "structural", set: { heartfire_choice: "take", ending: "E" }, to: "CH23.DAWN.01" },
      { id: "toby", text: "Bring Toby out.", type: "structural", set: { heartfire_choice: "choose", saved_one: "toby", ending: "G_T" }, to: "CH23.DAWN.01" },
      { id: "maisie", text: "Bring Maisie out.", type: "structural", set: { heartfire_choice: "choose", saved_one: "maisie", ending: "G_M" }, to: "CH23.DAWN.01" },
      { id: "kestrel", text: "Bring the Headmistress out.", type: "structural", set: { heartfire_choice: "choose", saved_one: "kestrel", ending: "G_K" }, to: "CH23.DAWN.01" }
    ]
  },
  {
    id: "CH23.DAWN.01", date: "2027-06-21", time: "04:40", place: "P12", also: ["P13", "P30"], cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C13", "C33"], kind: "common", allowDead: true,
    purpose: "Midsummer dawn over the Mere: what's left, who's left, and the ghosts going home.",
    next: "CH24.FEAST.01"
  }
];
