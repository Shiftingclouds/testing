// CH19 The Greening — Saturday 20 to Monday 22 March. Spring, the Order's offer, and relighting Toby.
"use strict";
const LEADS = ["rowan", "imogen", "saoirse", "cas", "noor", "idris"];
const IDS = { rowan: "C01", imogen: "C02", saoirse: "C03", cas: "C04", noor: "C05", idris: "C06" };
module.exports = [
  {
    id: "CH19.GREEN.01", date: "2027-03-20", time: "10:00", place: "P20", cast: ["MC", "C11", "C20"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "common",
    purpose: "The Greening, the spring equinox: the Glasshouses thrown open, every student planting a seed for someone. Priya plants one for Toby. Professor Rhys. Something growing, after the Quiet.",
    next: "CH19.OFFER.01"
  },
  {
    id: "CH19.OFFER.01", date: "2027-03-20", time: "17:00", place: "P25", cast: ["MC", "C33", "C08"], kind: "common",
    purpose: "Commander Arkwright's offer: leave Wrenfold with the Order tonight, be kept safe somewhere the Choir will follow, and be the bait that draws Morrow out onto ground of her choosing. The Headmistress against it. You choose.",
    choices: [
      { id: "stay", text: "Stay at Wrenfold.", type: "structural", to: "CH19.TOBY.01", set: { order_offer: "stay" } },
      { id: "leave", text: "Go with the Order.", type: "structural", to: "CH19.LEAVE.01", set: { order_offer: "leave" } }
    ]
  },
  {
    id: "CH19.TOBY.01", date: "2027-03-21", time: "22:00", place: "P24", cast: ["MC", "C07", "C20", "C05"], kind: "branch", when: 'order_offer = "stay"', allowHollowed: true,
    purpose: "You try to relight Toby. There's no spark left in him; you have to give him one of your own. The hardest thing you've done, and it costs you.",
    next: "CH19.ROUTE.01"
  },
  {
    id: "CH19.ROUTE.01", date: "2027-03-22", time: "21:00", place: "P21", cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "branch", when: 'order_offer = "stay"',
    purpose: "The Observatory roof on a clear spring night. Whoever you've come closest to comes up the stair after you and says what they want. You choose what you want back.",
    choices: LEADS.map((l) => ({ id: l, text: "Say yes to " + l + ".", type: "relational", set: { ["st_" + l]: 5 }, to: "CH20.SONG.01" }))
      .concat([{ id: "none", text: "Not now.", type: "relational", to: "CH20.SONG.01" }]),
    next: "CH20.SONG.01"
  },
  {
    id: "CH19.LEAVE.01", date: "2027-03-22", time: "09:00", place: "P11", cast: ["MC", "C33", "C34"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06"], kind: "branch", when: 'order_offer = "leave"',
    purpose: "Platform Nought, with the Order. Who comes to see you off, and who doesn't.",
    next: "CH20.AWAY.01"
  }
];
