// CH01 The Letter — Thursday 10 September, midnight, 7 Viaduct Street. The film hands over on the letter.
"use strict";
module.exports = [
  {
    id: "CH01.KITCHEN.01", date: "2026-09-10", time: "23:59", place: "P01", cast: ["MC"], kind: "common",
    purpose: "The letter in your hands, the doorway humming in the wall. Who you are: your name, witch or wizard, your job, your face in the black window.",
    next: "CH01.KITCHEN.02"
  },
  {
    id: "CH01.KITCHEN.02", date: "2026-09-11", time: "00:10", place: "P01", cast: ["MC"], maybe: ["C38"], kind: "common",
    purpose: "The year of wrong things, remembered. The invitation read properly. The doorway looked through. Dev texted. What to do before dawn.",
    choices: [
      { id: "ring", text: "Ring Nana Pearl.", type: "structural", to: "CH01.NANA.01", set: { told_nana: true } },
      { id: "visit", text: "Go and see Nana Pearl. Now, at midnight.", type: "structural", to: "CH01.NANA.02", set: { told_nana: true } },
      { id: "none", text: "Don't wake her. Pack.", type: "structural", to: "CH01.DOOR.01" }
    ]
  },
  {
    id: "CH01.NANA.01", date: "2026-09-11", time: "00:20", place: "P01", cast: ["MC", "C37"], kind: "branch", when: "told_nana",
    purpose: "On the phone: Nana Pearl, who isn't asleep, and isn't as surprised as she should be.",
    next: "CH01.DOOR.01"
  },
  {
    id: "CH01.NANA.02", date: "2026-09-11", time: "00:45", place: "P02", cast: ["MC", "C37"], kind: "branch", when: "told_nana",
    purpose: "Nana's bungalow at a quarter to one: toast, the budgie, and the story of her own mother, who went away for a year when she was twenty-eight and came back quieter. A silver thimble stamped with a wren.",
    next: "CH01.DOOR.01"
  },
  {
    id: "CH01.DOOR.01", date: "2026-09-11", time: "02:10", place: "P01", cast: ["MC"], kind: "common",
    purpose: "The one thing you take. A note for the morning. Your hand on the frame. Through.",
    set: { ch: 1 },
    next: "CH02.ROW.01"
  }
];
