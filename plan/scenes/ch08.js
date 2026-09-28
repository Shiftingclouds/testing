// CH08 Emberfall — Saturday 31 October, the night the veil thins.
"use strict";
module.exports = [
  {
    id: "CH08.EMBER.01", date: "2026-10-31", time: "18:30", place: "P13", cast: ["MC", "C08", "C07", "C20"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C09", "C14"], kind: "common",
    purpose: "The Emberfall feast: every lantern burns red; masks; apple-fire. The Headmistress's toast to the ones who went before, and the ones who went quiet. Who you walk down to the Mere with.",
    choices: [
      { id: "rowan", text: "Rowan.", type: "relational", to: "CH08.EMBER.02", set: { ember_with: "rowan" } },
      { id: "other", text: "Someone else, or nobody.", type: "relational", to: "CH08.EMBER.02", set: { ember_with: "toby" } }
    ]
  },
  {
    id: "CH08.EMBER.02", date: "2026-10-31", time: "21:00", place: "P12", cast: ["MC", "C07", "C20", "C19"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "Lanterns floated on the Mere to the dead, and to the lost. Tully's lantern for Maisie. Imogen's lantern with a name on it that isn't a dead person's.",
    choices: [
      { id: "fire", text: "(with Rowan, to the apple-fire)", type: "structural", to: "CH08.FIRE.01", when: 'ember_with = "rowan"' },
      { id: "on", text: "(onwards)", type: "structural", to: "CH08.GHOST.01", when: 'ember_with != "rowan"' }
    ]
  },
  {
    id: "CH08.FIRE.01", date: "2026-10-31", time: "22:00", place: "P12", cast: ["MC", "C01"], kind: "branch", when: 'ember_with = "rowan"',
    purpose: "The apple-fire on the shore. Rowan stands too close to it, and it leans towards him like a dog.",
    next: "CH08.GHOST.01"
  },
  {
    id: "CH08.GHOST.01", date: "2026-10-31", time: "23:30", place: "P32", cast: ["MC", "C42"], kind: "common",
    purpose: "Midnight: the ghosts of Wrenfold walk the cloisters. Lettice Crane, hollowed forty years ago, walks straight to you. 'He's coming back for what he lost. And you have it.'",
    next: "CH08.AFTER.01"
  },
  {
    id: "CH08.AFTER.01", date: "2026-11-01", time: "00:30", place: "P13", cast: ["MC", "C07", "C08"], maybe: ["C20"], kind: "common",
    purpose: "The lanterns turn back to gold at half past midnight. Toby's news. The Headmistress at the door: 'Ghosts say things.'",
    next: "CH09.PICK.01"
  }
];
