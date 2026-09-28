// CH17 The Quiet — Friday 5 to Sunday 7 March. The Choir comes inside Wrenfold.
"use strict";
module.exports = [
  {
    id: "CH17.EVE.01", date: "2027-03-05", time: "20:00", place: "P16", cast: ["MC", "C07", "C20"], kind: "common",
    purpose: "An ordinary Friday in the Heronmere cloister: Toby has baked something that didn't catch fire, for the first time since September. He's been learning the Wren's Song's first voice from Imogen's copy, badly. The last warm evening.",
    next: "CH17.QUIET.01"
  },
  {
    id: "CH17.QUIET.01", date: "2027-03-05", time: "23:30", place: "P32", cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "You wake to the hum inside the walls. Every lantern in the castle grey. The Choir is inside Wrenfold. You run for Heronmere, for Toby.",
    next: "CH17.QUIET.02"
  },
  {
    id: "CH17.QUIET.02", date: "2027-03-05", time: "23:45", place: "P16", cast: ["MC", "C07", "C20", "C36"], kind: "common",
    purpose: "The Heronmere cloister: Toby standing in front of Priya and the first-years, singing the first voice alone, badly, until the Hush hums him out. You get there as it ends. You can't bring him back tonight.",
    next: "CH17.QUIET.03"
  },
  {
    id: "CH17.QUIET.03", date: "2027-03-05", time: "23:55", place: "P32", cast: ["MC", "C13"], kind: "common",
    purpose: "The east stair: Professor Grey holding it against six singers so the first-years can get down. What he tells you. He dies on the stair.",
    next: "CH17.AFTER.01"
  },
  {
    id: "CH17.AFTER.01", date: "2027-03-06", time: "10:00", place: "P24", cast: ["MC", "C05", "C07", "C20", "C08"], kind: "common", allowHollowed: true,
    purpose: "The Infirmary in the morning: Toby hollowed, polite, asking your name. Priya. The Headmistress hurt. Noor falls apart, and lets you see it.",
    next: "CH17.AFTER.02"
  },
  {
    id: "CH17.AFTER.02", date: "2027-03-07", time: "19:00", place: "P13", cast: ["MC", "C33", "C08"], kind: "common",
    purpose: "The Lantern Hall with half its lanterns dark. Commander Arkwright tells the school what Magnus Grey was: the Order's man inside the Choir for six years. The ward that let them in was opened from inside, on the Lanternwarden's round.",
    next: "CH18.TULLY.01"
  }
];
